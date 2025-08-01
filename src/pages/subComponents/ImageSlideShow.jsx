import { useEffect, useRef, useState } from "react";
import { images } from "../../assets/assets.js";
export default function ImageSlideshow() {
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
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Slide ${i}`}
            className={`absolute w-[90%] h-full object-cover rounded-xl border-orange-200 shadow-[0_0_10px_-4px_#4E1C0A] transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </>
  );
}
