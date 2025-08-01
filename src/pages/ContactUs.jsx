import { useState } from "react";
import Title from "./subComponents/Title";
import { toast } from "react-toastify";
import { sendEmail } from "../../utils/sendEmail.js";
import { createMessage } from "../../utils/createMessage.js";
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function isValidMessage(message) {
  const regex = /^[\w\s.,!?'"()@:-]{10,}$/u; // Add {10,} for minimum length
  return regex.test(message);
}
function isValidName(name) {
  const regex = /^[\w\s.,!?'"()@:-]{3,}$/u; // Add {10,} for minimum length
  return regex.test(name);
}

function sanitizeMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  return div.innerHTML;
}
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function onSubmitHandler(e) {
    e.preventDefault();

    // {Validating Name}
    const safeName = sanitizeMessage(name.trim());
    if (!isValidName(name.trim()))
      return toast.error(
        "Name must be at least 3 characters and not contain code or special symbols."
      );

    // {Validatin Email }
    if (!isValidEmail(email.trim()))
      return toast.error("Please enter a valid email address.");

    // {Validating Message}
    const safeMessage = sanitizeMessage(message.trim());
    if (!isValidMessage(message.trim()))
      return toast.error(
        "Message must be at least 10 characters and not contain code or special symbols."
      );
    const userMessage = createMessage(safeName, email, safeMessage);
    return toast.success("Sent");
  }
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
          <form className="space-y-6" onSubmit={(e) => onSubmitHandler(e)}>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Get In Touch!
            </h2>
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-yellow-50 rounded-full border focus:outline-none focus:ring-2 focus:ring-#591C15"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-yellow-50 rounded-full border focus:outline-none focus:ring-2 focus:ring-#591C15"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="5"
              placeholder="Write Messages..."
              className="w-full px-4 py-3 bg-yellow-50 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-#591C15"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
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
