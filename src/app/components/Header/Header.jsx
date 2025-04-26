"use client";
import React from "react";
import StickyCursor from "../StickyCursor";
import Navbar from "../Navbar";
import { useRef } from "react";

const Header = () => {
  const stickyElement = useRef(null);
  return (
    <main>
      {" "}
      <Navbar ref={stickyElement} />
      {/* <StickyCursor stickyElement={stickyElement} /> */}
    </main>
  );
};

export default Header;
