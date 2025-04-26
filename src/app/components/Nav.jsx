"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, slide } from "./anim";
import Curve from "./Curve";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const navitems = [
    { path: "/contact", title: "Home" },

    { path: "/about", title: "About" },
    { path: "/contact", title: "Work" },
    { path: "/contact", title: "Contact" },
  ];
  console.log(selectedIndicator);
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed z-40 h-screen right-0 bg-[rgb(41,41,41)] text-white"
      >
        <div className="p-48  flex justify-between">
          <div className="flex flex-col text-4xl gap-4 mt-48  ">
            <div className="mb-8">
              <p className="text-lg uppercase tracking-wider text-gray-400   ">
                Navigation
                <div className="after:h-[2px]  after:mt-2 after:w-full after:bg-gray-400  after:block after:relative"></div>
              </p>
            </div>
            {navitems.map((item, idx) => (
              <NavLink
                key={idx}
                data={{ ...item, idx }}
                isActive={selectedIndicator == item.path}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </div>
        </div>

        <Curve />
      </motion.div>
    </>
  );
};
function NavLink({ data, isActive, setSelectedIndicator }) {
  console.log(isActive);
  const pathname = usePathname();
  return (
    <motion.div
      custom={data.idx}
      variants={slide}
      animate="enter"
      initial="initial"
      exit="exit"
      className=" py-2"
    >
      <Link
        onClick={() => setSelectedIndicator(pathname)}
        className={`text-none text-white duration-500 ${
          isActive && " text-red-500 "
        } text-6xl`}
        href={data.path}
      >
        {data.title}
      </Link>
    </motion.div>
  );
}
export default Nav;
