import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { highlights, profile } from "../data/portfolio";

export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section id="about" ref={ref}>
      <div className="about">
        <Reveal dir="left">
          <div className="pic">
            <motion.img
              src={profile.photo}
              alt="Athiyaman T in a navy suit"
              width={640}
              height={640}
              loading="lazy"
              style={reduce ? undefined : { y: imgY, scale: imgScale }}
            />
          </div>
        </Reveal>
        <Reveal dir="right">
          <h2>A little about me</h2>
          <p className="lead">{profile.about}</p>
          <div className="hl">
            {highlights.map((h, i) => (
              <Reveal key={h} dir="right" delay={0.15 + i * 0.1}>{h}</Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
