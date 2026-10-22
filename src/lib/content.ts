import { getCollection as loadCollection, render, type CollectionEntry, type CollectionKey } from 'astro:content';

// Preserve existing route slugs and entry.render() while using the supported content loader.
export async function getCollection<C extends CollectionKey>(name: C) {
  const entries = await loadCollection(name);
  return entries.map((entry: CollectionEntry<C>) => ({
    ...entry,
    slug: entry.id,
    render: () => render(entry),
  }));
}
