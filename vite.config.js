import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function viteEnvShim() {
  return {
    name: 'vite-env-shim',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/node_modules/vite/dist/client/env.mjs') {
          req.url = '/@vite/env'
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteEnvShim()
  ],
})
