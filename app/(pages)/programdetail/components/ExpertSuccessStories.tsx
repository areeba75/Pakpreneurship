import Image from "next/image";
import React, { useState } from "react";

interface StarRatingProps {
  totalStars?: number; // Default is 5 stars
  initialRating?: number; // Default selected rating
  onRate?: (rating: number) => void; // Callback when rating is selected
}
const ExpertSuccessStories: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRate,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0); // Tracks hover for visual feedback

  const handleClick = (index: number) => {
    setRating(index);
    if (onRate) onRate(index); // Send rating back if callback exists
  };

  return (
    <>
      <section className="w-[90%] mx-auto">
        <div className="lg:w-3/5 text-center mx-auto py-5 mb-10 md:py-0">
          <h4>
            Our Success <em className="text-green-600">Stories!</em>
          </h4>
          <p>
            Discover the inspiring journeys of entrepreneurs who turned their
            dreams into reality with <strong>PAKPRENEURSHIP</strong>. From
            innovative startups to thriving businesses, our success stories
            showcase the power of mentorship, resources, and determination in
            achieving entrepreneurial excellence.
          </p>
        </div>
        <div className="lg:flex gap-5">
          <div className="lg:w-[30%] flex flex-col items-center mb-5 lg:mb-0 gap-4 lg:h-[600px]">
            {/* First Image (Rectangular) */}
            <Image
              src="/programdetail/enterpreneur1.svg"
              alt="Program Overview"
              width={400}
              height={180}
              className="lg:w-[400px] lg:h-[180px] object-cover rounded-lg"
            />

            {/* Second Image (Square) */}
            <Image
              src="/programdetail/enterpreneur2.svg"
              alt="Program Overview"
              width={400}
              height={300}
              className="lg:w-[400px] lg:h-[200px] object-cover rounded-lg"
            />

            {/* Third Image (Rectangular) */}
            <Image
              src="/landing/julia.svg"
              alt="Program Overview"
              width={400}
              height={180}
              className="h-[160px] lg:w-[400px] lg:h-[180px] object-cover rounded-lg"
            />
          </div>
          <div
            className="relative lg:w-[70%] bg-cover bg-center bg-no-repeat rounded-lg lg:h-[600px]"
            style={{ backgroundImage: "url(&#39;/programdetail/success-bg.png&#39;)" }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-50"></div> */}
            <div className="flex flex-col justify-between h-full">
              <div className="md:p-10 p-3 space-y-4">
                <h4>
                  Ali Ahmed, a young environmental enthusiast, joined{" "}
                  <em className="text-green-600">PAKPRENEURSHIP</em>
                  with a vision to tackle plastic waste in Pakistan.
                </h4>
                <p className="leading-7">
                  Discover the inspiring journeys of entrepreneurs who turned
                  their dreams into reality with{" "}
                  <strong>
                    {" "}
                    <em className="text-green-600">PAKPRENEURSHIP</em>
                  </strong>
                  . From innovative startups to thriving businesses, our success
                  stories showcase the power of mentorship, resources, and
                  determination in achieving entrepreneurial excellence.
                </p>
              </div>
              <div className="flex md:p-10 p-3 w-full">
                <div className="flex flex-col w-1/2 items-start">
                  {" "}
                  <em>
                    <h3>Jimmy Carter</h3>
                  </em>
                  <p>CEO at Pak Sans Association Club</p>
                </div>
                <div className="flex space-x-1 w-1/2 items-end justify-end">
                  {[...Array(totalStars)].map((_, index) => {
                    const starIndex = index + 1; // Stars start from 1
                    return (
                      <svg
                        key={starIndex}
                        onClick={() => handleClick(starIndex)}
                        onMouseEnter={() => setHover(starIndex)}
                        onMouseLeave={() => setHover(0)}
                        className={`md:w-5 md:h-5 w-4 h-4 cursor-pointer transition-all ${
                          starIndex <= (hover || rating)
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertSuccessStories;
