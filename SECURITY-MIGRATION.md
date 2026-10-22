# Security dependency migration — 2026-10-22

Move the maintained site from Astro 5 to Astro 7.4.2 with MDX 8.1.1 and Sharp 0.35.5. Keep Tailwind 3 through its PostCSS pipeline and adapt content collections to the supported glob loader. A small helper preserves the existing entry slug and render interface. Source-controlled English/Italian routes and metadata remain intact.

## SEO compatibility and ownership

The published @astrolib/seo 1.0.0-beta.8 supports Astro only through 5 and has no supported Astro 7 release. Its three runtime/type source files are retained under src/vendor/astrolib-seo with package provenance, declared MIT attribution/terms and SHA256 hashes. Runtime code is identical; one type import gains an extension for native TypeScript test execution. html-escaper 3.0.3 is explicit at runtime. No forced peer installation bypass is used.

Repository maintainers own review of this small copy and upstream security changes; replace it with a supported upstream component when available. The provenance document records escaping assumptions, static metadata inputs and maintenance responsibilities. No upstream copyright year or nonexistent separate upstream license file was invented.

## Validation

Tested with Node 24.22.1 and verified Bun 1.4.3. Supported patched Node branches are 22.23.4+, 24.22.1+ and 26.12.1+ within each major.

- Primary frozen Bun install and alternative frozen npm install passed, with lifecycle scripts disabled. Both guarded production builds passed (66 pages); all 66 HTML outputs were byte-identical between managers.
- Two SEO source-identity/escaping fixtures passed under both installations, covering title, canonical, OpenGraph and Twitter metadata. All 18 English/Italian content routes rendered with their title and canonical metadata.
- The primary production build optimized 26 images using patched Sharp. The actual PWA minimal generator produced five PNGs with expected dimensions plus a favicon using its owner-resolved Sharp 0.35.5 in an isolated fixture.
- The updated Unlighthouse 0.19.1 accepts the existing scanner/budget configuration and CLI help. It was not run against the configured public site; no browser download or production crawl was performed.
- Actual global CSS with the real Tailwind configuration/full content is byte-identical with baseline selector parser 6.1.2 and patched 7.1.7; SHA256 c42e19ca5a80f783d00cc5086208b01d6b6ebdd8f47ae4d2e758542e63dee231. All three Tailwind base/components/utilities directives remain. The small comparison harness records actual Tailwind parser use; the vulnerable baseline package is not shipped.

## Dated advisory evidence and remaining owner blockers

Local matching against the public OSV npm export retrieved October 22 reduced 451 lockfile findings to 14: zero critical, ten high, two moderate and two low. The two maintained locks each contain the same seven residual findings, so these are not fourteen distinct vulnerable package versions.

Latest supported Unlighthouse 0.19.1 retains Lighthouse CI utils -> Lighthouse/Puppeteer -> extract-zip and basic-ftp 5, js-yaml/argparse -> sprintf-js, listhen -> node-forge 1.4.0, and Nuxt UI/fonts -> esbuild 0.27.7. Tailwind 3 retains braces 3.0.3. Some packages have no fixed published release in the reviewed feed/catalog; basic-ftp and esbuild fixes require owner transitions outside their current dependency ranges. Require compatible owning-package remediation instead of unsupported transitive major overrides. Review local audit/dev-server exposure while these remain.

This dated feed does not attest to future advisories or an installed production runtime. No deployment or merge is included.

## Release prerequisites and rollback

Review remaining build/audit tool exposure. Validate a hosted preview's responsive layout, content, social metadata/images, contact flow and PWA assets with synthetic inputs; use a patched runtime and refresh advisory matching. Do not send real customer messages or crawl the configured public target as part of validation without the appropriate release plan.

Rollback by reverting this migration commit and restoring both prior lockfiles, then rebuilding from source. That restores known vulnerable dependencies; restrict exposure and prepare a replacement patch. Do not reuse stale deployment output.
