declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export function clarityEvent(name: string) {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("event", name);
  }
}
