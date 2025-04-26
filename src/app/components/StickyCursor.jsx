"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 80 : 20;
  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothCursorOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothCursor = {
    x: useSpring(mouse.x, smoothCursorOptions),
    y: useSpring(mouse.y, smoothCursorOptions),
  };
  const manageMouseOver = (e) => {
    setIsHovered(true);

    console.log(cursorSize);
  };
  const manageMouseLeave = (e) => {
    console.log(cursorSize);
    setIsHovered(false);
  };
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };
  useEffect(() => {
    console.log(stickyElement.current);
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  return (
    <motion.div
      style={{ left: smoothCursor.x, top: smoothCursor.y }}
      className="w-4 h-4 bg-white  rounded-full  fixed  z-30"
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default StickyCursor;
