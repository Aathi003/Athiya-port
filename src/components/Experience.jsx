import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  // The timeline line fills as the list passes the upper third of the screen
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <section id="experience">
      <Reveal><h2>Experience</h2></Reveal>
      <div className="tl" ref={ref}>
        <div className="tl-track" />
        <motion.div className="tl-fill" style={{ scaleY }} />
        {experience.map((e) => (
          <Reveal key={e.company} as="article" dir="right">
            <div className="ex">
              <div className="d">{e.period}</div>
              <motion.div
                className="o"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 }}
              />
              <div className="card">
                <h4>{e.company}</h4>
                <h5>{e.role}</h5>
                <ul>
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
