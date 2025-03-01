import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section>
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat rounded-3xl h-[230px] lg:h-[300px] flex flex-col justify-end lg:justify-center items-center text-white before:absolute before:inset-0 before:bg-black/60"
          style={{
            backgroundImage: "url('/exploreprograms/bg-explore.png')",
          }}
        >
          <div className="z-10 text-center py-10">
            <h1>
              How It <span className="text-green-600">Works!</span>    
            </h1>
            <div className="w-[90%]  mx-auto">
              <p>
                A step-by-step guide to transforming your learning experience
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}

export default HeroSection
