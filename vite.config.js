import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:{
      assets: '/src/assets',
      images: '/public/images',
    },
  },

  build:{
    rollupOptions:{
      input: {
        index : 'index.html',
      }
    }
  }
  
});
