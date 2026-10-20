import { motion, useReducedMotion } from "framer-motion";

const offsets = {
  up: { y: 40 },
  left: { x: -60 },
  right: { x: 60 },
  scale: { scale: 0.92, y: 20 },
};

/** Fades + slides its children in once they scroll into view. */
export default function Reveal({ as = "div", dir = "up", delay = 0, className, children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, filter: "blur(6px)", ...offsets[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
