import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // remove or comment out the resolve block
  // resolve: {
  //   alias: {
  //     'react-dom/client': 'react-dom',
  //   },
  // },
})
