import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || "/weather-app",
    resolve: {
        alias: {
            '@': '/src', // optional, allows "@/components/..." imports
        }
    }
});
