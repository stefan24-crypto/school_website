import React from "react";

interface EventProps {
  date: number;
  month: string;
  name: string;
  time: string;
  desc: string;
}

const Event: React.FC<EventProps> = ({ date, month, name, time, desc }) => {
  return (
    <section className="flex items-center gap-6 md:text-base text-xs">
      <div className="md:w-24 md:h-24 w-10 h-10 bg-yellow-300 rounded-full flex flex-col justify-center items-center text-black font-semibold">
        <p>{date}</p>
        <p>{month}</p>
      </div>
      <div className="w-2/3 ">
        <p className="md:text-lg font-semibold">{name}</p>
        <p className="md:text-sm">{time}</p>
        <p className="md:text-sm text-white/40">{desc}</p>
      </div>
    </section>
  );
};

export default Event;
