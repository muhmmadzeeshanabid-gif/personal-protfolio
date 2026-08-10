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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/muhmmadzeeshanabid@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            website: formData.website || "N/A",
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", website: "", message: "" });
        setErrors({});
        setLoading(false);
        setTimeout(() => setShowSuccess(false), 5000);
        return;
      } else {
        throw new Error(result.message || "FormSubmit failed");
      }
    } catch (err) {
      console.warn("FormSubmit notice, attempting EmailJS fallback:", err);

      try {
        await emailjs.sendForm(
          "service_05g630d",
          "template_wvfz7di",
          form.current,
          { publicKey: "GYyObiQSUK2ZAuIru" }
        );
        setShowSuccess(true);
        setFormData({ name: "", email: "", website: "", message: "" });
        setErrors({});
        setLoading(false);
        setTimeout(() => setShowSuccess(false), 5000);
      } catch (emailJsErr) {
        console.error("All email send methods failed:", emailJsErr);
        alert(
          "Failed to send message. Please email directly to muhmmadzeeshanabid@gmail.com"
        );
        setLoading(false);
      }
    }
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
        <h2 className="text-center text-h2 tracking-tight font-normal mb-12">
          Contact <span className="font-extrabold">Us</span>
        </h2>

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
