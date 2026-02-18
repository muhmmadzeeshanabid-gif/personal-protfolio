import React from "react";

const ExperienceCard = ({ item }) => {
  return (
    <article className="border-2 border-zinc-800 rounded-btn p-8 transition-all bg-transparent hover:bg-[#27272a] hover:border-zinc-700 cursor-pointer">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <img src={item.icon} alt={item.company} className="h-8 w-8" />
          <h3 className="text-xl md:text-2xl font-bold text-primary-white">
            {item.role} at {item.company}
          </h3>
        </div>
        <span className="text-base font-semibold text-zinc-400">
          {item.period}
        </span>
      </div>
      <p className="text-zinc-400 text-base leading-relaxed">
        {item.description}
      </p>
    </article>
  );
};

export default ExperienceCard;
