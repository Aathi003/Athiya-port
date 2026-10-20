import { useEffect, useState } from "react";

/** Returns the id of the section currently in the upper part of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let queued = false;
    const update = () => {
      queued = false;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}
