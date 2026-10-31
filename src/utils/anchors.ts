// Anchor id for a resume entry, so other pages can link straight to it:
// "Software Engineer" at "Tesla" → /resume#software-engineer-tesla
export const entryId = (item: { title: string; org: string }) =>
  `${item.title} ${item.org}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
