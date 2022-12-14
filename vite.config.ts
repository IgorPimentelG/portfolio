import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@theme': path.resolve(__dirname, './src/theme')
		}
	}
})
