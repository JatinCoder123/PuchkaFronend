import { motion } from "framer-motion";
import { Store } from "lucide-react";

export default function ShopStatus({ status }) {
  const isOpen = status === "open";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-xs mx-auto mt-20 rounded-xl p-4 flex items-center gap-4 shadow-lg ${
        isOpen ? "bg-green-50" : "bg-red-50"
      }`}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: isOpen
            ? "0 0 20px rgba(34,197,94,0.8)"
            : "0 0 20px rgba(239,68,68,0.8)",
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className={`p-3 rounded-full ${
          isOpen ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        <Store size={24} />
      </motion.div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {isOpen ? "We’re Open!" : "Sorry, We’re Closed"}
        </h3>
        <p className="text-sm text-gray-600">
          {isOpen
            ? "Come enjoy your favorite street bites!"
            : "Visit us during working hours."}
        </p>
      </div>
    </motion.div>
  );
}
