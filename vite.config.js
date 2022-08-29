import fs from 'fs'
import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'

import reactRefresh from '@vitejs/plugin-react-refresh'
import reactSvgPlugin from 'vite-plugin-react-svg'

const keyPath = `./src/ssl`
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
        external: ['jquery'],
        output: {
            jquery: '$',
        },
    },
    plugins: [
        laravel({
            input: [
                'src/Blocks/Swiper/swiper.js',
                'src/Blocks/Gallery/photoswipe.js',
                'src/assets/global.scss',
                'src/Blocks/Swiper/sass/swiper.scss',
                'src/Blocks/Gallery/sass/photoswipe.scss',
            ],
            publicDirectory: 'dist',
            buildDirectory: '.'
        }),
        reactSvgPlugin(),
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
