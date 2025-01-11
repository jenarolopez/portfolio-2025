import ExperienceCard from "./ExperienceCard";
import experience from "../json/experience";
const RightColumn = () => {
  return (
    <div className="w-screen lg:w-2/4 space-y-20 mt-16">
      <section id="about relative">
        <div className="sticky top-0 z-20 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <p>
          Hello! I'm a passionate full-stack developer with a love for creating
          beautiful, functional, and user-centered digital experiences.
        </p>
      </section>

      <section id="experience relative">
        <div className="sticky top-0 z-20 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div className="space-y-8">
          {experience.map((job) => (
            <ExperienceCard job={job} />
          ))}
        </div>
      </section>

      <section id="work relative">
        <div className="sticky top-0 z-20 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <section id="contact relative">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me at{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-[#1B998B] hover:underline"
          >
            your.email@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default RightColumn;
