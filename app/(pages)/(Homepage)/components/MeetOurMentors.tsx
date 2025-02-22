import Image from "next/image";
import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
const MeetOurMentors = () => {
  const instructors = [
    {
      name: "James Wilson",
      title: "Senior Artificial Intelligence Data Science Instructor",
      image: "/landing/james.svg",
      social: {
        facebook: "https://facebook.com/jameswilson",
        instagram: "https://instagram.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
    },
    {
      name: "Sophia Carter",
      title: "Machine Learning Engineer & Data Analyst",
      image: "/landing/julia.svg",
      social: {
        facebook: "https://facebook.com/sophiacarter",
        instagram: "https://instagram.com/sophiacarter",
        linkedin: "https://linkedin.com/in/sophiacarter",
      },
    },
    {
      name: "Ethan Martinez",
      title: "Deep Learning Researcher & AI Consultant",
      image: "/landing/emlia.svg",
      social: {
        facebook: "https://facebook.com/ethanmartinez",
        instagram: "https://instagram.com/ethanmartinez",
        linkedin: "https://linkedin.com/in/ethanmartinez",
      },
    },
    {
      name: "Olivia Adams",
      title: "Natural Language Processing Expert",
      image: "/landing/jimmy.svg",
      social: {
        facebook: "https://facebook.com/oliviaadams",
        instagram: "https://instagram.com/oliviaadams",
        linkedin: "https://linkedin.com/in/oliviaadams",
      },
    },
  ];
  return (
    <>
      <div className="lg:w-3/5 text-center mx-auto py-5 md:py-0">
        <h3>
          Meet Our <span className="text-green-500">Mentors</span>
        </h3>
        <p className="pb-5">
          Connect with industry experts and seasoned entrepreneurs at
          PAKPRENEURSHIP, guiding you with insights, experience, and support to
          turn your vision into reality.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-6 md:p-6">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-[#313131] text-white p-2 md:p-4 rounded-2xl shadow-lg"
          >
            {/* Instructor Image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={300}
                height={300}
                className="w-[150px] h-[100px] md:w-full md:h-[220px] object-cover"
              />
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center items-end gap-3 mt-3">
              <a
                href={instructor.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialFacebookCircular className="text-xl md:text-2xl" />
              </a>
              <a
                href={instructor.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialInstagram className="text-lg md:text-xl" />
              </a>
              <a
                href={instructor.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin className="text-lg md:text-xl" />
              </a>
            </div>

            {/* Instructor Info */}
            <h6 className="text-center mt-3">{instructor.name}</h6>
            <p className="text-center text-[10px] md:text-sm leading-snug md:leading-normal">
              {instructor.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-[#313131] flex items-center text-white px-6 py-3 rounded-full">
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
    </>
  );
};

export default MeetOurMentors;
