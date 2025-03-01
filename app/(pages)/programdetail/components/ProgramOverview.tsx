import Image from "next/image";
import React from "react";

const ProgramOverview = () => {
  return (
    <>
      <section className="w-[95%] mx-auto">
        <Image
          src="/programdetail/programoverview.png"
          alt="Program Overview"
          width={2000}
          height={2000}
          className="w-full h-[100px] md:h-[60vh] object-cover rounded-2xl"
        />
        <div className="text-[#F1F1F1] py-5">
          <h4>
            Program <em className="text-green-600">Overview!</em>
          </h4>
          <p className="text-[#F1F1F1]">
            Applications for the Inje University 2024 Global Korea Scholarship
            are now being accepted. International students are welcome to apply
            for the 2024 Inje University GKS Scholarship. It is a South Korean
            private university located in Gimhae. The Inje University GKS
            Scholarship 2024 is offered for Research, Master&#39;s, and Doctoral
            programs. Along with the degree programs, a year of Korean language
            instruction is included.
          </p>
          <p>
            This GKS 2024 scholarship is offering programs of medicine,
            engineering, social sciences, and humanities at INJE University of
            Korea. In collaboration with the National Institute for
            International Education, this scholarship seeks to develop world
            leaders (NIIED). The scholarship guarantees a comprehensive
            educational experience in South Korea&#39;s dynamic academic
            environment, including research funding and health insurance.
          </p>
          <p>
            As of March 2024, 11,090 students are enrolled. 620 of whom are
            students from abroad. 345 employees, 937 professors, and 119
            teaching assistants. Under the GKS scholarship programs, which is
            run by the Korean government, 2,200 scholarships to study in Korean
            universities will be given to foreign students in 2024.
          </p>
        </div>
        <div className="md:flex w-full gap-10 my-5">
          <div className="md:w-1/2 space-y-3">
            <p>
              <strong>
                {" "}
                <em>Duration of the Program:</em>
              </strong>
            </p>
            <p>
              Degree: 1 Year Korean Language + Masters (2 Years), Doctoral (3
              Years)
            </p>
            <p>Research: 6 months or 1 year</p>
          </div>
          <div className="md:w-1/2 space-y-3">
            {" "}
            <p>
              <strong>
                {" "}
                <em>Key Highlights:</em>
              </strong>
            </p>
            <p>
              Experts Mentors: We have best instructors from all over Pakistan
              to help you achieve your goals.
            </p>
            <p>
              Real-World Projects: We have achieved the success in all our
              expertise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramOverview;
