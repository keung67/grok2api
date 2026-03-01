// 統一時區設定，UTC+8
export const TZ_OFFSET_MS = 8 * 60 * 60 * 1000;

export function nowMs(): number {
  return Date.now();
}

export function formatUtcSeconds(seconds: number): string {
  const d = new Date(seconds * 1000);
  return d.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}

export function formatUtcMs(ms: number): string {
  const d = new Date(ms + TZ_OFFSET_MS);
  return d.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
