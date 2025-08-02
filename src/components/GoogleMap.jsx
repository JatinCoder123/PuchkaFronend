import { motion } from "framer-motion";

export const GoogleMap = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl font-bold text-center"
      >
        📍 <span className="text-orange-800">Find Our Cart</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full h-[400px] rounded-xl border border-orange-200 shadow-[0_0_40px_-10px_#4E1C0A] overflow-hidden"
      >
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.538980712244!2d77.47238327550232!3d28.673519575642295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzI0LjciTiA3N8KwMjgnMjkuOSJF!5e0!3m2!1sen!2sin!4v1754126081304!5m2!1sen!2sin"
        ></iframe>
      </motion.div>
    </div>
  );
};
