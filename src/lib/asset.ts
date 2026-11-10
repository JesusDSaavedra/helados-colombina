/**
 * Resolves a path inside /public against the configured base,
 * so assets keep working when deployed under a GitHub Pages sub-path.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
