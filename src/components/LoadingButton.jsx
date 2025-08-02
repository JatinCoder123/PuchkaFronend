import { Tailspin } from "ldrs/react";
import "ldrs/react/Tailspin.css";
const LoadingButton = ({ content }) => {
  return (
    <>
      <button
        disabled
        type="button"
        className=" flex items-center gap-3 bg-gray-900  text-white px-6 py-3 rounded-full "
      >
        <Tailspin size="25" stroke="5" speed="0.9" color="white" />
        <span>{content}</span>
      </button>
    </>
  );
};

export default LoadingButton;
