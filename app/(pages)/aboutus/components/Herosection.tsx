import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <>
      <section>
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat rounded-3xl h-[230px] lg:h-[350px] flex flex-col justify-end lg:justify-center items-center text-white before:absolute before:inset-0 before:bg-black/60"
          style={{
            backgroundImage: "url(&#39;/aboutus/aboutus-bg.png&#39;)",
          }}
        >
          <div className="z-10 text-center p-5 md:py-10">
            <div className="md:w-[60%] mx-auto">
              <h1>
                Empowering the Future of Learning in
                <span className="text-green-600">
                  <em> Pakistan!</em>
                </span>
              </h1>
              <div className="md:w-[90%] flex flex-col items-center justify-center mx-auto space-y-4">
                <p>
                  A platform built to bridge the gap between education and
                  industry.
                </p>
                <button className="w-1/2 bg-green-600 flex justify-center items-center text-white md:px-4 py-2 rounded-full">
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
            <div className="w-full"> </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Herosection;
