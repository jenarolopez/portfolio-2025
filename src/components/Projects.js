import React from "react";

export default function Projects() {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects" id="projects"> 
     <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        {[1, 2, 3, 4].map((project) => (
          <div
            key={project}
            className="border border-[#1B998B]/20 rounded-lg p-4"
          >
            <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
            <p>
              A brief description of project {project}. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
