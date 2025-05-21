import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    // tinha que definir o pluguin do laravel
    plugins: [
        laravel({
            input: ["src/main.jsx"], // Ajustar dps se preciso
            refresh: true,
        }),
        react(),
    ],
});
