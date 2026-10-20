import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal><h2>Skills</h2></Reveal>
      <div className="sk">
        {skills.map((s, i) => (
          <Reveal key={s.title} dir="scale" delay={(i % 4) * 0.09}>
            <motion.article className="card" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <h4><span className="ic">{s.icon}</span>{s.title}</h4>
              <p>{s.items}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
