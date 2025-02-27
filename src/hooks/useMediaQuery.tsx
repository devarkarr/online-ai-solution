import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleQuery = () => setMatches(mediaQuery.matches);
    window.addEventListener("change", handleQuery);

    setMatches(mediaQuery.matches);

    return () => window.removeEventListener("change", handleQuery);
  }, [query]);
  return matches;
};

export default useMediaQuery;
