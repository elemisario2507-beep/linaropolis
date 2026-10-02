import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para Linarópolis
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Permitir conexiones desde otros dispositivos en la red local
  // (necesario para probar desde el móvil)
  server: {
    host: true,
    port: 5173,
  },
})
