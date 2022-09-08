import fs from 'fs'
import {defineConfig} from 'vite'
import {fileURLToPath} from 'node:url'
import wpResolve from './vite/resolve-wp-dependencies.js'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react';
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
        laravel({
            input: [
                './src/blocks/lyn-column/index.js',
                './src/blocks/lyn-columns/index.js'
            ],
            publicDirectory: 'dist',
            buildDirectory: '.'
        }),
        react({
            jsxRuntime: 'classic',
            jsxImportSource: '@wordpress/element',
        }),
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
