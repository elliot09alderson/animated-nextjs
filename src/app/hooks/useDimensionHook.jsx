import React, { useEffect, useState } from "react";

const useDimensionHook = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  function updateDimension() {
    const { innerHeight, innerWidth } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  }
  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
  }, []);
  return dimension;
};

export default useDimensionHook;
