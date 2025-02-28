import React from "react";
import FAQ from "@/components/reusable/FAQ";

const FaqSection = () => {
  return (
    <>
      <div className="text-center md:w-[55%] mx-auto mt-5 md:mt-10 space-y-2">
        <h5>
          Frequently Asked{" "}
          <span className="text-[#A6EDC8] font-semibold">Questions!</span>
        </h5>
        <p>
          Find answers to the most common questions about{" "}
          <span className="font-semibold">PAKPRENEURSHIP</span>, our programs,
          and how we can help you turn your entrepreneurial dreams into reality.
          Whether you&#39;re curious about mentorship, resources, or the
          application process, we&#39;ve got you covered!
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        <FAQ
          title="Frequently Asked Questions:"
          items={[
            {
              question: "Why should I study in the United Kingdom?",
              answer:
                "The UK is home to some of the world's best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
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
    </>
  );
};

export default FaqSection;
