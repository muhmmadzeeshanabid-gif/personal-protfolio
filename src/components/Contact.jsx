import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import social1 from "../assets/socialicon/Social icon (1).svg";
import social2 from "../assets/socialicon/Social icon (2).svg";
import social3 from "../assets/socialicon/Social icon (3).svg";
import social4 from "../assets/socialicon/Social icon (4).svg";
import Button from "./Button";

// Initialize EmailJS (replace with your Public Key)
emailjs.init("GYyObiQSUK2ZAuIru");

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }
    if (!formData.website.trim()) newErrors.website = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      // Send email using EmailJS (service & template set to provided IDs)
      emailjs
        .sendForm("service_05g630d", "template_wvfz7di", form.current, {
          publicKey: "GYyObiQSUK2ZAuIru",
        })
        .then(
          () => {
            console.log("Email sent successfully!");
            setShowSuccess(true);
            setFormData({ name: "", email: "", website: "", message: "" });
            setErrors({});
            setLoading(false);
            setTimeout(() => setShowSuccess(false), 5000);
          },
          (error) => {
            console.log("Email sending failed:", error.text);
            alert("Failed to send message. Please try again.");
            setLoading(false);
          },
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as soon as user modifies the field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleFocus = (name) => {
    // Clear error when user focuses the field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const inputBaseClass =
    "w-full p-4 border-2 rounded-[var(--radius-btn)] bg-white text-black font-normal outline-none focus:bg-white focus:border-black transition-all placeholder:text-zinc-400";

  const getFieldClasses = (fieldName) => {
    const isError = errors[fieldName];
    const value = formData[fieldName] || "";
    const isFilled = value.trim() !== "";

    // Default: Black border (as requested)
    // Filled: Gray border (zinc-400)
    let classes = isError
      ? "border-[#ef4444]"
      : isFilled
        ? "border-zinc-400"
        : "border-black";

    // Only apply hover effects if the field is NOT filled and NOT in error state
    if (!isFilled && !isError) {
      classes += " hover:bg-zinc-100 hover:border-zinc-500";
    }

    return classes;
  };

  return (
    <section id="contact" className="py-20 bg-primary-white relative">
      {/* Success Pop-up */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p className="text-zinc-600">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left side: Form */}
          <div className="flex-1">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Hidden fields for EmailJS template variables (keeps React state names intact) */}
              <input type="hidden" name="user_name" value={formData.name} />
              <input type="hidden" name="user_email" value={formData.email} />
              <input
                type="hidden"
                name="user_website"
                value={formData.website}
              />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                className={`${inputBaseClass} ${getFieldClasses("name")}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                className={`${inputBaseClass} ${getFieldClasses("email")}`}
              />
              <input
                type="text"
                name="website"
                placeholder="Your website (If exists)"
                value={formData.website}
                onChange={handleChange}
                onFocus={() => handleFocus("website")}
                className={`${inputBaseClass} ${getFieldClasses("website")}`}
              />
              <textarea
                name="message"
                placeholder="How can I help?*"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                className={`${inputBaseClass} ${getFieldClasses("message")} resize-none`}
              ></textarea>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Button
                  type="submit"
                  text={loading ? "Sending..." : "Get In Touch"}
                  disabled={loading}
                />

                <div className="flex items-center gap-4">
                  <a href="#" className="social-icon group">
                    <img src={social2} alt="Facebook" />
                  </a>
                  <a href="#" className="social-icon group">
                    <img src={social1} alt="GitHub" />
                  </a>
                  <a href="#" className="social-icon group">
                    <img src={social3} alt="Twitter" />
                  </a>
                  <a href="#" className="social-icon group">
                    <img src={social4} alt="Instagram" />
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Right side: Content */}
          <div className="flex-1 space-y-8 lg:mt-[80px]">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-extrabold text-primary-black tracking-tight">
                Let's <span className="text-outline-strong">talk</span> for{" "}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
