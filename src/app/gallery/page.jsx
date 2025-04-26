"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useDimensionHook from "../hooks/useDimensionHook";
const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
];
const AiamtedOptions = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
  },

  exit: {
    y: 100,
  },
};
const page = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { height, width } = useDimensionHook();
  console.log("height", height);
  const transformY = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const transformY2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const transformY3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const transformY4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  useMotionValueEvent(transformY, "change", (latest) => {
    console.log("x changed to", latest);
  });
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="px-40 py-20 ">
      <div className="spacer h-[100vh]"></div>
      <div
        ref={containerRef}
        className="h-[175vh] bg-(45,45,45) rounded-4xl  flex gap-[2vw] bg-blue-500 overflow-hidden p-[2vw]"
      >
        <Column
          transformY={transformY}
          top={"-25%"}
          photos={[images[0], images[1], images[2]]}
        />
        <Column
          transformY={transformY2}
          top={"-35%"}
          photos={[images[3], images[4], images[5]]}
        />
        <Column
          transformY={transformY3}
          top={"-30%"}
          photos={[images[6], images[7], images[8]]}
        />
        <Column
          transformY={transformY4}
          top={"-25%"}
          photos={[images[9], images[10], images[11]]}
        />
      </div>
      <div className="spacer h-[100vh]"></div>
    </main>
  );
};

function Column({ photos, transformY = 0, top }) {
  return (
    <div
      className="w-[25%]  h-full flex flex-col  gap-[2vw] relative"
      style={{ top: top }}
    >
      {photos.map((item, idx) => {
        return (
          <motion.div
            style={{ y: transformY }}
            key={idx + "img"}
            className={`w-full overflow-hidden relative  rounded-xl `}
          >
            <Image
              src={`/art/${item}`}
              className="h-full w-full object-cover"
              height={300}
              width={200}
              alt="bgimg"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default page;
