import { useEffect, useRef, useState } from "react";

import gol2 from "@/assets/gol2.png";
import gol from "@/assets/gol.png";
import golgappe2 from "@/assets/golgappe2.jpg";

const images = [
  { image: gol, alt: "A delicious, spicy curry" },
  { image: gol2, alt: "Steamed dumplings" },
  { image: golgappe2, alt: "Mac and cheese" },
];

export default function ImageSlideshow() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [fade, setFade] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false); // trigger fade out
  //     setTimeout(() => {
  //       setCurrentIndex((prev) => (prev + 1) % images.length);
  //       setFade(true); // trigger fade in
  //     }, 200); // slight delay before changing image
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 4000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % images.length),
      delay
    );

    return () => resetTimeout();
  }, [index]);
  return (
    <>
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center">
        {images.map((src, i) => (
          <img
            key={i}
            src={src.image}
            alt={`Slide ${i}`}
            className={`absolute w-[90%] h-full object-cover rounded-xl shadow-xl transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </>
  );
}
