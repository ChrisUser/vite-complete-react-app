/// <reference types="vitest/config" />
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts']
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    server: {
        port: 3000
    },
    build: {
        outDir: 'build'
    }
})
