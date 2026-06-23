import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: '../server/public',
        emptyOutDir: true
    },
    server: {//we are saying when we try to access the /gifts endpoint from the client, we want the server to acess this route at http://localhost:3001 while in development
        proxy: {
            '/gifts': {
                target: 'http://localhost:3001'
            }
        }
    }
})