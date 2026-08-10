import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-h2 tracking-tight font-normal mb-16 text-primary-black">
          My <span className="font-extrabold">Testimonial</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
