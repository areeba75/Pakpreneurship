// import Mentorsprofilecomponent from '@/components/reusable/Mentorsprofilecomponent'

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
      {/* <MentorsProfileComponent
        profileImage="/landing/james.svg"
        name="James Wildon"
        title="Senior Developer" 
        aboutMe={[
          // ✅ Change `about` to `aboutMe`
          "Experienced in web development.",
          "Specialized in React and Next.js.",
        ]}
        experience="5+ years"
        skills={["React", "Next.js", "JavaScript"]}
        socialLinks={{
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
        }}
        portfolioImages={["/path/to/portfolio1.jpg", "/path/to/portfolio2.jpg"]}
        backgroundImage="/path/to/background.jpg"
        separatorImage="/path/to/separator.jpg"
      /> */}
      <MentorsProfileComponent
        profileImage="/landing/james.svg"
        name="James Wildon"
        role="Senior Developer" // ✅ Change title -> role
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
      />
    </>
  );
};

export default page;
