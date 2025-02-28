import React from "react";

const Archive = () => {
  return (
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <a
        href="#content"
        class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold
     uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div class="lg:py-24">
        <a
          class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
          href="/"
        >
          <svg
            xmlns="http:www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Brittany Chiang
        </a>
        <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table id="content" class="mt-12 w-full border-collapse text-left">
          <thead class="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th class="py-4 pr-8 text-sm font-semibold text-slate-200">
                Year
              </th>
              <th class="py-4 pr-8 text-sm font-semibold text-slate-200">
                Project
              </th>
              <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Made at
              </th>
              <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Built with
              </th>
              <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-slate-300/10 last:border-none">
              <td class="py-4 pr-4 align-top text-sm">
                <div class="translate-y-px">2023</div>
              </td>
              <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div class="block sm:hidden">
                    <a
                      class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base"
                      href="https:www.emersoncollective.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Emerson Collective (opens in a new tab)"
                    >
                      <span>
                        Emerson{" "}
                        <span class="inline-block">
                          Collective
                          <svg
                            xmlns="http:www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="hidden sm:block">Emerson Collective</div>
                </div>
              </td>
              <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div class="translate-y-px whitespace-nowrap">Upstatement</div>
              </td>
              <td class="hidden py-4 pr-4 align-top lg:table-cell">
                <ul class="flex -translate-y-1.5 flex-wrap">
                  <li class="my-1 mr-1.5">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Next.js
                    </div>
                  </li>
                  <li class="my-1 mr-1.5">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      TypeScript
                    </div>
                  </li>
                  <li class="my-1 mr-1.5">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      SCSS
                    </div>
                  </li>
                  <li class="my-1 mr-1.5">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Contentful
                    </div>
                  </li>
                </ul>
              </td>
              <td class="hidden py-4 align-top sm:table-cell">
                <ul class="translate-y-1">
                  <li class="mb-1 flex items-center">
                    <a
                      class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                      href="https:www.emersoncollective.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="emersoncollective.com (opens in a new tab)"
                    >
                      <span>
                        {" "}
                        <span class="inline-block">
                          emersoncollective.com
                          <svg
                            xmlns="http:www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
