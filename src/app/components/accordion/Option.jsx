import React from "react";
import Modal from "./Modal";

const Option = ({ index, setModal, active, item }) => {
  return (
    <div
      className={`py-20  px-40 w-full group border-t border-white border-black flex justify-between ${
        index == 3 && "border-b"
      }`}
      onMouseEnter={() => setModal({ active: 1, index })}
      onMouseLeave={() => setModal({ active: 0, index })}
    >
      <h1 className="group-hover:opacity-50   duration-300 group-hover:-translate-x-10">
        {item.title}
      </h1>
      <p className="group-hover:translate-x-10 group-hover:opacity-50 duration-300 text-xl">
        {item.description}
      </p>
    </div>
  );
};

export default Option;
