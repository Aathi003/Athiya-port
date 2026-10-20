import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

export const LenisContext = createContext(null);

/** Inertia-based smooth scrolling (disabled when the user prefers reduced motion). */
export function useLenis() {
  const ref = useRef(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    ref.current = lenis;

    let id;
    const raf = (time) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      ref.current = null;
    };
  }, []);

  return ref;
}

/** URL path for a section id: "home" → "/", "about" → "/about". */
export const pathFor = (id) => (id === "home" ? "/" : `/${id}`);

/** Section id for the current URL path ("/about" → "about"). */
export const idFromPath = (pathname = location.pathname) => pathname.replace(/^\/+|\/+$/g, "") || "home";

/** Smoothly (or instantly) scroll to a section id, through Lenis when available. */
export function scrollToSection(lenis, id, immediate = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(id === "home" ? 0 : el, { offset: -72, immediate });
  else if (id === "home") scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
}

/** Scroll to a section and push its clean path ("/about") to the address bar. */
export function useScrollTo() {
  const lenisRef = useContext(LenisContext);
  return (id) => {
    scrollToSection(lenisRef?.current, id);
    if (location.pathname !== pathFor(id)) history.pushState({ id }, "", pathFor(id));
  };
}
