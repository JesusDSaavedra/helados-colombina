export interface Point {
  x: number;
  y: number;
}

const round = (n: number) => Math.round(n * 10) / 10;

/**
 * Builds a smooth closed SVG path through every point (Catmull-Rom → cubic Bézier),
 * so the bus route curves organically between stops.
 */
export function smoothClosedPath(points: Point[]): string {
  const count = points.length;
  if (count < 3) throw new Error('A closed route needs at least 3 points');

  const at = (index: number) => points[(index + count) % count];
  let d = `M${round(points[0].x)} ${round(points[0].y)}`;

  for (let i = 0; i < count; i++) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C${round(c1.x)} ${round(c1.y)} ${round(c2.x)} ${round(c2.y)} ${round(p2.x)} ${round(p2.y)}`;
  }

  return `${d} Z`;
}
