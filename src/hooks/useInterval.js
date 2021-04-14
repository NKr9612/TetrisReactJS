import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Zapamiętuje ostatni callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Ustawia interwał
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
