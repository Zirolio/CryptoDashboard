import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react'
            if (id.includes('lodash')) return 'lodash'
            return 'vendor'
          }
        }
      }
    }
  },
  base: '/CryptoDashboard/'
})
