import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  esbuild: { jsx: 'automatic' },
  plugins: [{ name: 'marqbyte-html-page-development', configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const path = (req.url || '').split('?')[0];
      if (path.endsWith('.html') && path !== '/index.html') req.url = '/index.html';
      next();
    });
  } }],
  build: { target: 'es2022', sourcemap: false },
});
