import React from "react";

const SuccessModal = ({ onClose }) => {
  return (
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
          onClick={onClose}
          className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Awesome!
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
