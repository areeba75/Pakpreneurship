// import Mentorsprofilecomponent from &#39;@/components/reusable/Mentorsprofilecomponent&#39;

import MentorsProfileComponent from "@/components/reusable/Mentorsprofilecomponent";
import React from "react";

const page = () => {
  const portfolioImages = [
    "/landing/moneyafrica.svg",
    "/landing/moneyafrica.svg",
    "/landing/moneyafrica.svg",
    "/landing/moneyafrica.svg",
    "/landing/moneyafrica.svg",
    "/landing/asana.svg",
    "/landing/flutterwave.svg",
    "/landing/moneyafrica.svg",
    "/landing/moneyafrica.svg",
  ];
  return (
    <>
    
    <MentorsProfileComponent
  profileImage="/landing/james.svg"
  name="James Wildon"
  title="Senior Developer" // ✅ Add this (was missing)
  role="Senior Developer"
  aboutMe={[
    "Experienced in web development.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo metus, gravida vitae vestibulum eu, vestibulum quis tellus. Praesent bibendum consequat lorem porttitor consequat.",
  ]}
  experience="I have 5+ years of experience in Data Science."
  skills={["React", "Next.js", "JavaScript"]}
  socialLinks={{
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  }}
  portfolioImages={portfolioImages} // ✅ Pass the array
  backgroundImage="/path/to/background.jpg"
  separatorImage="/path/to/separator.jpg"
  dividerImage="/path/to/divider.jpg" // ✅ Add this
  images={["/path/to/image1.jpg", "/path/to/image2.jpg"]} // ✅ Add this
/>

    </>
  );
};

export default page;
