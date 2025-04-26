"use client";

import React, { useState } from "react";
import Option from "../components/accordion/Option";
import Modal from "../components/accordion/Modal";
import index from "../components/card";

const page = () => {
  const data = [
    {
      title: "GSAP",
      src: "/1.jpg",
      color: "#EC7FA9",
      description: "adknaklsdnas n askl dk nas ",
    },
    {
      title: "Framer",
      src: "/2.jpg",
      color: "#BE5985",
      description: "adknaklsdnas n askl dk nas ",
    },
    {
      title: "React",
      src: "/3.jpg",
      color: "#FFEDFA",
      description: "adknaklsdnas n askl dk nas ",
    },
    {
      title: "Next js",
      src: "/4.jpg",
      color: "#FFB8E0",
      description: "adknaklsdnas n askl dk nas ",
    },
  ];

  const [modal, setModal] = useState({ active: 0, index: 0 });
  return (
    <main className="text-5xl min-h-screen  ">
      <div className="py-40 px-64 shadow rounded-4xl relative flex flex-col items-center justify-center relative">
        <Modal data={data} index={index} modal={modal} />
        {data.map((item, idx) => (
          <Option
            item={item}
            key={idx + "ASDasdasd"}
            active={modal.active}
            index={idx}
            setModal={setModal}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
