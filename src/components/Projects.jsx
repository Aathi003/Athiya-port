import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Phone from "./Phone";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("overview");
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // Phone drifts and tilts slightly inside its stage while the card scrolls past
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 ? 4 : -4, index % 2 ? -4 : 4]);

  return (
    <Reveal delay={(index % 2) * 0.12}>
      <motion.article ref={ref} className="pj" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
        <div className="stg">
          <Phone screen={project.screen} style={reduce ? undefined : { y, rotate }} />
        </div>
        <div className="pm">
          <small>{project.category}</small>
          <h4>
            {project.name}
            {project.inDevelopment && <span className="bd">Under development</span>}
          </h4>
          <p className="tg">{project.stack}</p>
          <p>{project.summary}</p>
          <button className="xp" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "Hide details" : "View project ↗"}
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="pn"
                role="region"
                aria-label={`${project.name} details`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="pn-inner">
                  <div className="tabs">
                    <button className={tab === "overview" ? "on" : ""} onClick={() => setTab("overview")}>Overview</button>
                    <button className={tab === "ui" ? "on" : ""} onClick={() => setTab("ui")}>Interface</button>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={tab}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tab === "overview" ? project.overview : project.ui}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <h2>Projects</h2>
        <p className="lead" style={{ fontSize: 13 }}>Concept interface visuals for presentation only.</p>
      </Reveal>
      <div className="pg">
        {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>
    </section>
  );
}
