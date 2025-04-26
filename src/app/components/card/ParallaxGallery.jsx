import Image from "next/image";
import React from "react";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];
const ParallaxGallery = () => {
  return (
    <main>
      <div>
        <Column images={[images[0]],images[1],images[2]}/>
        <Column images={[images[0]],images[1],images[2]}/>
        <Column images={[images[0]],images[1],images[2]}/>
        <Column images={[images[0]],images[1],images[2]}/>
      </div>
    </main>
  );
};

const Column = ({ images }) => {
  return (
    <div className="">
      {images.map((src, idx) => {
        return (
          <div key={idx}>
            <Image src={`/${src}`} fill alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default ParallaxGallery;
