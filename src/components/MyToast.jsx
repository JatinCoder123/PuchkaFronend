// Toast.jsx
import { useEffect, useState } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-all mt-20 duration-500 ease-in-out transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="bg-[#4E1C0A] text-[#FFE5B4] border border-orange-300 shadow-lg rounded-md px-6 py-4 flex items-center space-x-3">
        <p className=" font-medium">{message}</p>
      </div>
    </div>
  );
}
