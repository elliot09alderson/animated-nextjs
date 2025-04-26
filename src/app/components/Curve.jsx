import React from "react";
import { motion } from "framer-motion";
const Curve = () => {
  const initialpath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetpath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialpath,
    },
    animate: {
      d: targetpath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialpath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className="svgCurve">
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
