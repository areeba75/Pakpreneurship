"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "../../../../components/ui/label";
import { Button } from "../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation Schema
const schema = z.object({
  fullName: z.string().min(1, "First Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\+?\d+$/, "Phone number must contain only numbers and an optional '+' at the start."),
  countryCode: z.string().min(1, "Country code is required."),
  country: z.string().min(1, "Country is required."),
  program: z.string().min(1, "Please select a program"),
  personalStatement: z.string().min(1, "Personal statement is required"),
  portfolioLink: z.string().url("Invalid URL").min(1, "Portfolio link is required"),
  resume: z.any().optional(),

});

type FormValues = z.infer<typeof schema>;

// Country List
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

// Program options for the new selector
const programs = [
  { value: "program1", label: "Program 1" },
  { value: "program2", label: "Program 2" },
  { value: "program3", label: "Program 3" },
];

const PersonalInfoForm = () => {
  const [open, setOpen] = useState(false);

  const [resumePreview, setResumePreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
  resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      countryCode: "+92",
      country: "Pakistan",
      program: "",
      personalStatement: "",
      portfolioLink: "",
      resume: null, // For storing file input


    },
  });

  const onSubmit = (data: FormValues) => {
  console.log(data);
    setOpen(true);
  };

  return (
    <>
      <div className="w-[90%] mx-auto bg-[#111111] border border-[#9D9D9D80] rounded-xl p-4 lg:p-6 mt-6">
        <h6 className='font-semibold mb-2'>
          Personal <span className="text-[#A6EDC8] font-semibold">Information!</span>
        </h6>
        <p>
          Your privacy and security are our top priorities. The personal information you provide helps us tailor our programs and services to best support your entrepreneurial journey.
        </p>
        <hr className="border-t border-gray-600 my-4" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name Field */}
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="fullname">Full Name</Label>
                  <FormControl>
                    <Input
                      id="fullname"
                      type="text"
                      placeholder="Enter your full name"
                      className="bg-[#313131] border-none rounded-full  md:py-5 md:pl-6 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Email Field */}
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Phone Number with Country Code */}
              <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="phonenumber">Phone Number</Label>
                  <div className="flex flex-row gap-2">

                    {/* Country Code Dropdown */}
                    <div className="flex items-center w-[63%] lg:w-[40%] xl:w-[25%]">
                      <Select
                        value={form.watch("country") || ""}
                        onValueChange={(selectedCountry) => {
                          const countryData = countries.find(c => c.country === selectedCountry);
                          if (countryData) {
                            form.setValue("countryCode", countryData.code);
                            form.setValue("country", countryData.country);
                            form.trigger(["countryCode", "country"]);
                          }
                        }}
                      >
                        <FormControl>
                          <SelectTrigger className="flex items-center bg-[#313131] border-none rounded-full md:py-5 lg:pl-6">
                            <SelectValue>
                              <div className="flex items-center space-x-1 md:space-x-2">
                                <Image
                                  src={countries.find(c => c.country === form.watch("country"))?.flag || "/default-flag.png"}
                                  alt="Country Flag"
                                  width={20}
                                  height={20}
                                  className="object-cover"
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
                            <SelectItem key={country.country} value={country.country}>
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
              )} />

              {/* Program Selector Field */}
              <FormField control={form.control} name="program" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="program">Program</Label>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6">
                        <SelectValue placeholder="Select your program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-black">
                      {programs.map((program) => (
                        <SelectItem key={program.value} value={program.value}>
                          {program.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
                          </div>

                <h6 className='font-semibold mb-2 mt-4'>
                  Additional <span className="text-[#A6EDC8] font-semibold">Information!</span>
                </h6>
                <p>
                  Enhance your application by sharing personal statements, uploading your resume, or providing portfolio links. This helps us better understand your skills, experiences, and aspirations, ensuring we can offer you the most relevant opportunities and support.
                </p>
                <hr className="border-t border-gray-600 my-4" />

<div className="grid grid-col-1 md:grid-cols-2 gap-4">
              {/* Personal Statement Field */}
              <FormField control={form.control} name="personalStatement" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="personalStatement">Personal Statement</Label>
                  <FormControl>
                    <Input
                      id="personalStatement"
                      type="text"
                      placeholder="Enter your personal statement"
                      {...field}
                      className="bg-[#313131] border-none rounded-full md:py-5 md:pl-6 placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Portfolio Link Field */}
              <FormField control={form.control} name="portfolioLink" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="portfolioLink">Portfolio Link</Label>
                  <FormControl>
                    <Input
                      id="portfolioLink"
                      type="text"
                      placeholder="Enter your portfolio link"
                      {...field}
                      className="bg-[#313131] border-none rounded-full  md:py-5 md:pl-6 placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              </div>
              <div className="grid grid-col-1 items-center md:items-start">
              {/* Upload Resume Section (Before the Submit Button) */}
              <FormField control={form.control} name="resume" render={({ field }) => (
                <FormItem className="my-4">
                  <Label htmlFor="resume" className="sr-only">Resume</Label>
                  <FormControl>
                    <div>
                      {/* Styled container wrapping the label and input */}
                      <label
                        htmlFor="resume"
                        className="flex flex-col items-center justify-center border border-[#9D9D9D80] rounded-xl py-5 md:py-16 px-6 text-center cursor-pointer hover:border-[#A6EDC8] transition-colors"
                      >
                        {/* Preview or default icon */}
                        <div className="text-[#A6EDC8] text-4xl mb-4">
                          {resumePreview ? (
                            <Image
                              src={resumePreview}
                              alt="Uploaded Resume Preview"
                              width={600}
                              height={600}
                              unoptimized
                              className="object-cover"
                            />
                          ) : (
                            <Image
                              src="/applynow/upload.svg"
                              alt="Upload Icon"
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          )}
                        </div>
                        <p className="font-semibold">Upload Resume</p>
                        <p className="text-xs text-gray-300">
                          you can upload up to 10MB PNG, JPEG, PDF
                        </p>
                      </label>
                      {/* Hidden file input */}
                      <input
                        id="resume"
                        type="file"
                        accept=".png,.jpeg,.jpg,.pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          field.onChange(file);
                          if (file && file.type.startsWith("image/")) {
                            setResumePreview(URL.createObjectURL(file));
                          } else {
                            setResumePreview(null);
                          }
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              {/* Submit Button */}
              <Button type="submit" className="bg-[#00A651] rounded-full md:w-[35%] xl:w-[18%] py-5 hover:bg-[#58aa7e]">
                Submit Application
              </Button>

              </div>

          </form>

        </Form>





      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex flex-col justify-center items-center text-center  max-w-72 md:max-w-96 !rounded-3xl border-none bg-black">
          <Image src="/contactuspage/success.svg" alt="Success" width={150} height={150} />
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Application <span className="text-[#A6EDC8] font-semibold">Submitted!</span>
            </DialogTitle>
          </DialogHeader>
          <p className="text-base">Thank you for submitting your application! Our representative will get back to you within 2–3 business days.</p>

        </DialogContent>
      </Dialog>

    </>
  );
};

export default PersonalInfoForm;
