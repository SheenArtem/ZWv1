import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ZWv1/",
  build: {
    commonjsOptions: {
      include: [/lunar-javascript/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
})
