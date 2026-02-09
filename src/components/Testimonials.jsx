import React from "react";

const testimonials = [
    {
        id: 1,
        name: "Evren Shah",
        role: "Designer",
        content:
            "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
        avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
        id: 2,
        name: "Flora Sheen",
        role: "Designer",
        content:
            "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
        avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
        id: 3,
        name: "Evren Shah",
        role: "Designer",
        content:
            "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
        avatar: "https://i.pravatar.cc/150?u=3",
    },
];

const QuoteIcon = ({ className }) => (
    <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M0 16V8.61538L3.33333 0H7.77778L5.55556 8.61538H8.88889V16H0ZM11.1111 16V8.61538L14.4444 0H18.8889L16.6667 8.61538H20V16H11.1111Z" />
    </svg>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-primary-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-normal mb-16 text-primary-black">
                    My <span className="font-extrabold">Testimonial</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center p-8 rounded-[20px] bg-primary-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-colors duration-75 hover:bg-primary-black hover:shadow-none cursor-default"
                        >
                            {/* Avatar Container */}
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

                            {/* Content */}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
