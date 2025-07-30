import { useState, useEffect } from "react";
export default function Reviews() {
  const reviews = [
    {
      name: "Anna",
      role: "Business Owner",
      title: "Deliciously Impressed!",
      message:
        "I cannot recommend working with Jhon enough, his guidance and way to teach changed my workflow, and helped with my productivity, I will be working with him again, thank you very much Jhon.",
      avatar: "/images/reviewer1.jpg",
      rating: 5,
    },
    {
      name: "David",
      role: "Food Blogger",
      title: "Taste Explosion!",
      message:
        "The flavors here are unreal! Every bite was a burst of spice and tang. This place redefined street food for me. Highly recommended!",
      avatar: "/images/reviewer2.jpg",
      rating: 5,
    },
    {
      name: "Priya",
      role: "Chef",
      title: "Perfectly Authentic!",
      message:
        "Authentic golgappas like the ones my grandma made. Great texture, great spice mix. Loved the experience.",
      avatar: "/images/reviewer3.jpg",
      rating: 4,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[index];

  return (
    <section className="py-16 " id="reviews">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Customers Are Saying
        </h2>

        <div className=" rounded-xl  px-6 py-10 relative max-w-xl mx-auto border border-orange-200 shadow-[0_0_40px_-10px_rgba(255,115,0,0.4)]">
          <div className="flex justify-center mb-4">
            <img
              src="./userProfile.jpg"
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 shadow-md"
            />
          </div>
          <h4 className="text-lg font-semibold text-gray-700 mb-1">
            {review.title}
          </h4>

          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-lg ${
                  i < review.rating ? "opacity-100" : "opacity-30"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm italic mb-6">
            "{review.message}"
          </p>
          <h5 className="font-bold text-gray-800">
            {review.name.toUpperCase()}
          </h5>
          <p className="text-sm text-gray-500">{review.role}</p>
        </div>
      </div>
    </section>
  );
}
