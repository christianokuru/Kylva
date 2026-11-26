import type { H3Event } from "h3";

// Simple per-IP limit (per server instance): at most `limit` hits per `windowMs`.
const buckets = new Map<string, number[]>();

export const tooManyRequests = (event: H3Event, key: string, limit = 5, windowMs = 10 * 60 * 1000) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
  const id = `${key}:${ip}`;
  const now = Date.now();
  const recent = (buckets.get(id) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  buckets.set(id, recent);
  if (buckets.size > 5000) buckets.clear();
  return recent.length > limit;
};
