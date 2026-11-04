import { useState, useEffect } from "react";

export function usePersist(key, init) {
  const [v, setV] = useState(() => {
    try { const s = localStorage.getItem(key); if (s) return JSON.parse(s); } catch (e) {}
    return init;
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }, [key, v]);
  return [v, setV];
}
