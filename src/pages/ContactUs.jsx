// ContactUs.jsx
import Title from "./subComponents/Title";
export default function ContactUs() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 ">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="min-h-screen  text-stone-800 py-10 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Contact Information */}
          <div className="space-y-6 bg-yellow-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              CONTACT <span className="text-red-500">INFORMATION</span>
            </h3>
            <p className="text-sm text-stone-600">
              Your one-stop street food corner for the most irresistible
              Golgappe experience. Crunchy, spicy, and full of flavor!
            </p>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-lg">
                📍
              </div>
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="text-sm">New Delhi, India</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-lg">
                📞
              </div>
              <div>
                <h4 className="font-bold">Contact Info</h4>
                <p className="text-sm">Mobile: +91 7466079671</p>
                <p className="text-sm">Email: puchkaparadise@gmail.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white text-lg">
                🕓
              </div>
              <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p className="text-sm">Monday - Saturday: 9:00am - 6:00pm</p>
                <p className="text-sm">Sunday: 9:00am - 8:00pm</p>
              </div>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <form className="space-y-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Get In Touch!
            </h2>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-yellow-50 rounded-full border focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-yellow-50 rounded-full border focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              rows="5"
              placeholder="Write Messages..."
              className="w-full px-4 py-3 bg-yellow-50 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-stone-800 transition"
            >
              SEND MESSAGE NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
