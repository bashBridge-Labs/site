import React from "react";

export default function hero() {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto overflow-hidden md:px-12 lg:px-16 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <div className="max-w-xl lg:p-10">
              <div>
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  I am a short heading
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Use this paragraph to share information about your company or
                  products. Make it engaging and interesting, and showcase your
                  brand's personality. Thanks for visiting our website!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a
                  href="#_"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Button
                </a>
                <a
                  href="#_"
                  className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                >
                  Learn more &nbsp; →
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6 ">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-full active:bg-tangaroa-800 active:text-tangaroa-300 bg-tangaroa-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangaroa-900 focus:outline-none group hover:bg-tangaroa-700 hover:text-tangaroa-100 lg:w-auto"
                href="/overview"
              >
                Explora all pages
                <svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:mt-0 lg:ml-auto ">
            <div className="absolute transform lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:translate-x-8 sm:left-1/2 sm:top-0 sm:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-44 lg:opacity-100 sm:opacity-0">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="https://picsum.photos/seed/picsum/200/300"
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
