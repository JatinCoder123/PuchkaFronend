import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video1 from "./video1.mp4";
import shop1 from "./shop1.png";
import shop2 from "./shop2.png";
import shop3 from "./shop3.png";
import Logo from "./logo.png";
import item1 from "./item1.png";
import item2 from "./item2.png";
import item3 from "./item3.png";
import item4 from "./item4.png";
import item5 from "./item5.png";
import profile from "./userProfile.png";

export const reviews = [
  {
    name: "JATIN VERMA",
    title: "Deliciously Impressed!",
    review:
      "Puchka Paradise brings true street flavor with amazing hygiene. Highly recommended!",
    rating: 5,
    profile: profile,
  },
  {
    name: "RAHUL",
    title: "Best Golgappe Ever!",
    review:
      "Absolutely loved the burst of flavors in every bite! It reminded me of my childhood memories. Must try for all street food lovers.",
    rating: 4,
    profile: profile,
  },
  {
    name: "PRIYA",
    title: "Perfect for Events!",
    review:
      "We hired Puchka Paradise for our engagement party and guests couldn't stop talking about it. The presentation, taste, everything was top-notch!",
    rating: 4,
    profile: profile,
  },
  {
    name: "ARJUN",
    title: "Authentic and Flavorful",
    review:
      "The spices, the tangy flavor, and the crispiness were just perfect. You can tell they put their heart into the food.",
    rating: 3,
    profile: profile,
  },
];
export const media = [
  { type: "image", src: shop3 },
  { type: "video", src: video3 },
  { type: "image", src: shop2 },
  { type: "video", src: video2 },
  { type: "image", src: shop1 },
  { type: "video", src: video1 },
];
export const menuItems = [
  {
    name: "ATTA PUCHKA",
    price: "20/-",
    details: "(4PCS.)",
    image: item1,
  },
  {
    name: "SUJI PUCHKA",
    price: "20/-",
    details: "(4PCS.)",
    image: item2,
  },
  {
    name: "STUFFED PUCHKA",
    price: "40/-",
    details: "(4PCS.)",
    image: item3,
  },
  {
    name: "PAPDI CHAT",
    price: "40/-",
    details: "",
    image: item4,
  },
  {
    name: "PALAK PATTA CHAT",
    price: "50/-",
    details: "",
    image: item5,
  },
];
export const images = [item1, item2, item3, item4, item5];
export const cards = [
  {
    icon: "🍜",
    color: "bg-green-500",
    glow: "shadow-[0_0_60px_rgba(34,197,94,0.6)]",
    title: "Authentic Flavors",
    desc: "Taste the real street magic  crafted from traditional recipes, fresh ingredients, and a lot of love.",
  },
  {
    icon: "⭐",
    color: "bg-rose-500",
    glow: "shadow-[0_0_60px_rgba(244,63,94,0.6)]",
    title: "Consistent Quality",
    desc: "We never compromise. Every puchka, every chaat, every bite is made with care and hygiene.",
  },
  {
    icon: "❤️",
    color: "bg-blue-600",
    glow: "shadow-[0_0_60px_rgba(37,99,235,0.6)]",
    title: "Loved By Customers",
    desc: "SWe’ve earned the love of hundreds of happy foodies who come back not just for the taste, but for the warmth and authenticity we serve.",
  },
];

export const businessInfo = {
  phone: "+91 9717991106",
  email: "puchkaparadise@gmail.com",
  instagramUrl:
    "https://www.instagram.com/puchkaparadise?igsh=MW1uNHE1eDY0cTdlYQ==",
  location: "Chiranjiv Vihar, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002",
  facebookUrl: null,
  logo: Logo,
};
