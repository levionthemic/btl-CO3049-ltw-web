import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window' // fix cho một số lib nếu dùng PerfectScrollbar
  },
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }

})
