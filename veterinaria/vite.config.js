import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TbAi } from 'react-icons/tb'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
