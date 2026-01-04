// src/hooks/usePrepTimer.js
import { useState, useEffect } from "react";

export default function usePrepTimer(initialMinutes) {
  const [minutes, setMinutes] = useState(initialMinutes);

  useEffect(() => {
    if (minutes === null) return;
    const interval = setInterval(() => {
      setMinutes((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, [minutes]);

  return [minutes, setMinutes];
}
