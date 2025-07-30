import { useState } from "react";

export default function ReviewUs() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className=" pt-18 pb-28 px-4 md:px-20 ">
      <h2 className="text-3xl font-bold text-center mb-10">Leave a Review</h2>
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl  p-8 border border-orange-200 shadow-[0_0_40px_-10px_rgba(255,115,0,0.4)]">
        <form className="space-y-6 ">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-full border  bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Title */}
          <input
            type="text"
            placeholder="Review Title (e.g., Tasty & Crunchy!)"
            className="w-full px-4 py-3 rounded-full border  bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Rating Stars */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl cursor-pointer transition-transform transform hover:scale-125 ${
                  (hover || rating) >= star
                    ? "text-yellow-400"
                    : "text-gray-500"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Description */}
          <textarea
            rows="5"
            placeholder="Write your experience here..."
            className="w-full px-4 py-3 rounded-2xl border  bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
          ></textarea>

          <button
            type="button"
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
