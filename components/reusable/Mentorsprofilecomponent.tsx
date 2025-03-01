

import Image from "next/image";
import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";

interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

interface MentorsProfileProps {
  profileImage: string;
  name: string;
  title: string; // ✅ Add title property

  role: string;
  aboutMe: string[]; // Assuming multiple paragraphs for about me
  experience: string;
  skills: string[];
  socialLinks: SocialLinks;
  // portfolioImages: string[];
  // backgroundPattern: string;
  dividerImage: string;
  portfolioImages: string[];
  backgroundImage: string; // ✅ Add this
  images: string[];

  separatorImage: string; // ✅ Add this
}

const MentorsProfileComponent: React.FC<MentorsProfileProps> = ({
  profileImage,
  name, 
  role,
  aboutMe,
  experience,
  skills,
  socialLinks,
  portfolioImages,
  // backgroundPattern,
  // dividerImage,
}) => {
  return (
    <section className="mt-20 w-[95%] mx-auto">
      <div className="md:flex gap-4 justify-center items-center w-full">
        <div className="md:w-[30%] w-full flex justify-center py-4">
          <Image
            src={profileImage}
            alt={name}
            width={500}
            height={500}
            className="md:w-[350px] w-[200px]"
          />
        </div>
        <div className="relative flex md:w-[70%] items-center gap-4 border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden h-[365px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 "
            style={{ backgroundImage: "url('/programdetail/success-bg.png')" }}
          ></div>
          <div className="w-full h-full space-y-2 ">
            <p>About Me!</p>
            <div className="flex justify-between w-full">
              <h6 className="">{name}</h6>
              <p className="text-green-500">{role}</p>
            </div>
            {aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Image
              src="/line.png"
              alt="divider"
              width={400}
              height={100}
              className="w-full py-4"
            />
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-1/2 space-y-4">
                <p className="font-medium text-[17px] ">Years of Experience:</p>
                <p>{experience}</p>
              </div>
              <div className="lg:w-1/2 flex flex-col gap-2">
                <p className="font-medium text-[16px]">My Skills:</p>
                <div className="flex gap-2">
                  {skills.map((skill, index) => (
                    <button
                      key={index}
                      className="bg-[#FFFFFF29] rounded-full py-1 px-4"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-[16px]">Social Manager:</p>
              <div className="flex justify-start items-end gap-3 mt-3">
                {socialLinks.facebook && (
                  <CiFacebook className="text-xl md:text-2xl text-white" />
                )}
                {socialLinks.instagram && (
                  <SlSocialInstagram className="text-lg md:text-xl text-white" />
                )}
                {socialLinks.linkedin && (
                  <SlSocialLinkedin className="text-lg md:text-xl text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative mt-5 border border-[#9D9D9D80] rounded-2xl bg-[#313131] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            // style={{ backgroundImage: `url(${backgroundPattern})` }}
          ></div>
          <p className="mx-4 my-2">My Portfolio</p>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center m-4">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-[120px] border border-gray-600"
              >
                <Image
                  src={image}
                  alt={`portfolio-${index}`}
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center m-4">
            {portfolioImages?.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-[120px] border border-gray-600"
              >
                <Image
                  src={image}
                  alt={`portfolio-${index}`}
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsProfileComponent;
