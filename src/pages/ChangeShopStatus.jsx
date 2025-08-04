// ChangeShopStatus.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import LoadingButton from "../components/LoadingButton";
import axios from "axios";
export default function ChangeShopStatus() {
  const [status, setStatus] = useState("open");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you'd verify password and update status via backend
    setLoading(true);
    if (password !== import.meta.env.VITE_ADMIN_PASSWORD) {
      setLoading(false);
      return toast.error("Wrong Password!");
    }
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/shop`,
        { status },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setLoading(false);
      toast.success(data.message);
      setPassword("");
      return;
    } catch (error) {
      setLoading(false);
      return toast.error("We're facing some server issue,Try again later");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-[#fff7ed] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-orange-200"
      >
        <h2 className="text-3xl font-bold text-center text-[#512A24] mb-6">
          Change Shop Status
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#512A24] font-semibold mb-2">
              Select Status:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="open"
                  checked={status === "open"}
                  onChange={() => setStatus("open")}
                  className="accent-orange-500"
                />
                <span className="text-[#333]">Open</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="closed"
                  checked={status === "closed"}
                  onChange={() => setStatus("closed")}
                  className="accent-orange-500"
                />
                <span className="text-[#333]">Closed</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-[#512A24] font-semibold mb-2">
              Verify yourself as owner:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:outline-none pr-12"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
          {loading ? (
            <LoadingButton content={"Updating..."} />
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded-xl shadow-md"
            >
              Update Status
            </motion.button>
          )}
        </form>
      </motion.div>
    </section>
  );
}
