import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['9010-2401-4900-1c23-886b-38c6-bf9d-4efa-297d.ngrok-free.app']
  }
})
