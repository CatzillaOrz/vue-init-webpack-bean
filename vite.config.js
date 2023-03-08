
import { defineConfig } from 'vite'
//import vue from '@vitejs/plugin-vue';
import { createVuePlugin as vue } from "vite-plugin-vue2";
const path = require("path");

export default defineConfig({
  plugins: [vue()],
  runtimeCompiler: true,
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      "@": path.resolve(__dirname, "./src"),
      '@lib': path.resolve(__dirname, './src/libs'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    optimizeDeps: {
      exclude: ['vue-demi']
    }
  },

})
