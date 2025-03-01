import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section>
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat rounded-lg h-[300px] sm:h-[75vh] md:h-screen"
          style={{ backgroundImage: "url(&#39;/programdetail/bg-hero.JFIF&#39;)" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
          <div className="md:w-[90%] px-1 mx-auto h-full flex items-center py-3">
            <div className="z-10 flex flex-col justify-end lg:justify-center md:w-[95%] lg:w-[45%] h-full text-white space-y-2 lg:space-y-4">
              <h1>
                Startup Incubation{" "}
                <span className="text-green-600 italic">Program!</span>
              </h1>
              <p className="">
                The Startup Incubation Program at PAKPRENEURSHIP provides
                hands-on mentorship, resources, and workspace to transform your
                business idea into a thriving startup. From concept to launch,
                we guide you every step of the way to ensure success.
              </p>
              <div className="">
                <button className=" bg-green-800 flex justify-center items-center text-white px-4 py-2 rounded-full">
                  Apply Now
                  <Image
                    src="/icons/arrow.svg"
                    alt="arrowRight"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
