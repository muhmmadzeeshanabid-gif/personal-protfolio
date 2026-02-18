import React from "react";
import Button from "../Button";
import SocialLinks from "./SocialLinks";

const ContactForm = ({
  formRef,
  formData,
  errors,
  loading,
  onChange,
  onFocus,
  onSubmit,
}) => {
  const inputBaseClass =
    "w-full p-4 border-2 rounded-btn bg-white text-black font-normal outline-none focus:bg-white focus:border-black transition-all placeholder:text-zinc-400";

  const getFieldClasses = (fieldName) => {
    const isError = errors[fieldName];
    const value = formData[fieldName] || "";
    const isFilled = value.trim() !== "";

    let classes = isError
      ? "border-[#ef4444]"
      : isFilled
        ? "border-zinc-400"
        : "border-black";

    if (!isFilled && !isError) {
      classes += " hover:bg-zinc-100 hover:border-zinc-500";
    }

    return classes;
  };

  return (
    <div className="flex-1">
      <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-5">
        <input type="hidden" name="user_name" value={formData.name} />
        <input type="hidden" name="user_email" value={formData.email} />
        <input type="hidden" name="user_website" value={formData.website} />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={onChange}
          onFocus={() => onFocus("name")}
          className={`${inputBaseClass} ${getFieldClasses("name")}`}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          onFocus={() => onFocus("email")}
          className={`${inputBaseClass} ${getFieldClasses("email")}`}
        />

        <input
          type="text"
          name="website"
          placeholder="Your website (If exists)"
          value={formData.website}
          onChange={onChange}
          className={`${inputBaseClass} ${getFieldClasses("website")}`}
        />

        <textarea
          name="message"
          placeholder="How can I help?*"
          rows="5"
          value={formData.message}
          onChange={onChange}
          onFocus={() => onFocus("message")}
          className={`${inputBaseClass} ${getFieldClasses("message")} resize-none`}
        ></textarea>

        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button
            type="submit"
            text={loading ? "Sending..." : "Get In Touch"}
            disabled={loading}
          />
          <SocialLinks />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
