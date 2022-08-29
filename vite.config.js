import fs from 'fs'
import {defineConfig} from 'vite'
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react'
import wpResolve from './vite/resolve-wp-dependencies.js'

const keyPath = `./ssl`
const hmrHost = 'localhost'

// Resolve absolute paths for entrypoints
const entryPoints = [
    './src/blocks/lyn-column/index.js',
    './src/blocks/lyn-columns/index.js'
].map(entry => fileURLToPath(new URL(entry, import.meta.url)))

export default defineConfig({
    server: {
        host: 'localhost',
        https: {
            key: fs.readFileSync(`${keyPath}/${hmrHost}.key`),
            cert: fs.readFileSync(`${keyPath}/${hmrHost}.crt`),
        },
    },
    build: {
        rollupOptions: {
            input: entryPoints,
            output: {
                chunkFileNames: '[name].[ext]',
                entryFileNames: '[name].js',
                format: 'iife',
            },
        },
    },
    esbuild: {
        loader: 'jsx',
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    plugins: [
        wpResolve(),
        react({
            jsxRuntime: 'classic',
            jsxImportSource: '@wordpress/element',
        }),
    ],
})
