"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
const index = ({
  title,
  description,
  src,
  link,
  color,
  idx,
  scrollValMain,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });
  const scrollVal = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
  
      ref={containerRef}
      className="card-container w-full items-center justify-center border border-2 border-white sticky top-0 flex min-h-screen"
    >
      <motion.div
        style={{ scale: scrollValMain, top: `${idx * 25}px` }}
        className={` w-[60vw] flex relative top-[-10%]   h-[700px] rounded-3xl   ${color} card  object-cover `}
      >
        <div className="flex flex-col items-center justify-center gap-20 p-10">
          <h2 className="text-4xl"> {title}</h2>
          <p className="text-sm self-center "> {description} </p>
        </div>
        <div className="items-center rounded-2xl overflow-hidden relative w-[60%] h-full flex justify-end">
          <Link href={link}>
            <motion.div className="w-full h-full">
              <Image
                src={`/${src}`}
                className="object-cover"
                width={600}
                height={400}
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default index;
