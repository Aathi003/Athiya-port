import { useEffect, useRef } from "react";
import { idFromPath, pathFor, scrollToSection } from "./useSmoothScroll";

/**
 * Keeps clean section URLs (/about, /skills …) in sync with the page:
 * - opening /about directly jumps to the About section
 * - browser Back/Forward scrolls to the matching section
 * - the address bar follows the section you scroll into
 */
export function useSectionRoute(lenisRef, active) {
  const ready = useRef(false);

  useEffect(() => {
    const initial = idFromPath();
    if (initial !== "home") scrollToSection(lenisRef.current, initial, true);
    // Let the initial jump settle before scroll position starts rewriting the URL
    const t = setTimeout(() => (ready.current = true), 400);

    const onPop = () => scrollToSection(lenisRef.current, idFromPath());
    addEventListener("popstate", onPop);
    return () => {
      clearTimeout(t);
      removeEventListener("popstate", onPop);
    };
  }, [lenisRef]);

  useEffect(() => {
    if (ready.current && location.pathname !== pathFor(active)) {
      history.replaceState({ id: active }, "", pathFor(active));
    }
  }, [active]);
}
