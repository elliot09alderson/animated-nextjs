import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
const Modal = ({ data, index, modal }) => {
  console.log(modal);
  const scaleAnimation = {
    intital: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const container = useRef(null);
  const cursorContainer = useRef(null);
  const cursorText = useRef(null);
  const cursorSize = 0;
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveCursorX = gsap.quickTo(cursorContainer.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursorContainer.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorTextX = gsap.quickTo(cursorText.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorTextY = gsap.quickTo(cursorText.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const x = window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX + cursorSize / 2);
      moveContainerY(clientY + cursorSize / 2);
      moveCursorX(clientX + cursorSize / 2);
      moveCursorY(clientY + cursorSize / 2);
      moveCursorTextX(clientX + cursorSize / 2);
      moveCursorTextY(clientY + cursorSize / 2);
    });
    return window.removeEventListener("mousemove", x);
  }, []);
  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "open" : "closed"}
        className="absolute overflow-hidden h-72 w-84 z-40 pointer-events-none  bg-blue-500 items-center flex justify-center "
      >
        <div
          className="h-72 w-84 absolute "
          style={{
            top: `${modal.index * -100}%`,
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {data.map((item, idx) => (
            <div
              key={idx + "image"}
              className={`h-72 flex items-center  justify-center   `}
              style={{
                backgroundColor: item.color,
              }}
            >
              <Image
                src={item.src}
                className="object-cover h-48 w-48"
                height={100}
                alt="iamge x"
                width={100}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={cursorContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "open" : "closed"}
        className="bg-[#455CE9] w-28 h-28 rounded-full z-50 pointer-events-none flex items-center justify-center absolute "
      ></motion.div>
      <motion.div
        ref={cursorText}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "open" : "closed"}
        className="text-lg z-50 text-white pointer-events-none flex items-center justify-center absolute "
      >
        view
      </motion.div>
    </>
  );
};

export default Modal;
