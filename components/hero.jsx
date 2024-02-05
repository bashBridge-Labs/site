import React from "react";
import jsonData from "@/data/db";
export default function Hero() {
  return (
    <section >

      <div className="relative items-center w-full px-5 py-24 mx-auto overflow-hidden md:px-12 lg:px-16 max-w-7xl ">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <div className="max-w-xl lg:p-10">
              <div>
                <p className="text-5xl font-medium tracking-tight text-black sm:text-6xl">
                  {jsonData.title}
                </p>
                <p className="max-w-xl mt-4 text-base text-gray-500">
                  {jsonData.littleIntro}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a
<<<<<<< HEAD
                  href="#_"
                  className="items-center justify-center w-full px-8 py-2.5 text-center text-white bg-[#3b57ff] hover:scale-105 duration-300 hover:bg-[#2141ff]   rounded-full inline-flex  lg:w-auto border-2 border-stone-200 "
=======
                  href="/contact"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white bg-[#4860FF] hover:scale-105 duration-200 hover:bg-zinc-600   rounded-full inline-flex  lg:w-auto border-2 border-stone-200 "
>>>>>>> 7a0817f41c417cf7c91723e4f4d9c054e68ce3a9
                >
                  {jsonData.heroButton1}
                </a>
                <a
                  href="/service"
                  className="inline-flex items-center justify-center text-sm  text-black duration-200 hover:text-blue-500"
                >
                  {jsonData.heroButton2}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block  ">
            <div className="absolute transform lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:translate-x-8 sm:left-1/2 sm:top-0 sm:translate-x-8 pb-24">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-44 lg:opacity-100 sm:opacity-0">
                    <img
                      alt="Lexingtøn thumbnail"
                      className="object-cover"
                      src="/image/cloud.png"
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
                      src="/image/database.png"
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
                      src="/image/mobile.png"
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
                      src="/image/api.png"
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
                      src="/image/codefile.png"
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
                      src="/image/react.png"
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
                      src="/image/html.png"
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
{/* 
          <div className="md:hidden">
            <div className="flex items-center  justify-center">
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/cloud.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/database.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/mobile.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/api.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/codefile.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/react.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
                <div className="h-full overflow-hidden w-40">
                  <img
                    alt="Lexingtøn thumbnail"
                    className="object-cover"
                    src="/image/html.png"
                    decoding="async"
                    height="926"
                    loading="lazy"
                    width="428"
                  />
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
}
