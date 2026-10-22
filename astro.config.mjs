import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
	site: "https://virgo-partners.com",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: "css-variables",
		},
	},
	shikiConfig: {
		wrap: true,
		skipInline: false,
		drafts: true,
	},
	integrations: [
		sitemap(),
		mdx(),
		icon(),
	],
});
