import { useState } from "react";
import { motion } from "framer-motion";
import { nav } from "../data/portfolio";
import { useScrollTo } from "../hooks/useSmoothScroll";

export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(id);
  };

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}>
      <div className="w">
        <a className="brand" href="/" onClick={go("home")}>AT.</a>
        <button className="menu-btn" aria-expanded={open} aria-label="Toggle navigation menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav className={open ? "open" : ""} aria-label="Primary">
          {nav.map((n) => (
            <a key={n.id} href={n.id === "home" ? "/" : `/${n.id}`} className={active === n.id ? "on" : ""} onClick={go(n.id)}>
              {active === n.id && (
                <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span>{n.label}</span>
            </a>
          ))}
        </nav>
        <a className="btn gh talk" href="/contact" onClick={go("contact")}>Let’s talk</a>
      </div>
    </motion.header>
  );
}
