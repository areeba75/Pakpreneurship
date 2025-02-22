"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      text: `"PAKPRENEURSHIP Transformed My Idea Into A Thriving Business! The Mentorship And Resources Provided Were Invaluable In Helping Me Navigate The Entrepreneurial Journey."`,
      author: "Ali R., Founder Of GreenPak Solutions.",
      authorImage: "/landing/AliR.svg",
      videoImage: "/landing/AliR.svg",
    },
    {
      id: 2,
      text: `"The Startup Incubation Program Gave Me The Confidence And Tools To Launch My Tech Startup With A Solid Foundation."`,
      author: "Sarah M., CEO of TechNova.",
      authorImage: "/landing/AhmedT.svg",
      videoImage: "/landing/AhmedT.svg",
    },
    {
      id: 3,
      text: `"This Program Has Been A Game-Changer! The Insights, Network, And Practical Knowledge Have Been Invaluable."`,
      author: "John D., Co-Founder of InnovateX.",
      authorImage: "/landing/Sara.svg",
      videoImage: "/landing/Sara.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current && testimonialRefs.current[currentIndex]) {
      const container = containerRef.current;
      const activeElement = testimonialRefs.current[currentIndex];

      container.scrollTo({
        top: activeElement.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    startAutoScroll();
  };

  return (
    <section className="my-10 md:mt-16 mx-3">
      <div className="lg:flex w-full">
        <div className="lg:w-1/2 mb-5 md:mb-0">
          <h3>
            Our Success <em className="text-green-500">Stories!</em>
          </h3>
          <p className="md:py-5 pb-4">
            Discover inspiring journeys of entrepreneurs who turned their dreams
            into reality with{" "}
            <strong className="tracking-wider">
              <span className="text-green-600 font-bold">PAK</span>PRENEURSHIP
            </strong>{" "}
            where innovation meets success.
          </p>
          <button className="bg-green-700 flex items-center text-white px-6 py-3 rounded-full">
            Meet all Mentors{" "}
            <Image
              src="/icons/arrow.svg"
              alt="arrowRight"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>

        <div
          ref={containerRef}
          className="h-[150px] md:h-[200px] lg:w-1/2 overflow-y-auto space-y-6 py-6  scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center justify-between bg-black text-white  md:p-6 rounded-xl transition-opacity duration-100 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="w-2/3">
                <p className="italic">{testimonial.text}</p>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={testimonial.authorImage}
                    alt="Author"
                    className="w-12 h-12 rounded-full border"
                  />
                  <p>{testimonial.author}</p>
                </div>
              </div>

              <div className="relative w-1/3">
                <img
                  src={testimonial.videoImage}
                  alt="Video Thumbnail"
                  className="rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-[8px] md:text-3xl bg-green-500 md:p-3 rounded-full" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
