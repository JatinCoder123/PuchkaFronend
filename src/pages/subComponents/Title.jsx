const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center my-3 sm:text-3xl font-bold">
      <h1 className="text-[#4E1C0A]">
        {text1}
        <span className="text-[#FFA726] "> {text2}</span>
      </h1>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
