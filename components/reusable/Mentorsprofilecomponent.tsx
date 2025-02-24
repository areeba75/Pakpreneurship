import Image from "next/image";
import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
// import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";

const Mentorsprofilecomponent = () => {
  return (
    <>
      <section className="mt-20 w-[95%] mx-auto">
        <div className="flex gap-4  w-full">
          <div className="w-[20%] ">
            <Image
              src="/landing/james.svg"
              alt="james"
              width={500}
              height={500}
              className="w-[350px]"
            />
          </div>
          <div className="relative flex w-[80%] items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
            <div className=" space-y-4">
              <p>About Me!</p>

              <div className="flex justify-between items-end w-full">
                <h5>James Wilson</h5>
                <p className="text-green-600 text-right ">
                  Senior Artificial Intelligence Data Science Instructor
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas justo metus, gravida vitae vestibulum eu, vestibulum
                quis tellus. Praesent bibendum consequat lorem porttitor
                consequat. In vitae condimentum purus. Pellentesque vel euismod
                nibh. Etiam ornare sagittis augue, nec tincidunt ligula mattis
                eu.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas justo metus, gravida vitae vestibulum eu, vestibulum
                quis tellus. Praesent bibendum consequat lorem porttitor
                consequat.
              </p>
              <Image
                src="/line.png"
                alt="line"
                width={400}
                height={400}
                className="w-full h-1"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="p1">Years of Experience:</p>
                  <p>I have 5+ years of experience in Data Science.</p>
                </div>
                <div>
                  <p className="p1">My Skills:</p>
                  <button className="bg-[#FFFFFF29]">AI</button>
                  <button>Data Science</button>
                  <button>Machine Learning</button>
                </div>
              </div>
              <div>
                <p className="p1">Social Manager:</p>
                <div className="flex justify-center items-end gap-3 mt-3">
                  <CiFacebook className="text-xl md:text-2xl text-white" />

                  <SlSocialInstagram className="text-lg md:text-xl text-white" />

                  <SlSocialLinkedin className="text-lg md:text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentorsprofilecomponent;
