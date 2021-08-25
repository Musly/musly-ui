import 'dotenv/config';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import reactSvg from 'vite-plugin-react-svg';
import graphql from '@rollup/plugin-graphql';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvg({
      defaultExport: 'component',
    }),
    graphql(),
    legacy(),
  ],
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  build: {
    sourcemap: true,
  },
});
