import ProgramDetailAccordian from "@/components/reusable/ProgramDetailAccordian";
import Image from "next/image";
import React from "react";

const CurriculumModules = () => {
  return (
    <>
      <section className="w-[95%] mx-auto">
        <div className="md:flex w-full md:gap-10 items-center">
          <div className="md:w-1/2 md:block hidden">
            <Image
              src="/programdetail/side.png"
              alt="programdetail"
              width={200}
              height={200}
              className="h-[500px] w-[500px] lg:h-[700px] lg:w-[600px] rounded-3xl"
            />
          </div>

          <div className="md:w-1/2">
            <h4 className="lg:w-1/2">
              Modules and <em className="text-green-600">Curriculum</em>
            </h4>
            <ProgramDetailAccordian
              items={[
                {
                  heading: "Ideation & Validation",
                  answer:
                    "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
                  line1: " High-quality education",
                  line2: " Diverse range of courses",
                  line3: " Cultural diversity",
                  line4: " Post-study work opportunities",
                },
                {
                  heading: "Ideation & Validation",
                  answer:
                    "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
                  line1: " High-quality education",
                  line2: " Diverse range of courses",
                  line3: " Cultural diversity",
                  line4: " Post-study work opportunities",
                },
                {
                  heading: "Ideation & Validation",
                  answer:
                    "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
                  line1: " High-quality education",
                  line2: " Diverse range of courses",
                  line3: " Cultural diversity",
                  line4: " Post-study work opportunities",
                },
                {
                  heading: "Ideation & Validation",
                  answer:
                    "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
                  line1: " High-quality education",
                  line2: " Diverse range of courses",
                  line3: " Cultural diversity",
                  line4: " Post-study work opportunities",
                },
                {
                  heading: "Ideation & Validation",
                  answer:
                    "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
                  line1: " High-quality education",
                  line2: " Diverse range of courses",
                  line3: " Cultural diversity",
                  line4: " Post-study work opportunities",
                },
                {
                  heading: "Ideation & Validation",
                  answer:
                    "The UK is home to some of the world&#39;s best universities, known for their high academicstandards, innovative teaching methods, and research opportunities.",
                  line1: " High-quality education",
                  line2: " Diverse range of courses",
                  line3: " Cultural diversity",
                  line4: " Post-study work opportunities",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumModules;
