import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // optimizeDeps: { // change build caching behavior ---> see https://vitejs.dev/config/dep-optimization-options.html
    //     force: true,
    // },
});
