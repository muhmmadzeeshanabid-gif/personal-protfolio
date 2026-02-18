import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex-1 space-y-8 lg:mt-[80px]">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-extrabold text-primary-black tracking-tight">
          Let's{" "}
          <span
            className="font-extrabold uppercase text-primary-white"
            style={{
              WebkitTextStroke: "6px #000000",
              WebkitTextFillColor: "#ffffff",
              paintOrder: "stroke",
              color: "#ffffff",
            }}
          >
            talk
          </span>{" "}
          for{" "}
          <br />
          Something special
        </h2>
        <p className="text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xl md:text-2xl font-bold text-primary-black">
          <a href="mailto:muhammadzeeshanabid@gmail.com">
            zeeshanabid@gmail.com
          </a>
        </p>
        <p className="text-xl md:text-2xl font-bold text-primary-black">
          +92 (321)-6287-487
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
