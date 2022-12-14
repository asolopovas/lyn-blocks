import fs from 'fs'
import {defineConfig} from 'vite'
import {fileURLToPath} from 'node:url'
import wpResolve from './vite/resolve-wp-dependencies.js'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'

const examplePlugin = () => {
    let config

    return {
        name: 'read-config',

        configResolved(resolvedConfig) {
            // store the resolved config
            config = resolvedConfig
        },

        // use stored config in other hooks
        transform(code, id) {
            if (config.command === 'serve') {
                console.log({code, id})
                // dev: plugin invoked by dev server
            } else {
                // build: plugin invoked by Rollup
            }
        },
    }
}

export default defineConfig({
    build: '.',
    server: {
        host: hmrHost,
        https: {
            key: fs.readFileSync(`${keyPath}/${hmrHost}.key`),
            cert: fs.readFileSync(`${keyPath}/${hmrHost}.crt`),
        },
    },
    plugins: [
        wpResolve(),
        svgr(),
        gutenberg({
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
