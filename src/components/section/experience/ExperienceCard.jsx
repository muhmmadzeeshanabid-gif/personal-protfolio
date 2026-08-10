import React from "react";

const ExperienceCard = ({ item }) => {
  return (
    <article className="border-2 border-zinc-800 rounded-btn p-5 sm:p-8 transition-all bg-transparent hover:bg-[#27272a] hover:border-zinc-700 cursor-pointer">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <img src={item.icon} alt={item.company} className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-white">
            {item.role} at {item.company}
          </h3>
        </div>
        <span className="text-sm sm:text-base font-semibold text-zinc-400">
          {item.period}
        </span>
      </div>
      {Array.isArray(item.description) ? (
        <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm sm:text-base leading-relaxed">
          {item.description.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          {item.description}
        </p>
      )}
    </article>
  );
};

export default ExperienceCard;
