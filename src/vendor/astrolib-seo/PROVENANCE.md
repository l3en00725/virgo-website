# Astro SEO compatibility copy

Source: @astrolib/seo 1.0.0-beta.8, published by onWidget from https://github.com/onwidget/astrolib/tree/main/packages/seo . These three runtime/type files preserve the previous rendered metadata while removing the package peer constraint that only supports Astro through 5. The package has no updated supported Astro 7 release.

AstroSeo.astro and types.ts are byte-identical to that published source; utils/buildTags.ts changes only a type-import extension for Node native TypeScript tests. html-escaper 3.0.3 is now an explicit runtime dependency (upstream lists it only as a development dependency). MIT copyright/license is retained in LICENSE.

Maintenance belongs to this repository's maintainers. Review upstream SEO/security changes when updating Astro; prefer replacing this copy with an officially supported release once available. Do not add untrusted attribute names to additionalMetaTags/additionalLinkTags. Existing metadata is static repository content; values are escaped by html-escaper. No remote code, new provider integration or runtime configuration is introduced.

Published source SHA256:
- AstroSeo.astro: e1fb4e37ccfffabf4e63110a346cdc115fa5488dc92cc9f3f920248df9cdba2b
- types.ts: 93b46f3b0febfdc752a508996d7262f2de68919ed446fd3fe73222a60aecacde
- utils/buildTags.ts: 2a5f548becd58b12c76e8c4bfafea4b71a45daf57b710f4885698be6430414ad
