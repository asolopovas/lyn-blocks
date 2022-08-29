import fs from 'fs'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import wpResolve from './vite/resolve-wp-dependencies.js'

const keyPath = `./ssl`
const hmrHost = process.env.HMR_HOST || 'localhost'

export default defineConfig({
    build: '.',
    server: {
        host: hmrHost,
        https: {
            key: fs.readFileSync(`${keyPath}/${hmrHost}.key`),
            cert: fs.readFileSync(`${keyPath}/${hmrHost}.crt`),
        },
    },
    resolve: {
        // alias: {
        //     'photoSwipe': 'photoswipe/dist/photoswipe.js',
        //     'photoSwipeUI': 'photoswipe/dist/photoswipe-ui-default.js',
        // },
    },
    rollupOptions: {
        input: {
            'lyn-column': fileURLToPath(new URL('./src/blocks/lyn-column/index.js', import.meta.url)),
            'lyn-columns': fileURLToPath(new URL('./src/blocks/lyn-columns/index.js', import.meta.url)),
            // other entrypoints
        },
        output: {
            chunkFileNames: '[name].[ext]',
            entryFileNames: '[name].js',
            format: 'iife',
        },
    },
    plugins: [
        wpResolve(),
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
