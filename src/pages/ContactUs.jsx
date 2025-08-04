import { useState } from "react";
import Title from "./subComponents/Title";
import { toast } from "react-toastify";
import axios from "axios";
import LoadingButton from "../components/LoadingButton";
import { GoogleMap } from "../components/GoogleMap";
import { businessInfo } from "../assets/assets.js";
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validatingMessage(message) {
  const trimmedMessage = message.trim();
  if (trimmedMessage.length < 10)
    return {
      success: false,
      res: "Message must contain at least 10 characters.",
    };
  const regex = /^[A-Za-z0-9 .,!?'"()\-_\n\r]+$/;
  if (!regex.test(trimmedMessage))
    return {
      success: false,
      res: "Looks like your message includes unsupported symbols. Please remove them and try again.",
    };
  return { success: true, trimmedMessage };
}
function validatingName(name) {
  const senderName = name.trim();
  if (senderName.length < 3)
    return { success: false, res: "Name must contain at least 3 characters." };
  const regex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  if (!regex.test(senderName))
    return {
      success: false,
      res: "Name must not contain code or special symbols.",
    };
  return { success: true, senderName };
}
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function onSubmitHandler(e) {
    e.preventDefault();
    setLoading(true);
    const nameValidation = validatingName(name);
    const messageValidation = validatingMessage(message);
    if (!nameValidation.success) {
      setLoading(false);
      return toast.error(nameValidation.res);
    }
    if (!messageValidation.success) {
      setLoading(false);
      return toast.error(messageValidation.res);
    }
    if (!isValidEmail(email.trim())) {
      setLoading(false);
      return toast.error("Enter a valid email address!");
    }

    const userName = nameValidation.senderName;
    const userMessage = messageValidation.trimmedMessage;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/contact-us`,
        { userName, email, userMessage },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setLoading(false);
      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
      return;
    } catch (error) {
      setLoading(false);
      return toast.error(error.response.data.message);
    }
  }
  return (
    <div>
      <div className="text-center text-2xl pt-10 mt-20">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="min-h-screen  text-stone-800 py-10 px-4 md:px-20">
        <div className="grid lg:grid-cols-2 gap-10">
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
                <p className="text-sm">{businessInfo.location}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-lg">
                📞
              </div>
              <div>
                <h4 className="font-bold">Contact Info</h4>
                <p className="text-sm">Mobile: {businessInfo.phone}</p>
                <p className="text-sm">Email: {businessInfo.email}</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white text-lg">
                🕓
              </div>
              <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p className="text-sm">Monday - Sunday: 3:00pm - 11:00pm</p>
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
              maxLength={30}
              className="w-full px-4 py-3 bg-yellow-50 rounded-full border focus:outline-none focus:ring-2 focus:ring-#591C15"
              value={name}
              onChange={(e) => {
                setName(() => {
                  let name = e.target.value;
                  if (name.length === 30)
                    toast.info("Name can only have 30 character");
                  return name;
                });
              }}
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
              maxLength={300}
              required
              onChange={(e) => {
                setMessage(() => {
                  let message = e.target.value;
                  if (message.length === 300)
                    toast.info("Message can only have 300 character");
                  return message;
                });
              }}
            ></textarea>
            {loading ? (
              <LoadingButton content={"Sending..."} />
            ) : (
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-stone-800 hover:cursor-pointer transition"
              >
                SEND MESSAGE NOW
              </button>
            )}
          </form>
        </div>
        <GoogleMap />
      </div>
    </div>
  );
}
