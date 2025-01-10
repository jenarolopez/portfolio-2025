const RightColumn = () => {
  return (
    <div className="w-full lg:w-2/3 p-8 space-y-24 mt-8">
      <section id="about">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          Hello! I'm a passionate full-stack developer with a love for creating
          beautiful, functional, and user-centered digital experiences.
        </p>
      </section>

      <section id="experience">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((job) => (
            <div key={job} className="border-l-2 border-[#1B998B] pl-4">
              <h3 className="text-xl font-semibold">Company {job}</h3>
              <p className="text-zinc-400">Position {job}</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="work">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="border border-[#1B998B]/20 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p>
                A brief description of project {project}. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me at{' '}
          <a href="mailto:your.email@example.com" className="text-[#1B998B] hover:underline">
            your.email@example.com
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default RightColumn

