import React from "react";
import jsonData from "@/data/db";

export default function FeatureSection() {
  return (
    <section className="overflow-y-auto no-scrollbar   lg:h-screen md:mt-24 bg-transparent mb-20">

      <div className="px-8   mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
        <div className="lg:w-1/2 md:py-2">
          <div className="top-0 md:pt-8 pb-16 lg:sticky">
            <div>
              <div className="lg:pr-24 md:pr-12">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    {jsonData.features.featureSectionTitle}
                  </p>
                  <p className="max-w-xl mt-4 text-base text-gray-500">
                    {jsonData.features.featureSectionSubtitle}
                  </p>
                </div>
                <div className=" flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start hidden md:flex">
                  <a
                    href="/contact"
                    className="items-center justify-center w-full px-8 py-2.5 text-center  text-white bg-[#3b57ff] hover:scale-105 duration-200 hover:bg-[#2141ff]   rounded-full   lg:w-auto border-2 border-stone-200 "
                  >
                    {jsonData.features.featureSectionButton1}
                  </a>
                  <a
                    href="/service"
                    className="inline-flex items-center justify-center text-sm  text-black duration-200 hover:text-blue-500 "
                  >
                    {jsonData.features.featureSectionButton2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex-shrink-0">
            <div>
              <ul
                className="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
                role="list"
              >
                {jsonData.features.featuresList.map((item, index) => (
                  <li key={index}>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-[#4860FF] border-2 border-stone-200">
                        {item.icon}
                      </div>
                      <p className="mt-4 text-lg font-medium leading-6 text-black">
                        {item.title}
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="my-16 gap-2 space-x-2 flex flex-col md:hidden  ">
          <a
            href="#_"
            className="items-center py-2.5 text-center  text-white bg-[#4860FF] hover:scale-105 duration-200 hover:bg-[#324dff]   rounded-full border-2 border-stone-200 "
          >
            {jsonData.features.featureSectionButton1}
          </a>
          <a
            href="#_"
            className=" text-center text-sm  text-black duration-200 hover:text-blue-500 "
          >
            {jsonData.features.featureSectionButton2}
          </a>
        </div>
      </div>
    </section>
  );
}
