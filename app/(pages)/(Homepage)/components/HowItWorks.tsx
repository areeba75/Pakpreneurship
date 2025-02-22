import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section className="md:py-16 pt-10 w-[90%] mx-auto">
        <div className="lg:w-3/5 text-center mx-auto">
          <div>
            <h3 className="md:pb-4 pb-2">
              How it <em className="text-green-700">Works</em>
            </h3>
            <p>
              From idea to impact{" "}
              <strong className="tracking-wider">
                <em>
                  {" "}
                  <span className="text-green-700 font-bold">PAK</span>
                  PRENEURSHIP
                </em>
              </strong>{" "}
              guides you step-by-step with mentorship, resources, and support to
              turn your vision into a thriving business.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-1 md:gap-10 h-[700px] md:h-[250px] my-5 md:my-10">
          <div className="text-left flex flex-col gap-2">
            <Image
              src="/icons/application.svg"
              alt="application"
              width={100}
              height={100}
              className="w-8"
            />
            <div>
              <p className="font-semibold">Ideation & Application:</p>
              <p className="text-[12px] md:text-sm pt-1">
                Share your business idea and apply to join our programs, where
                innovative concepts are welcomed and evaluated.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <Image
              src="/icons/computer.svg"
              alt="application"
              width={100}
              height={100}
              className="w-8"
            />
            <div>
              <p className="font-semibold">Mentorship & Training:</p>
              <p className="text-[12px] md:text-sm pt-1">
                Gain access to expert mentors, workshops, and training sessions
                to refine your skills and develop a solid business plan.
              </p>
            </div>
          </div>
          <div className="text-left flex flex-col gap-2">
            <Image
              src="/icons/education.svg"
              alt="education"
              width={100}
              height={100}
              className="w-8"
            />
            <div>
              <p className="font-semibold">Incubation & Resources:</p>
              <p className=" text-[12px] md:text-sm pt-1">
                Utilize our workspace, tools, and resources to build, prototype,
                and launch your startup with hands-on support.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <Image
              src="/icons/networking.svg"
              alt="networking"
              width={100}
              height={100}
              className="w-8"
            />
            <div>
              <p className="font-semibold">Growth & Networking:</p>
              <p className="text-[12px] md:text-sm pt-1">
                Connect with investors, pitch your ideas, and expand your
                network to scale your business and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
