import { useEffect, useState, useRef } from "react";
import golgappe1 from "@/assets/golgappe1.jpg";
import gol2 from "@/assets/gol2.png";
import gol from "@/assets/gol.png";
import golgappe2 from "@/assets/golgappe2.jpg";

import Title from "./Title";

export default function Gallery() {
  const media = [
    { type: "image", src: golgappe1 },
    { type: "image", src: gol2 },
    { type: "image", src: gol },
    { type: "image", src: golgappe1 },
    { type: "video", src: golgappe1 },
    { type: "image", src: golgappe2 },
    { type: "image", src: gol2 },
    { type: "image", src: gol },
    { type: "video", src: gol },
  ];

  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [media.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.children[current].offsetLeft,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <section className="py-20  border-y-0  bg-gradient-to-b from-white via-[rgba(255,115,0,0.4)] to-white relative rounded-2xl ">
      <div className="max-w-7xl mx-auto px-0">
        <div className="text-2xl text-center  ">
          <Title text1={"Our"} text2={"Gallery"} />
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory"
          >
            {media.map((item, index) => (
              <div
                key={index}
                className="snap-center min-w-[280px] md:min-w-[360px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white overflow-hidden cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`media-${index}`}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    className="w-full h-64 object-cover"
                    muted
                    loop
                    autoPlay
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
