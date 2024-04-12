// useClientMediaQuery.ts
import { useEffect, useState } from "react";

export function useClientMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    if (mediaQuery.matches) {
      setMatches(true);
    }

    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, [query]);

  return matches;
}
