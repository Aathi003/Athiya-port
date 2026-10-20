import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Phone from "./Phone";
import { profile } from "../data/portfolio";
import { useScrollTo } from "../hooks/useSmoothScroll";

const ease = [0.2, 0.7, 0.2, 1];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const scrollTo = useScrollTo();

  // Scroll-linked parallax while the hero leaves the viewport
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const phoneRotate = useTransform(p, [0, 1], [0, -10]);
  const phoneY = useTransform(p, [0, 1], [0, 90]);
  const avatarY = useTransform(p, [0, 1], [0, -60]);
  const chipY = useTransform(p, [0, 1], [0, 40]);
  const textY = useTransform(p, [0, 1], [0, -50]);
  const textOpacity = useTransform(p, [0, 0.8], [1, 0.15]);
  const glowY = useTransform(p, [0, 1], [0, 140]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const go = (id) => (e) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section id="home" ref={ref} style={{ paddingTop: 24 }}>
      <div className="hero">
        <motion.div className="glow" style={reduce ? undefined : { y: glowY }} />

        <motion.div variants={container} initial="hidden" animate="show" style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
          <motion.div className="eb" variants={item}>
            <span className="dot" />
            CRAFTING EXPERIENCES FOR iOS
          </motion.div>
          <motion.h1 variants={item}>{profile.name}</motion.h1>
          <motion.p className="role" variants={item}>{profile.role}</motion.p>
          <motion.p className="tag" variants={item}>{profile.tag}</motion.p>
          <motion.p className="ds" variants={item}>{profile.desc}</motion.p>
          <motion.div className="row" variants={item}>
            <a className="btn pri" href="/projects" onClick={go("projects")}>Explore my work ↗</a>
            <a className="btn gh" href="/contact" onClick={go("contact")}>Get in touch</a>
          </motion.div>
          <motion.div className="lk" variants={item}>
            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">in LinkedIn</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="stage"
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
        >
          <motion.div className="avatar" style={reduce ? undefined : { y: avatarY }}>
            <motion.img
              src={profile.photo}
              alt="Portrait of Athiyaman T"
              width={640}
              height={640}
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <Phone screen="hero" big style={reduce ? undefined : { rotate: phoneRotate, y: phoneY }} />
          <motion.div className="chip" style={reduce ? undefined : { y: chipY }}>Built with SwiftUI</motion.div>
        </motion.div>

        <motion.div className="cue" style={{ opacity: cueOpacity }}>
          <motion.span
            style={{ display: "inline-block" }}
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>{" "}
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
