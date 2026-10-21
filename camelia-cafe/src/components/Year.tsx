"use client";

/** Current year for the copyright line, rendered in the browser so it never goes stale. */
export function Year() {
  return <>{new Date().getFullYear()}</>;
}
