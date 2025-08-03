import { motion } from "framer-motion";
import { reviews } from "../../assets/assets";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl border shadow-lg border-orange-200 hover:shadow-orange-200 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center">
                  <img
                    src={rev.profile}
                    alt="User"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold text-gray-800 mb-2">
                {rev.title}
              </h3>
              <div className="flex justify-center mb-2 text-orange-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 text-lg ${
                      i < rev.rating ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="italic text-center text-gray-600 mb-4">
                "{rev.review}"
              </p>
              <p className="text-center font-bold text-gray-800 uppercase tracking-wide">
                {rev.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
