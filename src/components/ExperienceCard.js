import React from "react";

const ExperienceCard = ({ job }) => {
  return (
    <div key={job.company} className="pl-4 flex flex-col md:flex-row">
      <div className={"w-1/4"}>
        <span className="text-slate-400 text-xs uppercase font-bold">
          {job.startDate} — {job.endDate}
        </span>
      </div>
      <div className="w-3/4">
        <h3 className="text-xl font-semibold">Company {job.company} · {job.position}</h3>
        <ul>
          {job.highlights.map((highlight) => (
            <li>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
