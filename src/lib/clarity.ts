declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) | Record<string, unknown>;
  }
}

export function clarityEvent(name: string) {
  if (typeof window !== "undefined" && window.clarity != null) {
    (window.clarity as (...args: unknown[]) => void)("event", name);
  }
}
