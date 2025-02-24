import Image from "next/image";
import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";

const ExpertMentors = () => {
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
      <section className="w-[95%] mx-auto">
        <div className="md:flex w-full items-center my-10">
          <div className="md:w-1/2">
            <h4 className=" lg:w-1/2 mb-2 md:mb-0">
              Meet Our Expert <em className="text-green-700">Mentors!</em>
            </h4>
          </div>
          <p className="border-l pl-4 md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            justo metus, gravida vitae vestibulum eu, vestibulum quis tellus.
            Praesent bibendum consequat lorem porttitor consequat. In vitae
            condimentum purus. Pellentesque vel euismod nibh.
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
                  className="w-[200px] h-[100px] md:w-full md:h-[220px] object-cover"
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
      </section>
    </>
  );
};

export default ExpertMentors;
