import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { buildTags } from '../src/vendor/astrolib-seo/utils/buildTags.ts';
const sha = text => createHash('sha256').update(text).digest('hex');
const fixture = { title: 'Virgo & Growth', description: 'A "quoted" description <safe>', canonical: 'https://www.virgobiz.com/it/contact', openGraph: { url: 'https://www.virgobiz.com/it/contact', title: 'Virgo & Growth', images: [{ url: 'https://www.virgobiz.com/og-image.jpg', width: 1200, height: 630, alt: 'Virgo image' }], site_name: 'Virgo' }, twitter: { handle: '@VirgoPartners', site: '@VirgoPartners', cardType: 'summary_large_image' }, additionalMetaTags: [{ name: 'publisher', content: 'Virgo' }] };
test('SEO runtime/types preserve the exact published implementation', () => {
  const expected = JSON.parse(readFileSync(new URL('./seo-source-hashes.json', import.meta.url)));
  for (const [name, hash] of Object.entries(expected)) {
    let source = readFileSync(new URL('../src/vendor/astrolib-seo/' + name, import.meta.url), 'utf8');
    if (name === 'utils/buildTags.ts') source = source.replace('from "../types.ts"', 'from "../types"');
    assert.equal(sha(source), hash, name);
  }
});
test('representative title/canonical/OpenGraph/Twitter metadata escapes content', () => {
  const html = buildTags(fixture);
  assert.ok(html.includes('<title>Virgo &amp; Growth</title>'));
  assert.ok(html.includes('rel="canonical" href="https://www.virgobiz.com/it/contact"'));
  assert.ok(html.includes('property="og:image" content="https://www.virgobiz.com/og-image.jpg"'));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
  assert.ok(!html.includes('<safe>'));
  assert.ok(html.includes('&lt;safe&gt;'));
});
