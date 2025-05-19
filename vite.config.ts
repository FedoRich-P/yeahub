import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import tailwindcss from '@tailwindcss/vite';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@store': path.resolve(__dirname, './src/store'),
			'@features': path.resolve(__dirname, './src/store/features'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
});
