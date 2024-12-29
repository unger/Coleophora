/* eslint-disable prettier/prettier */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import styleX from "vite-plugin-stylex";

export default defineConfig({
    server: {
        open: true,
    },
    build: {
        assetsInlineLimit: 0,
    },
    plugins: [
        tsconfigPaths(),
        react({
            jsxImportSource: "@emotion/react",
        }),

        styleX(),
        /*
        react({
            jsxImportSource: "@emotion/react",
            plugins: [
                [
                    "@swc/plugin-emotion",
                    {
                        // default is true. It will be disabled when build type is production.
                        sourceMap: false,
                        // default is 'dev-only'.
                        // autoLabel: "never" | "dev-only" | "always",
                        autoLabel: "dev-only",

                        // default is '[local]'.
                        // Allowed values: `[local]` `[filename]` and `[dirname]`
                        // This option only works when autoLabel is set to 'dev-only' or 'always'.
                        // It allows you to define the format of the resulting label.
                        // The format is defined via string where variable parts are enclosed in square brackets [].
                        // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
                        // labelFormat: string,
                    },
                ],
            ],
        }),*/
    ],
});
