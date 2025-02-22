import Image from "next/image";
import React from "react";

const FeaturedPrograms = () => {
  const featuredarray = [
    {
      img: "/landing/incubation.JFIF",
      caption: "Startup Incubation Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/enterpreneurship.JFIF",
      caption: "Entrepreneurship Bootcamp!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/evaluate.JFIF",
      caption: "Ideate, Innovate, Elevate!!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/women.JFIF",
      caption: "Womenpreneur Program!",
      arrow: "/icons/arrow.svg",
    },
  ];

  return (
    <section className="md:pt-5">
      {/* Title Section */}
      <div className="lg:w-1/2 text-center mx-auto">
        <h2>Our Featured Programs!</h2>
        <p className="md:py-5 pt-1 pb-4">
          Explore our transformative programs at{" "}
          <strong>
            <em>PAKPRENEURSHIP</em>
          </strong>
          , designed to equip aspiring entrepreneurs with the skills, knowledge,
          and support to turn ideas into impactful businesses.
        </p>
      </div>
      {/* Cards Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 py-5">
        {featuredarray.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.caption}
              width={400}
              height={400}
              className="w-full h-[150px] md:h-[300px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Caption & Arrow */}
            <div className="absolute bottom-2 left-0 md:bottom-4 md:left-4 flex items-center bg-white/20 backdrop-blur-md mx-1 py-1 px-2 md:px-4 md:py-3 rounded-2xl text-white">
              <p className="text-[12px] md:text-sm lg:w-4/5">{item.caption}</p>
              <Image
                src={item.arrow}
                alt="arrow"
                width={24}
                height={24}
                className="ml-2 w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              />
            </div>
          </div>
        ))}
      </div>{" "}
      <div className="flex justify-center mt-5">
        <button className="bg-[#313131] flex items-center text-white px-6 py-3 rounded-full">
          View all Programs
          <Image
            src="/icons/arrow.svg"
            alt="arrowRight"
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
