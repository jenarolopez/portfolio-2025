import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const LeftColumn = () => {
  const [selected, setSelected] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      let currentSection = selected.toLowerCase();

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Improved viewport detection - check if section is at least 30% visible
            if (
              rect.top <= windowHeight * 0.3 && 
              rect.bottom >= windowHeight * 0.3
            ) {
              if (section !== currentSection) {
                setSelected(section.charAt(0).toUpperCase() + section.slice(1));
              }
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selected]); // Add selected to dependency array

  const setClick = (item) => {
    setSelected(item);
    // Add smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="text-slate-100">
        <h1 className="text-4xl tracking-tight text-slate-200 sm:text-5xl font-sans font-bold">
          <a href="/">Jenaro Lopez</a>
        </h1>
        <p className="text-xl font-sans">Full Stack Developer /</p>
        <p className="text-xl mb-5 font-sans">Software Engineer</p>
        <p className="mt-4 max-w-xs leading-normal mb-[50px] font-lato">
          I build full-stack applications and create seamless digital experiences
          from front-end to back-end.
        </p>
        <nav className="hidden lg:block">
          <ul className="space-y-4">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 group/item"
                onClick={() => setClick(item)}
              >
                <span
                  className={cn(
                    "h-[2px] bg-slate-400 w-[50px] group-hover/item:w-[70px] transition-all duration-300 group-hover/item:bg-slate-100",
                    item === selected && "w-[70px] bg-slate-100"
                  )}
                ></span>
                <div
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "text-slate-400 cursor-pointer font-bold group-hover/item:text-slate-100 font-sans text-lg",
                    item === selected && "text-slate-100"
                  )}
                >
                  {item}
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
