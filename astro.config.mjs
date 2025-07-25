// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sectionize from "@hbsnow/rehype-sectionize";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://arniroula.github.io",
    base: "/",
    output: "static",
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        // @ts-ignore
        rehypePlugins: [sectionize],
    }
});
