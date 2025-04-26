"use client";

import { cardData } from "@/data/data";
import React, { useEffect, useRef } from "react";
import Card from "../components/card/index.jsx";
import { useScroll, motion, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const page = () => {
  const xyzRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: xyzRef,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const scrollVal = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <main ref={xyzRef} className="mt-[40vh] mb-[100vh]">
      {cardData.map((item, idx) => (
        <Card
          src={item.src}
          key={idx + "ASDasd"}
          scrollValMain={scrollVal}
          description={item.descripition}
          link={item.link}
          idx={idx}
          title={item.title}
          color={item.color}
        />
      ))}
    </main>
  );
};

export default page;
