"use client";

import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";

const Navbar = forwardRef(function Navbar(props, ref) {
  const [active, setActive] = useState(false);
  console.log(ref);
  return (
    <>
      <div
        ref={ref}
        onClick={() => setActive(!active)}
        className="fixed z-50 m-8 right-0 w-28 h-28  rounded-full
      bg-[#455CE9] mix-blend-difference flex items-center justify-center"
      >
        <div
          className={` w-full burger     ${active ? "  burgerActive  " : " "}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{active && <Nav />}</AnimatePresence>
    </>
    // <>
    //   <div
    //     ref={ref}
    //     onClick={() => setActive(!active)}
    //     className="fixed m-8 right-0 w-28 h-28 z-20 rounded-full
    //   bg-[#455CE9] flex items-center justify-center"
    //   >
    //     <div
    //       className={` w-full burger     ${active ? "  burgerActive  " : " "}`}
    //     ></div>
    //   </div>
    //   <AnimatePresence mode="wait">{active && <Nav />}</AnimatePresence>
    // </>
  );
});

export default Navbar;
