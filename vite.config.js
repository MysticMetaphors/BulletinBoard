import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/App.jsx',
            refresh: true,
        }),
        viteReact(),
        tailwindcss()
    ],
});
