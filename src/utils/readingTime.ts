/**
 * Estimate reading time in minutes.
 * Assumes ~200 words per minute for technical content.
 */
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
