import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../components/MyToast";

export default function ReviewUs() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [hover, setHover] = useState(0);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setMessage("😢 No star for us");
      return setShowToast(true);
    }
    setMessage(`Thank you! for your feedback ${name}  😃`)
    setShowToast(true)
    setName("");
    setEmail("");
    setDescription("");
    setRating(0);
  };

  return (
    <section className=" pt-18 pb-28  px-4 sm:px-14 md:px-20 mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">Leave a Review</h2>
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl  p-8 border border-orange-200 shadow-[0_0_30px_-8px_#FFA726]">
        <form className="space-y-6 " onSubmit={(e) => onSubmitHandler(e)}>
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-full border  bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-	[#591C15]
            "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Title */}
          <input
            type="text"
            placeholder="Review Title (e.g., Tasty & Crunchy!)"
            required
            className="w-full px-4 py-3 rounded-full border   bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-	#591C15"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Write your experience here...(optional)"
            className="w-full px-4 py-3 rounded-2xl  border-[#4E1C0A] border bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-[#591C15]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="bg-[#FFA726] text-[#4E1C0A] px-6 py-3 rounded-full hover:bg-[#FFE5B4] transition-all duration-300 hover:scale-105"
          >
            Submit Review
          </button>
        </form>
      </div>
      <Toast
        show={showToast}
        message={message}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
