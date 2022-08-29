import fs from 'fs'
import {defineConfig} from 'vite'
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react'
import wpResolve from './vite/resolve-wp-dependencies.js'
import laravel from 'laravel-vite-plugin'
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from '@honkhonk/vite-plugin-svgr'


const keyPath = `./ssl`
const hmrHost = 'localhost'

// Resolve absolute paths for entrypoints
const entryPoints = [
    './src/blocks/lyn-column/index.js',
    './src/blocks/lyn-columns/index.js'
].map(entry => fileURLToPath(new URL(entry, import.meta.url)))

export default defineConfig({
    // server: {
    //     host: hmrHost,
    //     https: {
    //         key: fs.readFileSync(`${keyPath}/${hmrHost}.key`),
    //         cert: fs.readFileSync(`${keyPath}/${hmrHost}.crt`),
    //     },
    // },
    plugins: [
        wpResolve(),
        svgr(),
        react({
            jsxRuntime: 'classic',
            jsxImportSource: '@wordpress/element',
        }),
        laravel({
            input: [
                './src/blocks/lyn-column/index.js',
                './src/blocks/lyn-columns/index.js'
            ],
            publicDirectory: 'dist',
            buildDirectory: '.'
        }),
        reactRefresh(),
    ],
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
})
