"use client";

import React, { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Bilal H",
    rating: 5,
    time: "2 months ago",
    review:
      "PAKPRENEURSHIP's Entrepreneurship Bootcamp gave me the skills and confidence to scale my business. The trainers are experts, and the community is incredibly supportive.",
  },
  {
    name: "Ahmed T",
    rating: 5,
    time: "2 months ago",
    review:
      "The Startup Incubation Program is top-notch! The hands-on guidance and networking opportunities are invaluable. I couldn't have asked for a better platform to launch my business.",
  },
  {
    name: "Usama J",
    rating: 5,
    time: "2 months ago",
    review:
      "The tailored mentorship and workshops empowered me to take my business to the next level.",
  },
  {
    name: "Sara K",
    rating: 5,
    time: "2 months ago",
    review:
      "The Startup Incubation Program is top-notch! The hands-on guidance and networking opportunities are invaluable. I couldn't have asked for a better platform to launch my business.",
  },
  {
    name: "Fatima Z",
    rating: 5,
    time: "2 months ago",
    review:
      "I joined the Womenpreneur Program, and it was a transformative experience. The tailored mentorship and workshops empowered me to take my business to the next level.",
  },
  {
    name: "Omar S",
    rating: 5,
    time: "2 months ago",
    review:
      "The Womenpreneur Program helped me gain clarity and direction. Highly recommended!",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-black py-10 space-y-6">
      {[1, 2, 3].map((row) => (
        <div
          key={row}
          className={`relative overflow-hidden ${
            row === 2 ? "md:overflow-x-auto" : "md:overflow-hidden"
          }`}
          style={
            row === 2 ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}
          }
        >
          <div
            className={`flex whitespace-nowrap space-x-4  ${
              row === 2 ? "animate-scroll-right" : "animate-scroll-left"
            }`}
            style={
              row === 2
                ? { scrollbarWidth: "none", msOverflowStyle: "none" }
                : {}
            }
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[400px] p-2 lg:p-4 bg-gray-800 rounded-lg shadow-lg text-white"
              >
                <h6 className="">{review.name}</h6>
                <p className="text-yellow-400">{"⭐".repeat(review.rating)}</p>
                <p className=" text-gray-400">{review.time}</p>
                <p className="md:mt-2 leading-tight text-gray-300 text-wrap w-full">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
