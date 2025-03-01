"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Validation Schema
const schema = z.object({
  fullName: z.string().min(1, "First Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(
      /^\+?\d+$/,
      "Phone number must contain only numbers and an optional &#39;+&#39; at the start."
    ),
  countryCode: z.string().min(1, "Country code is required."),
  country: z.string().min(1, "Country is required."),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});
type FormValues = z.infer<typeof schema>;

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
  {
    code: "+64",
    flag: "/contactuspage/new-zealand.png",
    country: "New Zealand",
  },
  { code: "+49", flag: "/contactuspage/germany.png", country: "Germany" },
  { code: "+60", flag: "/contactuspage/malaysia.png", country: "Malaysia" },
  { code: "+33", flag: "/contactuspage/france.png", country: "France" },
  { code: "+45", flag: "/contactuspage/denmark.png", country: "Denmark" },
];

const ContactUsForm = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      countryCode: "+92",
      country: "Pakistan",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setOpen(true);
  };

  return (
    <>
      <section className="sm:w-[90%] mx-auto mt-4 md:mt-10">
        <div className="flex flex-col lg:flex-row gap-6  justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 bg-[#111111] border border-[#9D9D9D80] rounded-2xl p-4 lg:p-6 flex flex-col space-y-4">
            <p>Contact Us</p>
            <h6>
              Let&#39;s Chat,{" "}
              <span className="text-[#A6EDC8] font-semibold">
                Reach Out to Us!
              </span>
            </h6>
            <p className="md:text-sm">
              Have questions or feedback? We&#39;re here to help. Send us a
              message, and we&#39;ll respond within 24 hours.
            </p>
            <hr className="border-t border-gray-700 " />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-4">
                  {/* First Name Field */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="fullname">Full Name</Label>
                        <FormControl>
                          <Input
                            id="fullname"
                            type="text"
                            placeholder="Enter your full name"
                            className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6 placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="email">Email Address</Label>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6 placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number with Country Code */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="phonenumber">Phone Number</Label>
                        <div className="flex flex-row gap-2">
                          {/* Country Code Dropdown */}
                          <div className="flex items-center w-[40%] sm:w-[20%] lg:w-[40%] xl:w-[25%]">
                            <Select
                              value={form.watch("country") || ""}
                              onValueChange={(selectedCountry) => {
                                const countryData = countries.find(
                                  (c) => c.country === selectedCountry
                                );
                                if (countryData) {
                                  form.setValue(
                                    "countryCode",
                                    countryData.code
                                  );
                                  form.setValue("country", countryData.country);
                                  form.trigger(["countryCode", "country"]);
                                }
                              }}
                            >
                              <FormControl>
                                <SelectTrigger className="flex items-center bg-[#313131] border-none rounded-full md:py-5 lg:pl-4   ">
                                  <SelectValue>
                                    <div className="flex items-center space-x-1 md:space-x-2">
                                      <Image
                                        src={
                                          countries.find(
                                            (c) =>
                                              c.country ===
                                              form.watch("country")
                                          )?.flag || "/default-flag.png"
                                        }
                                        alt="Country Flag"
                                        width={20}
                                        height={20}
                                        className="object-cover md:w-4 md:h-4"
                                      />
                                      <p className="text-xs">
                                        {`${form.watch("countryCode")}`}
                                      </p>
                                    </div>
                                  </SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white text-black">
                                {countries.map((country) => (
                                  <SelectItem
                                    key={country.country}
                                    value={country.country}
                                  >
                                    <div className="flex items-center space-x-2">
                                      <Image
                                        src={country.flag}
                                        alt={`${country.country} Flag`}
                                        width={20}
                                        height={20}
                                        className="object-cover"
                                      />
                                      <p className="text-xs text-black">{`${country.country} (${country.code})`}</p>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Phone Number Input */}
                          <div className="w-full">
                            <Input
                              {...field}
                              type="text"
                              placeholder="Enter your phone no"
                              className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6 placeholder:text-gray-400 truncate"
                            />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                  {/* Subject Field */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="subject">Subject</Label>
                        <FormControl>
                          <Input
                            id="subject"
                            type="subject"
                            placeholder="Enter your subject"
                            className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6 placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="message">Message</Label>

                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder="Leave us a message..."
                            rows={6}
                            className="bg-[#313131] border-none rounded-2xl p-4 placeholder:text-gray-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-center gap-2 my-4">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    className="w-4 h-4"
                  />
                  <Label htmlFor="privacyPolicy" className="text-gray-400">
                    I agree to our friendly{" "}
                    <span className="text-[#A6EDC8] underline">
                      privacy policy
                    </span>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="bg-[#00A651] rounded-full w-full md:w-[35%] xl:w-[30%] py-5 hover:bg-[#58aa7e] "
                >
                  Send Message!
                </Button>
              </form>
            </Form>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="flex flex-col justify-center items-center text-center  max-w-72 md:max-w-96 !rounded-3xl border-none bg-black">
              <Image
                src="/contactuspage/success.svg"
                alt="Success"
                width={150}
                height={150}
              />
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  Message sent{" "}
                  <span className="text-[#A6EDC8] font-semibold">
                    Successfully!
                  </span>
                </DialogTitle>
              </DialogHeader>
              <p className="text-base">
                Thank you for reaching out! Our support team will get back to
                you within 2–3 business days.
              </p>
            </DialogContent>
          </Dialog>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center justify-center   flex-1">
            <div className="relative w-full h-[400px] bg-[#111111] rounded-2xl overflow-hidden flex flex-col items-center justify-center">

              {/* Google Map Embed */}
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=102+Johar+Town,+Lahore&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Floating Marker */}
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
                <p className="text-lg font-semibold">Pakpreneurship LLC</p>
                <p className="text-sm">102 Johar, Town Lahore</p>
                <p className="text-sm">Hours: Monday-Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>




            {/* Contact Info Section - Same Height as Map Section */}
            <div className="w-full flex-1 bg-[#111111] border border-[#9D9D9D80] rounded-2xl p-2 md:p-4 grid grid-cols-1 gap-3">
              {/* Email Section */}
              <div className="relative flex items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
                {/* Background Image with Opacity */}
                <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center opacity-10"></div>
                <div className="p-4 md:p-6 bg-white bg-opacity-20 rounded-lg">
                  <Image
                    src="/contactuspage/letter.svg"
                    alt="Email Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p className="text-xs md:text-base">
                    info@pakprenuership.com
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="relative flex  items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
                {/* Background Image with Opacity */}
                <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
                <div className="p-4 md:p-6 bg-white  bg-opacity-20 rounded-lg">
                  <Image
                    src="/contactuspage/Map-Point.svg"
                    alt="Phone Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p className="text-xs md:text-base">+92 328 99 11 998</p>
                </div>
              </div>

              {/* Website Section */}
              <div className="relative flex items-center gap-4  border border-[#9D9D9D80] rounded-2xl p-4 bg-[#313131] overflow-hidden">
                {/* Background Image with Opacity */}
                <div className="absolute inset-0 bg-[url('/contactuspage/image.png')] bg-cover bg-center  opacity-10"></div>
                <div className="p-4 md:p-6 bg-white bg-opacity-20 rounded-lg">
                  <Image
                    src="/contactuspage/phone.svg"
                    alt="Website Icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-xs md:text-base">
                    102 Johar, town lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsForm;
