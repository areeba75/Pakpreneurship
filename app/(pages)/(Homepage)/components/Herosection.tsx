import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <section>
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat rounded-lg h-[300px] sm:h-[75vh] md:h-screen"
        style={{ backgroundImage: "url('/landing/bg.JFIF')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
        <div className="md:w-[90%] px-1 mx-auto h-full flex items-center py-3">
          <div className="z-10 flex flex-col justify-end lg:justify-center md:w-[95%] lg:w-[55%] h-full text-white space-y-2 lg:space-y-6">
            <h1>
              The Future of Learning is{" "}
              <span className="text-green-800 italic">Practical!</span>
            </h1>
            <p className="w-[80%]">
              Gain hands-on experience with real-world projects and expert
              mentorship.
            </p>
            <div className="flex w-full md:w-[70%] xl:w-[60%] md:gap-3 gap-1">
              <button className="w-1/2 bg-green-800 flex items-center justify-evenly text-white  md:px-4 py-2 rounded-full">
                <Image
                  src="/icons/explore.svg"
                  alt="arrowRight"
                  width={20}
                  height={20}
                />
                Explore Programs
              </button>
              <button className="w-1/2 bg-green-800 flex justify-center items-center text-white md:px-4 py-2 rounded-full">
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
      <div className="bg-[#313131] rounded-2xl px-3 my-10 ">
        {/* <div className="flex justify-evenly h-[70px] items-center rounded-3xl"> */}
        <div
          className="h-[50px] md:h-[70px] flex items-center rounded-3xl 
                  justify-around lg:overflow-visible 
                  overflow-x-auto whitespace-nowrap space-x-6 md:space-x-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Image
            src="/landing/flutterwave.svg"
            alt="flutter"
            width={500}
            height={500}
            className=" w-[100px] md:w-[120px]"
          />
          <Image
            src="/landing/asana.svg"
            alt="asana"
            width={500}
            height={500}
            className=" w-[100px] md:w-[120px] "
          />
          <Image
            src="/landing/quidix.svg"
            alt="quidix"
            width={500}
            height={500}
            className=" w-[100px] md:w-[120px]"
          />
          <Image
            src="/landing/moneyafrica.svg"
            alt="moneyafrica"
            width={500}
            height={500}
            className=" w-[100px] md:w-[120px] "
          />
          <Image
            src="/landing/walmark.svg"
            alt="walmark"
            width={500}
            height={500}
            className=" w-[100px] md:w-[120px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
