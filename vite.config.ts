import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import sassDts from 'vite-plugin-sass-dts';

const debug = true;

// https://vite.dev/config/
export default defineConfig({
	css: {
		modules: {
			generateScopedName: debug ? '[name]_[local]_[hash:base64:5]' : '[hash:base64:5]',
		},
	},
	build: {
		minify: !debug ? 'esbuild' : false,
		sourcemap: debug,
		manifest: true,
	},
	clearScreen: false,
	plugins: [
		react({
			jsxImportSource: '@welldone-software/why-did-you-render',
			babel: {
				plugins: ['babel-plugin-react-compiler', {}]
			}
		}),
		sassDts({
			enabledMode: ['development', 'production'],
		}),
		visualizer({
			sourcemap: debug,
		}),
	],
})
