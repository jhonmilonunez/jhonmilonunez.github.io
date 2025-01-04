import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'build', // Specify the output directory as 'build'
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "projects.html"),
        funsies: resolve(__dirname, "funsies.html")
      },

      output: {
        assetFileNames: "assets/[name].[ext]"
      },
    }
  },
})
