"use client"
import { useState } from "react";
import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const ContactUsForm = () => {
  const countries = [
    { code: "+92", flag: "/contactuspage/pakflag.png", country: "Pakistan" },
    { code: "+1", flag: "/contactuspage/usa.png", country: "USA" },
    { code: "+91", flag: "/contactuspage/india.png", country: "India" },
    { code: "+61", flag: "/contactuspage/australia.png", country: "Australia" },
    { code: "+39", flag: "/contactuspage/italy.png", country: "Italy" },
    { code: "+44", flag: "/contactuspage/uk.png", country: "United Kingdom" },
    { code: "+1", flag: "/contactuspage/canada.png", country: "Canada" },
    { code: "+86", flag: "/contactuspage/china.png", country: "China" },
    { code: "+353", flag: "/contactuspage/ireland.png", country: "Ireland" },
    { code: "+64", flag: "/contactuspage/new-zealand.png", country: "New Zealand" },
    { code: "+49", flag: "/contactuspage/germany.png", country: "Germany" },
    { code: "+60", flag: "/contactuspage/malaysia.png", country: "Malaysia" },
    { code: "+33", flag: "/contactuspage/france.png", country: "France" },
    { code: "+45", flag: "/contactuspage/denmark.png", country: "Denmark" },
  ];
  const [form, setForm] = useState({
    country: "",
    countryCode: "",
    phoneNumber: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleCountryCodeChange = (value: string) => {
    setForm({
      ...form,
      countryCode: value,
    });
  };
  return (
    <div>
      <section className="sm:w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 py-5 md:py-10 justify-center items-stretch p-2">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 bg-[#111111] border border-[#9D9D9D80] rounded-2xl p-4 lg:p-6 flex flex-col space-y-4">
            <p>Contact Us</p>
            {/* <h4>Let&#39;s Chat, Reach Out to Us!</h4> */}
            <p className="text-2xl">
              Let&#39;s Chat, <span className="text-[#A6EDC8] font-semibold">Reach Out to Us!</span>
            </p>
            <p className="mb-3 xl:mb-0 text-base">
              Have questions or feedback? We&#39;re here to help. Send us a message, and we&#39;ll respond within 24 hours.
            </p>

            <form className="space-y-4 flex flex-col">
              {/* First Name Field */}
              <div className="space-y-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="Enter your first name"
                  className="bg-[#313131] border-none rounded-full py-6 pl-6 placeholder:text-gray-400"
                />
              </div>
              {/* Email Field */}
              <div className="space-y-1">

                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#313131] border-none rounded-full py-6 pl-6 placeholder:text-gray-400"
                />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-1">

                <Label htmlFor="phonenumber">Phone Number</Label>
                <div className="flex flex-row gap-2">
                  {/* Country Code Dropdown */}
                  <div className="flex items-center w-[70%] xs:w-[50%] md:w-[25%] lg:w-[40%] xl:w-[30%]">
                    <Select onValueChange={handleCountryCodeChange}>
                      <SelectTrigger className="flex items-center bg-[#313131] border-none rounded-full py-6 pl-6">
                        <SelectValue
                          placeholder={
                            form.countryCode
                              ? `${form.countryCode} (${countries.find(c => c.code === form.countryCode)?.country || ''})`
                              : (
                                <div className="flex items-center space-x-2">
                                  <Image src={countries[0].flag} alt="Default Flag" width={20} height={20} className="object-cover" />
                                  <p className="text-x">{`${countries[0].code} `}</p>
                                </div>
                              )
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black">
                        {countries.map((country) => (
                          <SelectItem key={`${country.code}-${country.country}`} value={`${country.code}-${country.country}`}>
                            <div className="flex items-center space-x-2 ">
                              <Image src={country.flag} alt={`${country.country} Flag`} width={20} height={20} className="object-cover" />
                              <p className="text-xs text-black">{`${country.code}`}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Phone Number Input */}
                  <div className="w-full">
                    <Input
                      name="phoneNumber"
                      value={form.phoneNumber}
                      type="text"
                      placeholder="Enter phone number"
                      className="bg-[#313131] border-none rounded-full py-6 pl-6 placeholder:text-gray-400"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* Subject Field */}
              <div className="space-y-1">

                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Enter the subject"
                  className="bg-[#313131] border-none rounded-full py-6 pl-6 text-white placeholder:text-gray-400"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1">

                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Leave us a message..."
                  rows={8}
                  className="bg-[#313131] border-none rounded-2xl p-4 placeholder:text-gray-400"
                />
              </div>
              {/* Privacy Policy Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="privacyPolicy" className="w-4 h-4" />
                <Label htmlFor="privacyPolicy" className="text-gray-400">
                  I agree to our friendly <span className="text-[#A6EDC8] underline">
                    privacy policy
                  </span>

                </Label>
              </div>

              {/* Submit Button */}
              <Button className="bg-[#00A651] text-white text-base rounded-full py-6">
                Send Message!
              </Button>
            </form>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center justify-center   flex-1">
        
            <div className="relative w-full h-[400px] bg-[#111111] rounded-2xl overflow-hidden flex flex-col items-center justify-center">

              {/* Background (Dark Theme with Lines) */}
              <div className="absolute inset-0 bg-[url('/contactuspage/map-bg.svg')] bg-cover bg-center opacity-90"></div>

              {/* Custom Map Marker */}
              <div className="relative w-14 h-14 z-10">
                <Image
                  src="/contactuspage/marker.svg"
                  alt="Location Marker"
                  width={56}
                  height={56}
                  className="w-full h-full"
                  priority
                />
              </div>

              {/* Floating Address Box */}
              <div className="relative mt-2 bg-[#232323] text-white p-4 rounded-2xl shadow-md w-[90%] md:w-[55%] text-center z-10">
                <p className="text-lg">Pakpreneurship LLC</p>
                <p className="text-sm">102 Johar, town Lahore</p>
                <p className="text-sm">Hours Monday-Friday 9:00 am - 5:00 pm</p>
              </div>

            </div>



            {/* Contact Info Section - Same Height as Map Section */}
            <div className="w-full flex-1 bg-[#111111] border border-[#9D9D9D80] rounded-2xl p-2 md:p-4 grid grid-cols-1 gap-3">
              {/* Email Section */}
              <div className="relative flex items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
                {/* Background Image with Opacity */}
                <div
                  className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center opacity-10"
                ></div>
                <div className="p-4 md:p-6 bg-white bg-opacity-20 rounded-lg">
                  <Image
                    src="/contactuspage/letter.svg"
                    alt="Email Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p>Email Address</p>
                  <p className="text-xs md:text-base">info@pakprenuership.com</p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="relative flex  items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
                {/* Background Image with Opacity */}
                <div
                  className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"
                ></div>
                <div className="p-4 md:p-6 bg-white  bg-opacity-20 rounded-lg">
                  <Image
                    src="/contactuspage/Map-Point.svg"
                    alt="Phone Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p>Phone Number</p>
                  <p className="text-xs md:text-base">+92 328 99 11 998</p>
                </div>
              </div>

              {/* Website Section */}
              <div className="relative flex items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
                {/* Background Image with Opacity */}
                <div
                  className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"
                ></div>
                <div className="p-4 md:p-6 bg-white bg-opacity-20 rounded-lg">
                  <Image
                    src="/contactuspage/phone.svg"
                    alt="Website Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p>Address</p>
                  <p className="text-xs md:text-base">102 Johar, town lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ContactUsForm
