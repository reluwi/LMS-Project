import path from "path"
import { fileURLToPath } from 'url'
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Requests to any path starting with /api will be sent to the backend.
      '/api': {
        target: 'http://localhost:5000', // Your Express server's address
        changeOrigin: true, // Necessary for virtual-hosted sites
      },
    }
  }
})

