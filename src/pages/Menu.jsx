import { motion } from "framer-motion";
import { businessInfo, menuItems } from "../assets/assets";

export default function Menu() {
  return (
    <section className="bg-[#fdf8f3] min-h-screen py-12 px-4 md:px-10 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <img
            src={businessInfo.logo}
            alt="Logo"
            className="h-24 sm:h-30 w-auto rounded-full"
          />
        </div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-[#512A24] mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Puchka Paradise Specials
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-orange-200 hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#512A24] mb-2">
                  {item.name}
                </h3>
                <p className="text-lg text-[#FF7A00] font-semibold mb-1">
                  {item.price}
                </p>
                {item.details && (
                  <p className="text-sm text-gray-600">{item.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
