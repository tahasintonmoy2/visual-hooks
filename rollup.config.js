import ts from "@rollup/plugin-typescript";
import { defineConfig } from 'rollup';

export default defineConfig({
    input: "src/index.ts",
    output:{
        dir: "dist",
        format: "esm",
        name: "visual-hooks"
    },
    external: ["react", "react-dom", "zustand"],
    plugins: [ts({ tsconfig: "tsconfig.json" })]
})