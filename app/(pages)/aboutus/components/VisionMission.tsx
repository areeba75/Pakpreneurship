import Image from "next/image";
import React from "react";

const VisionMission = () => {
  return (
    <>
      <section>
        <div className="md:w-[50%] mx-auto text-center pt-5 md:py-10">
          <h4>
            Our Vision & <em className="text-green-600">Mission!</em>
          </h4>
          <p>
            To empower entrepreneurs with the tools, mentorship, and resources
            needed to turn innovative ideas into successful ventures, driving
            economic growth and social impact.{" "}
          </p>
        </div>
        <div className=" w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 gap-2 md:gap-6 py-5">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <Image
              src="/aboutus/vision.png"
              alt="vision"
              width={400}
              height={400}
              className="w-full h-[150px] md:h-[300px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Caption & Arrow */}
            <div className="absolute bottom-2 left-1 md:bottom-4 md:left-4  bg-white/20 backdrop-blur-md mx-1 py-1 px-2 md:px-4 md:py-3 rounded-2xl text-white">
              <p className="text-[12px] md:text-sm lg:w-4/5 font-bold">
                <em>Our Vision!</em>
              </p>
              <p>
                To create a thriving entrepreneurial ecosystem where innovative
                ideas transform into impactful businesses, driving economic
                growth and sustainable development.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <Image
              src="/aboutus/vision.png"
              alt="vision"
              width={400}
              height={400}
              className="w-full h-[150px] md:h-[300px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Caption & Arrow */}
            <div className="absolute bottom-2 left-1 md:bottom-4 md:left-4  bg-white/20 backdrop-blur-md mx-1 py-1 px-2 md:px-4 md:py-3 rounded-2xl text-white">
              <p className="text-[12px] md:text-sm lg:w-4/5 font-bold">
                <em>Our Mission!</em>
              </p>
              <p>
                To create a thriving entrepreneurial ecosystem where innovative
                ideas transform into impactful businesses, driving economic
                growth and sustainable development.
              </p>
            </div>
          </div>
        </div>
        <section>
          <div className="w-[90%] mx-auto grid grid-cols-2  md:grid-cols-4 gap-2">
            <div className="relative   border border-[#9D9D9D80] rounded-2xl bg-[#313131] p-5">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
              <div className="text-center">
                {" "}
                <em className="text-[28px] text-white font-medium">92%</em>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="relative   border border-[#9D9D9D80] rounded-2xl bg-[#313131] p-5">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
              <div className="text-center">
                {" "}
                <em className="text-[28px] text-white font-medium">24</em>
                <p>Years of Expereice</p>
              </div>
            </div>{" "}
            <div className="relative   border border-[#9D9D9D80] rounded-2xl bg-[#313131] p-5">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
              <div className="text-center">
                {" "}
                <em className="text-[28px] text-white font-medium">14.2K+</em>
                <p>Completed Projects</p>
              </div>
            </div>{" "}
            <div className="relative   border border-[#9D9D9D80] rounded-2xl bg-[#313131] p-5">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
              <div className="text-center">
                {" "}
                <em className="text-[28px] text-white font-medium">12+</em>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default VisionMission;
