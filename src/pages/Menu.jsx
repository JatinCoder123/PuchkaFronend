// // MenuPage.jsx
// import { motion } from "framer-motion";
// import { businessInfo } from "../assets/assets.js"; // Adjust the path as needed

// export default function Menu() {
//   const menuItems = [
//     { name: "ATTA PUCHKA", price: "20/-", details: "(4PCS.)" },
//     { name: "SUJI PUCHKA", price: "20/-", details: "(4PCS.)" },
//     { name: "STUFFED PUCHKA", price: "40/-", details: "(4PCS.)" },
//     { name: "PAPDI CHAT", price: "40/-", details: "" },
//     { name: "PALAK PATTA CHAT", price: "50/-", details: "" },
//   ];

//   return (
//     <section className=" min-h-screen py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-center mb-8">
//           <img
//             src={businessInfo.logo2}
//             alt="Logo"
//             className="h-24 sm:h-30 w-auto rounded-full"
//           />
//         </div>
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-center text-[#512A24] mb-10"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Our Menu
//         </motion.h1>

//         <motion.div
//           className="bg-[#512A24] rounded-xl shadow-xl overflow-hidden border border-orange-200"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <table className="w-full text-left">
//             <thead className="bg-[#ffcc99] text-[#512A24] text-lg">
//               <tr>
//                 <th className="py-4 px-6">Item</th>
//                 <th className="py-4 px-6">Price</th>
//                 <th className="py-4 px-6">Details</th>
//               </tr>
//             </thead>
//             <tbody className="text-[#fdf8f3]">
//               {menuItems.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-[#6b3e38] transition duration-200"
//                 >
//                   <td className="py-4 px-6 font-medium">{item.name}</td>
//                   <td className="py-4 px-6">{item.price}</td>
//                   <td className="py-4 px-6">{item.details}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// MenuPage.jsx
import { motion } from "framer-motion";
import { businessInfo, menuItems } from "../assets/assets";

export default function Menu() {
  return (
    <section className="bg-[#fdf8f3] min-h-screen py-12 px-4 md:px-10">
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
