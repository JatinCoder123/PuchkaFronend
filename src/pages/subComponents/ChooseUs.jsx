import { cards } from "../../assets/assets";
export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-4  flex flex-col justify-between h-full min-h-[350px]  border border-orange-200 shadow-[0_0_40px_-10px_#4E1C0A] transition-transform duration-300 hover:scale-[1.02]"
          >
            <div>
              <div
                className={`w-14 h-14 ${card.color} text-white text-2xl flex items-center justify-center rounded-xl mb-6 ${card.glow}`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 ">{card.desc}</p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-orange-500 font-semibold inline-flex items-center gap-1 group"
              >
                Read more
                <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
