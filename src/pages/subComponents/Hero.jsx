import ImageSlideshow from "./ImageSlideShow";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse mt-8 gap-7 p-4 md:flex-row items-center justify-between  md:h-[80vh]"
    >
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-heading text-red-600">
          “Taste the Magic of Every Bite!”
        </h1>
        <p className="text-lg text-stone-700">
          From crispy golgappas to spicy chutneys — we serve love on wheels!
        </p>
        <a
          href="#reviews"
          className="bg-[#FFA726] text-[#4E1C0A] px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
        >
          Read Reviews
        </a>
      </div>
      <ImageSlideshow />
    </section>
  );
};

export default Hero;
