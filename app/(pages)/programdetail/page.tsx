"use client";
import React, { useState } from "react";
import Hero from "./components/Hero";
import ProgramOverview from "./components/ProgramOverview";
import Image from "next/image";
import CurriculumModules from "./components/CurriculumModules";
import ExpertMentors from "./components/ExpertMentors";
import ExpertSuccessStories from "./components/ExpertSuccessStories";
import FAQ from "@/components/reusable/FAQ";
type Tab = {
  label: string;
  id: string;
  src: string;
  alt: string;
};
const Page = () => {
  // const Scholarshipdetail = () => {
  const tabs: Tab[] = [
    {
      label: "Program Overview",
      id: "Program Overview",
      src: "/programdetail/square.svg",
      alt: " Program Overview",
    },
    {
      label: "Curriculum & Modules",
      id: "Curriculum & Modules",
      src: "/programdetail/square.svg",
      alt: " Curriculum & Modules",
    },
    {
      label: "Our Success Stories",
      id: "Our Success Stories",
      src: "/programdetail/square.svg",
      alt: " Our Success Stories",
    },
    {
      label: "Mentorship Profiles",
      id: "Mentorship Profiles",
      src: "/programdetail/square.svg",
      alt: " Mentorship Profiles",
    },

    {
      label: "Frequently Asked Questions",
      id: "Frequently Asked Questions",
      src: "/programdetail/square.svg",
      alt: " Frequently Asked Questions",
    },
  ];
  const [activeTabPro, setActiveTabPro] = useState<string>(
    "Scholarship Overview"
  );
  const handleTabClick = (tab: Tab) => {
    setActiveTabPro(tab.label);
    const section = document.getElementById(tab.id);
    if (section) {
      const yOffset = -100;
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  return (
    <div>
      <Hero />
      <div className="bg-[#313131] text-white my-6 rounded-xl w-[95%] mx-auto">
        <div className=" mx-auto">
          <div className="w-full flex flex-col sm:flex-row gap-1 justify-center lg:justify-evenly items-center py-2 md:py-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`md:border-none font-medium text-left md:text-center transition px-1 text-[13px] md:py-4 py-1 rounded-lg w-full hover:bg-[#A6EDC8]         hover:text-[#00A651] ${
                  activeTabPro === tab.label
                    ? "bg-[#A6EDC8] text-[#00A651] border-[#A6EDC8] border-b-0"
                    : "text-"
                }`}
              >
                <div className="flex justify-start items-center md:justify-center gap-2 px-2 md:px-0">
                  <Image
                    src={tab.src}
                    width={300}
                    height={300}
                    alt={tab.src}
                    className="w-4 h-4"
                  />

                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <ProgramOverview />
      <CurriculumModules />
      <ExpertMentors />
      <ExpertSuccessStories />
      <div className="w-[90%] mx-auto">
        <FAQ
          title="Frequently Asked Questions:"
          items={[
            {
              question: "Why should I study in the United Kingdom?",
              answer:
                "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
            },
            {
              question:
                "What is the cost of studying in the UK for international students?",
              answer:
                "Tuition fees can range from £10,000 to £38,000 per year, depending on the course and university.",
            },
            {
              question: "What type of visa do I need to study in the UK?",
              answer:
                "You will need a Tier 4 (General) student visa for courses longer than 6 months. For shortercourses, a Short-term study visa may be required",
            },
            {
              question: "How long does it take to complete a degree in the UK",
              answer: ` 
      • Undergraduate degrees: Typically take 3–4 years.
      • Postgraduate degrees: Usually 1–2 years.
      • PhDs: Normally take 3–4 years.`,
            },
            {
              question: "What is the post-study work visa in the UK",
              answer:
                "The Graduate Route Visa allows international students to stay in the UK for up to 2 years (3years for PhD graduates) after completing their degree to work or look for employment.",
            },
            {
              question: "Is it safe to study and live in the UK?",
              answer:
                "Yes, the UK is generally safe for international students. Universities provide robust safety and security services, including campus security, emergency support, and safety apps to ensurestudent well-being.",
            },
          ]}
        />{" "}
      </div>
    </div>
  );
};
export default Page;
