import fs from 'fs'
import {defineConfig} from 'vite'
import gutenberg from '/home/andrius/git/vite-gutenberg-plugin/dist/index.js'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'

const testPlugin = () => {
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
                //  if id contains wordpress_blocks
                //  then replace the code with the code from the block
                //  and return the code

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
        host: 'localhost',
        https: {
            key: fs.readFileSync(`./ssl/localhost.key`),
            cert: fs.readFileSync(`./ssl/localhost.crt`),
        },
    },
    plugins: [
        svgr(),
        gutenberg({
            input: [
                './src/blocks/test-block/index.jsx',
            ],
            publicDirectory: 'dist',
            buildDirectory: '.'
        }),
        testPlugin(),
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
