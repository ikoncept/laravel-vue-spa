import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'vite-plugin-laravel'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: [

                    ]
                }
            }
        }
    },
    plugins: [
        vue(),
        laravel({
            postcss: [
                tailwindcss(),
                autoprefixer()
            ]
        }),
        splitVendorChunkPlugin()
    ]
})
