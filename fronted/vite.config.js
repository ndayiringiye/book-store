import jsconfigPaths from "vite-jsconfig-paths"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server:{
    port:3000
  }
});
