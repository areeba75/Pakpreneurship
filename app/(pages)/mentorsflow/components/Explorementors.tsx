import Image from "next/image";
import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Explorementors = () => {
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
  ];
  return (
    <>
      <section>
        <div className="md:p-6 p-4">
          {" "}
          <h4>
            <em>Explore Mentors!</em>
          </h4>
          <p>Showing 1000+ total mentors right now:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-6 md:gap-4 lg:p-6">
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
                  className="w-[150px] h-[100px] md:w-full md:h-[200px] object-cover"
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

export default Explorementors;
