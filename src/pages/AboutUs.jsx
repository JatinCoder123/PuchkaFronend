import React from "react";
import Title from "./subComponents/Title";
import WhyChooseUs from "./subComponents/ChooseUs";
import JoinUs from "./subComponents/JoinUs";
import { businessInfo } from "../assets/assets";
import { ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="sm:px-10">
      <div className="text-2xl text-center pt-10 mt-20">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* Logo Section */}
        <div className="w-full p-8 sm:p-5 flex items-center justify-center">
          <img
            className="max-w-[300px] md:max-w-[350px] rounded-full border-orange-200 shadow-[0_0_40px_-10px_#4E1C0A] transition-all duration-500 hover:scale-105"
            src={businessInfo.logo}
            alt="Business Logo"
          />
        </div>

        {/* About Text Section */}
        <div className="p-2 flex flex-col justify-center gap-6 font-medium text-gray-600">
          <p>
            At <span className="font-semibold">Puchka Paradise</span>, we’re
            passionate about bringing the irresistible flavors of Indian street
            food to your plate. What started as a love for puchkas (also known as
            golgappas) has grown into a full-blown celebration of taste,
            tradition, and joy.
          </p>
          <p>
            Whether you're craving the spicy tang of pani puri, the crispiness
            of freshly fried snacks, or the warmth of home-style chaat, we've
            curated every bite with authenticity and love.
          </p>

          <h2 className="text-[#18181b] font-bold">Our Mission</h2>
          <p>
            Maintaining quality and freshness in every bite, every day. Scaling
            our vision from a humble cart to a celebrated name in the street
            food space, we aspire to grow this into a beloved brand that reaches
            every corner of the city (and beyond).
          </p>

          {/* ✅ FSSAI Compliance Section */}
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4 shadow-sm mt-4">
            <ShieldCheck className="text-green-600 w-7 h-7" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Licensed & Registered with FSSAI under FSS Act, 2006
              </p>
              <p className="text-xs text-gray-500">
                Reg. No:{" "}
                <span className="font-semibold">22725699000241</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <WhyChooseUs />
      <JoinUs />
    </div>
  );
};

export default About;
