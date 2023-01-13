import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  SCM_DO_BUILD_DURING_DEPLOYMENT: false,
  plugins: [react()],
})
