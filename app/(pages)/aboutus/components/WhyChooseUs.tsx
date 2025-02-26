import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <section className="w-[95%] mx-auto py-10">
        <div className="lg:flex w-full gap-2">
          <div className="z-10 flex flex-col justify-end items-center lg:items-start md:justify-center lg:w-[40%] h-full text-white space-y-4 lg:space-y-6 pb-10 lg:py-0">
            <h1>
              Why Choose <span className="text-green-800 italic">Us?</span>
            </h1>
            <p className="">
              At PAKPRENEURSHIP, we stand out for our proven track record of
              nurturing successful startups, offering personalized mentorship,
              cutting-edge resources, and a supportive community. Our programs
              are designed to guide you every step of the way, ensuring your
              entrepreneurial journey is both impactful and rewarding.
            </p>
            <div className="flex w-full md:w-[70%] xl:w-[70%] md:gap-3 gap-1">
              <button className="w-1/2 bg-green-800 flex items-center justify-evenly text-white  md:px-2 py-3 rounded-full">
                <Image
                  src="/icons/explore.svg"
                  alt="arrowRight"
                  width={20}
                  height={20}
                />
                Explore Programs
              </button>
              <button className="w-1/2 bg-green-800 flex justify-center items-center text-white md:px-2 py-3 rounded-full">
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
          {/* <div className="lg:w-[60%] flex justify-center items-center gap-4">
            <div className="w-1/2 flex flex-col gap-10 border-r border-gray-700">
              <div className="flex items-center gap-3 ">
                <Image
                  src="/icons/globe.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-17px font-bold">REAL WORLD LEARNING</p>
                  <p>
                    Hands-on, practical experiences Over purely theoretical or
                    classroom-based instruction. learn to how it applies outside
                    the textbook—think apprenticeships, internships, projects,
                    or even just tackling real-life problems
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/globe.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-17px font-bold">INDUSTRY MENTORSHIP</p>
                  <p>
                    Learn from expert professionals Learning the practical,
                    real-world side of the job straight from expert
                    professionals who’s already nailed it.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-10 justify-around">
              <div className="flex items-center gap-3 ">
                <Image
                  src="/icons/globe.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-17px font-bold">CAREER GROWTH </p>
                  <p>
                    Moving forward to you professional life climbing the ladder,
                    building skills, and hitting milestones that matter to you.
                    it’s a straight shot—start as a junior designer, aim for
                    creative director. Shift from marketing to entrepreneurship,
                    picking up chops along the way.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <Image
                  src="/icons/globe.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-17px font-bold">NETWORKING</p>
                  <p>
                    Connect with entrepreneurs, investors, and professionals
                    Connect with people in your industry or related fields to
                    exchange ideas, opportunities, and support. A good network
                    that plug you into mentorships, gigs, or just keep you
                    sharp.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="lg:w-[60%] md:flex flex-cols justify-center items-center gap-10 md:gap-4">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col gap-5 md:gap-10 md:border-r md:pr-4 border-gray-700">
              {/* Real World Learning (with bottom border) */}
              <div className="flex items-center gap-3 md:pb-5 md:border-b border-gray-700">
                <Image
                  src="/icons/globe.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className=" md:text-[17px] font-bold">
                    REAL WORLD LEARNING
                  </p>
                  <p>
                    Hands-on, practical experiences over purely theoretical or
                    classroom-based instruction. Learn how it applies outside
                    the textbook—think apprenticeships, internships, projects,
                    or even just tackling real-life problems.
                  </p>
                </div>
              </div>

              {/* Industry Mentorship */}
              <div className="flex items-center gap-3 mb-5 md:mb-0">
                <Image
                  src="/icons/education.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="md:text-[17px] font-bold">
                    INDUSTRY MENTORSHIP
                  </p>
                  <p>
                    Learn from expert professionals. Gain practical, real-world
                    insights straight from those who have already mastered the
                    field.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 flex flex-col gap-5 md:gap-10">
              {/* Career Growth (with bottom border) */}
              <div className="flex items-center gap-3 md:pb-5 md:border-b border-gray-700">
                <Image
                  src="/icons/networking.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="md:text-[17px] font-bold">CAREER GROWTH</p>
                  <p>
                    Progress in your professional life—climbing the ladder,
                    building skills, and reaching milestones that matter to you.
                    Whether moving from junior designer to creative director or
                    shifting from marketing to entrepreneurship.
                  </p>
                </div>
              </div>

              {/* Networking */}
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/network.svg"
                  alt="globe"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
                <div>
                  <p className="md:text-[17px] font-bold">NETWORKING</p>
                  <p>
                    Connect with entrepreneurs, investors, and professionals.
                    Build a strong network to access mentorships, gigs, and
                    career opportunities that keep you ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
