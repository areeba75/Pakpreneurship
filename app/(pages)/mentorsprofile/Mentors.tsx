import Image from "next/image";
import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
// import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";

const Mentorsprofilecomponent = () => {
  return (
    <>
      <section className="mt-20 w-[95%] mx-auto">
        <div className="md:flex gap-4 justify-center items-center w-full">
          <div className="md:w-[30%] w-full flex justify-center py-4">
            <Image
              src="/landing/james.svg"
              alt="james"
              width={500}
              height={500}
              className="md:w-[350px] w-[200px]"
            />
          </div>
          <div className="relative flex md:w-[70%] items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 bg-[url(&#39;/contactuspage/image.png&#39;)] bg-cover bg-center  opacity-10"></div>
            <div className=" space-y-2">
              <p>About Me!</p>

              <div className="md:flex justify-between items-end w-full">
                <h6>James Wilson</h6>
                <p className="text-green-600 text-right md:w-2/5">
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
                className="w-full h-1/2"
              />
              <div className="lg:flex justify-between items-center">
                <div className="lg:w-1/2">
                  <p className="font-medium text-[17px]">
                    Years of Experience:
                  </p>
                  <p>I have 5+ years of experience in Data Science.</p>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-2">
                  <p className="font-medium text-[16px]">My Skills:</p>
                  <div className="flex gap-2">
                    <button className="bg-[#FFFFFF29] rounded-full py-1 px-2">
                      AI
                    </button>
                    <button className="bg-[#FFFFFF29] rounded-full p-1 px-2">
                      Data Science
                    </button>
                    <button className="bg-[#FFFFFF29] rounded-full p-1 px-2">
                      Machine Learning
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-[16px]">Social Manager:</p>
                <div className="flex justify-start items-end gap-3 mt-3">
                  <CiFacebook className="text-xl md:text-2xl text-white" />

                  <SlSocialInstagram className="text-lg md:text-xl text-white" />

                  <SlSocialLinkedin className="text-lg md:text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="relative mt-5 border border-[#9D9D9D80] rounded-2xl bg-[#313131] overflow-hidden">
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 bg-[url(&#39;/contactuspage/image.png&#39;)] bg-cover bg-center  opacity-10"></div>{" "}
            <p className="mx-4 my-2">My Portfolio</p>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center m-4">
              <div className="flex items-center justify-center w-full h-[120px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[120px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[120px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[100px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[100px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[100px] border border-gray-600">
                <Image
                  src="/landing/asana.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[100px] border border-gray-600x">
                <Image
                  src="/landing/flutterwave.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[100px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-[100px] border border-gray-600">
                <Image
                  src="/landing/moneyafrica.svg"
                  alt="james"
                  width={500}
                  height={500}
                  className="lg:w-[200px] md:w-[150px] w-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentorsprofilecomponent; 
