import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SuccessModal from "./SuccessModal";

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
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;

    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }

    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm("service_05g630d", "template_wvfz7di", form.current, {
        publicKey: "GYyObiQSUK2ZAuIru",
      })
      .then(
        () => {
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleFocus = (name) => {
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary-white relative">
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <ContactForm
            formRef={form}
            formData={formData}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFocus={handleFocus}
            onSubmit={handleSubmit}
          />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
