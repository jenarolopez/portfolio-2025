import React from "react";

export default function About() {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>
        <p className="mb-4">
          Currently, I'm a Senior Front-End Engineer at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.klaviyo.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Klaviyo (opens in a new tab)"
          >
            Klaviyo
          </a>
          , specializing in accessibility. I contribute to the creation and
          maintenance of UI components that power Klaviyo’s frontend, ensuring
          our platform meets web accessibility standards and best practices to
          deliver an inclusive user experience.
        </p>
        <p className="mb-4">
          In the past, I've had the opportunity to develop software across a
          variety of settings — from{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://us.mullenlowe.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="advertising agency (opens in a new tab)"
          >
            advertising agencies
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.apple.com/apple-music/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="huge corporation (opens in a new tab)"
          >
            large corporations
          </a>{" "}
          to{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://starry.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="start-up (opens in a new tab)"
          >
            start-ups
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="digital product studio (opens in a new tab)"
          >
            small digital product studios
          </a>
          . Additionally, I also released a{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.newline.co/courses/build-a-spotify-connected-app"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="online video course (opens in a new tab)"
          >
            comprehensive video course
          </a>{" "}
          a few years ago, guiding learners through building a web app with the
          Spotify API.
        </p>
        <p>
          In my spare time, I’m usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for{" "}
          <span className="group/korok inline-flex lg:font-medium lg:text-slate-200">
            <span className="sr-only">Korok seeds</span>
            <span
              className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
              aria-hidden="true"
            >
              K
            </span>
            <span
              className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
              aria-hidden="true"
            >
              r
            </span>
            <span
              className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
              aria-hidden="true"
            >
              k
            </span>
            <span
              className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
              aria-hidden="true"
            >
              &nbsp;
            </span>
            <span
              className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
              aria-hidden="true"
            >
              s
            </span>
            <span
              className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
              aria-hidden="true"
            >
              d
            </span>
            <span
              className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
              aria-hidden="true"
            >
              s
            </span>
          </span>
          .
        </p>
      </div>
    </section>
  );
}
