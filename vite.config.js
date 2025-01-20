import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'Z
import Services from './path-to-your-services-file/Services';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
