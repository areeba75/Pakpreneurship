import React from 'react'

const HeroSection = () => {
  return (
    <div className="lg:w-[95%] mx-auto ">
    <section>
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat rounded-3xl h-[230px] lg:h-[300px] flex flex-col justify-end lg:justify-center items-center text-white before:absolute before:inset-0 before:bg-black/60"
        style={{
          backgroundImage: "url('/contactuspage/contactushero.jpeg')",
        }}
      >
        <div className="z-10 text-center py-10">
          <h1>
            Contact <span className="text-green-600">Us!</span>
          </h1>
          <div className="w-[90%]  mx-auto">
            <p>
            We’d love to hear from you – get in touch today.
            </p>
          </div>
        </div>{" "}
      </div>
    </section>
      
    </div>
  )
}

export default HeroSection
