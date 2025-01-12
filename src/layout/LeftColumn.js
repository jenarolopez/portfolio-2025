import React, { useState } from "react";
import { cn } from "../lib/utils";

const LeftColumn = () => {
  const [selected, setSelected] = useState("About");

  const setClick = (item) => {
    setSelected(item);
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="text-slate-100">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Brittany Chiang</a>
        </h1>
        <p className="text-xl">Full Stack Developer /</p>
        <p className="text-xl mb-5">Software Engineer</p>
        <p className="mt-4 max-w-xs leading-normal mb-8">
          I craft robust, scalable, and user-focused software solutions to
          elevate digital experiences.
        </p>
        <nav className="hidden lg:block">
          <ul className="space-y-4">
            {["About", "Experience", "Work", "Contact"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 group/item"
                onClick={() => setClick(item)}
              >
                <span
                  className={cn(
                    "h-[2px] bg-slate-400 w-[50px] group-hover/item:w-[70px] transition-all duration-100 group-hover/item:bg-slate-100",
                    item === selected && "w-[70px] bg-slate-100"
                  )}
                ></span>
                <div
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "text-slate-400 cursor-pointer font-bold group-hover/item:text-slate-100",
                    item === selected && "text-slate-100"
                  )}
                >
                  {item.toUpperCase()}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 lg:mt-0 hidden lg:block">
        <p className="text-sm">© 2025 Jenaro Lopez. All rights reserved.</p>
      </div>
    </header>
  );
};

export default LeftColumn;
