import React from "react";
import QuoteIcon from "./QuoteIcon";

const TestimonialCard = ({ item }) => {
  return (
    <div className="group flex flex-col items-center p-8 rounded-[20px] bg-primary-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-colors duration-75 hover:bg-primary-black hover:shadow-none cursor-default">
      <div className="relative mb-6">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-primary-black transition-colors duration-300 group-hover:border-primary-white">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-primary-black text-primary-white rounded-full p-2 border-2 border-primary-white transition-colors duration-75 group-hover:bg-primary-white group-hover:text-primary-black group-hover:border-primary-black">
          <QuoteIcon className="w-4 h-4" />
        </div>
      </div>

      <p className="text-center text-primary-black text-base leading-relaxed mb-6 transition-colors duration-75 group-hover:text-primary-white">
        {item.content}
      </p>

      <div className="w-20 h-[2px] bg-primary-black mb-6 transition-colors duration-75 group-hover:bg-primary-white" />

      <div className="text-center">
        <h4 className="text-xl font-extrabold text-primary-black transition-colors duration-75 group-hover:text-primary-white">
          {item.name}
        </h4>
        <p className="text-primary-black font-semibold transition-colors duration-75 group-hover:text-primary-white">
          {item.role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
