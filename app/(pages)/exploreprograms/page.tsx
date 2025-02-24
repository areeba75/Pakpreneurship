"use client";
import React from "react";
// import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { MdOutlineSortByAlpha } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
// import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
// import { FileSearch } from "lucide-react";

const Page = () => {
  // const courseArr = [
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "USA",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Fully Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "Master",
  //     dateIcon: "/clock.svg",
  //     Date: "March 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "USA",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Partial Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "bachelors",
  //     dateIcon: "/clock.svg",
  //     Date: "March 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "New Zealand",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Partial Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "bachelors",
  //     dateIcon: "/clock.svg",
  //     Date: "Jan 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "UK",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Partial Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "bachelors",
  //     dateIcon: "/clock.svg",
  //     Date: "Jan 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "Denmark",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Fully Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "Master",
  //     dateIcon: "/clock.svg",
  //     Date: "Jan 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "China",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Fully Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "PhD",
  //     dateIcon: "/clock.svg",
  //     Date: "Feb 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "China",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Partial Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "PhD",
  //     dateIcon: "/clock.svg",
  //     Date: "Feb 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "China",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Fully Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "bachelors",
  //     dateIcon: "/clock.svg",
  //     Date: "Feb 2025",
  //   },
  //   {
  //     UniImg: "/course1.svg",
  //     title: "KAIST University Scholarship",
  //     UniName: "Korea Advanced Institute of Science & Technology (KAIST)",
  //     locationIcon: "/location.svg",
  //     country: "France",
  //     scholarshipIcon: "/money.svg",
  //     scholarship: "Fully Funded",
  //     studyIcon: "/Notebook.svg",
  //     studyLevel: "bachelors",
  //     dateIcon: "/clock.svg",
  //     Date: "Feb 2025",
  //   },
  // ];
  const featuredarray = [
    {
      img: "/landing/incubation.JFIF",
      caption: "Startup Incubation Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/enterpreneurship.JFIF",
      caption: "Entrepreneurship Bootcamp!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/evaluate.JFIF",
      caption: "Ideate, Innovate, Elevate!!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/women.JFIF",
      caption: "Womenpreneur Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/incubation.JFIF",
      caption: "Startup Incubation Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/enterpreneurship.JFIF",
      caption: "Entrepreneurship Bootcamp!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/evaluate.JFIF",
      caption: "Ideate, Innovate, Elevate!!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/women.JFIF",
      caption: "Womenpreneur Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/incubation.JFIF",
      caption: "Startup Incubation Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/enterpreneurship.JFIF",
      caption: "Entrepreneurship Bootcamp!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/evaluate.JFIF",
      caption: "Ideate, Innovate, Elevate!!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/women.JFIF",
      caption: "Womenpreneur Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/incubation.JFIF",
      caption: "Startup Incubation Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/enterpreneurship.JFIF",
      caption: "Entrepreneurship Bootcamp!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/evaluate.JFIF",
      caption: "Ideate, Innovate, Elevate!!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/women.JFIF",
      caption: "Womenpreneur Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/incubation.JFIF",
      caption: "Startup Incubation Program!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/enterpreneurship.JFIF",
      caption: "Entrepreneurship Bootcamp!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/evaluate.JFIF",
      caption: "Ideate, Innovate, Elevate!!",
      arrow: "/icons/arrow.svg",
    },
    {
      img: "/landing/women.JFIF",
      caption: "Womenpreneur Program!",
      arrow: "/icons/arrow.svg",
    },
  ];
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [selectedInfo, setSelectedInfo] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const handleInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedInfo((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // let filterCountry = courseArr.filter((course) => {
  //   if (selectedValues.length === 0) {
  //     return course;
  //   }
  //   return selectedValues.includes(course.country.toLowerCase());
  // });

  // filterCountry = filterCountry.filter((course) => {
  //   if (!selectedInfo.length) return true;

  //   const normalizedValues = [
  //     course.studyLevel?.toLowerCase().trim(),
  //     course.scholarship?.toLowerCase().trim(),
  //     course.Date?.toLowerCase().trim(),
  //   ];

  //   return selectedInfo.some((info) =>
  //     normalizedValues.includes(info.toLowerCase().trim())
  //   );
  // });
  // filterCountry = filterCountry.filter((course) => {
  //   return course.scholarship.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <>
      <div className="lg:w-[95%] mx-auto ">
        <section>
          <div
            className="relative w-full bg-cover bg-center bg-no-repeat rounded-3xl h-[230px] lg:h-[300px] flex flex-col justify-end lg:justify-center items-center text-white before:absolute before:inset-0 before:bg-black/60"
            style={{
              backgroundImage: "url('/exploreprograms/bg-explore.png')",
            }}
          >
            <div className="z-10 text-center py-10">
              <h1>
                Explore Our <span className="text-green-600">Programs!</span>
              </h1>
              <div className="w-[90%]  mx-auto">
                <p>
                  Find the right program to kickstart your practical journey.
                </p>
              </div>
            </div>{" "}
          </div>
        </section>
        <Sheet>
          <SheetTrigger>
            <Button
              variant={"ghost"}
              size={"sm"}
              className="md:hidden my-3 mx-1  bg-black border-2 border-gray-200"
            >
              {/* <Menu /> */}
              <div className="flex items-center w-[100px] justify-between ">
                <div className="flex gap-2">
                  <Image
                    src="/icons/filter.svg"
                    width={12}
                    height={12}
                    alt="favourite"
                    className=" "
                  />
                  <p className="font-bold text-white">Filters</p>
                </div>
                <IoIosArrowDropright />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0">
            <div className="px-2 py-5 bg-[#313131] text-[#F1F1F1] ">
              <section className=" bg-[#313131] text-[#F1F1F1]">
                {/* <div className="flex bg-[#313131]  mb-2 w-[60%] px-2 rounded-full">
                  <input
                    placeholder="Search Scholarships..."
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none bg-[#313131] text-white outline-none focus:ring-0 placeholder:text-[12px] py-2 rounded-full"
                  />
                  <Image
                    src="/icons/search.svg"
                    width={16}
                    height={16}
                    alt="favourite"
                    className="2xl:w-[40px] 2xl:h-[40px] bg-[#313131]"
                  />
                </div> */}
                <div className="bg-[#313131] p-2 rounded-xl">
                  <label className="flex items-center gap-2 bg-black p-2 rounded-xl">
                    {/* <FileSearch className="text-white text-lg" /> */}
                    <Image
                      src="/icons/search.svg"
                      width={20}
                      height={20}
                      alt="search"
                    />
                    <input
                      type="text"
                      placeholder="Search Programs"
                      className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                    />
                  </label>
                </div>
                <hr className="mx-4" />

                <ScrollArea className="p-4 h-[500px] md:h-full overflow-auto bg-[#313131] text-[#F1F1F1]">
                  <h6 className="font-bold">Category:</h6>
                  <ul className="py-4 space-y-4 md:space-y-6">
                    {[
                      { name: "Startup Launchpad", label: "Startup Launchpad" },
                      {
                        name: "Innovation Accelerator",
                        label: "Innovation Accelerator",
                      },
                      {
                        name: "Entrepreneur Bootcamp",
                        label: "Entrepreneur Bootcamp",
                      },
                      {
                        name: "Womenpreneur Initiative",
                        label: "Womenpreneur Initiative",
                      },
                      {
                        name: "Tech Ventures Program",
                        label: "Tech Ventures Program",
                      },
                      {
                        name: "Creative Ideation Lab",
                        label: "Creative Ideation Lab",
                      },
                      {
                        name: "Social Impact Hub",
                        label: "Social Impact Hub",
                      },
                      {
                        name: "dePitch Perfect Academynmark",
                        label: "Pitch Perfect Academy",
                      },
                      {
                        name: "Business Growth Studio",
                        label: "Business Growth Studio",
                      },
                      {
                        name: "Young Innovators Program",
                        label: "Young Innovators Program",
                      },
                    ].map((country) => (
                      <li
                        key={country.name}
                        className="flex justify-between items-center"
                      >
                        <div className="flex gap-2 items-center">
                          <label htmlFor={country.name} className="">
                            {country.label}
                          </label>
                        </div>
                        <input
                          type="checkbox"
                          name={country.name}
                          value={country.name}
                          onChange={handleCheckboxChange}
                          className="w-3 h-3"
                        />
                      </li>
                    ))}
                  </ul>
                  <h6>Level:</h6>
                  <ul className="py-4 space-y-4 md:space-y-6">
                    {["Beginner", "Intermediate", "Advance"].map((program) => (
                      <li
                        key={program}
                        className="flex justify-between items-center"
                      >
                        <label htmlFor={program.toLowerCase()} className="">
                          {program}
                        </label>
                        <input
                          type="checkbox"
                          name={program.toLowerCase()}
                          value={program.toLowerCase()}
                          onChange={handleInfoChange}
                          className="w-3 h-3"
                        />
                      </li>
                    ))}
                  </ul>
                  <h6>Duration:</h6>
                  <ul className="py-4 space-y-4 md:space-y-6">
                    {["1 Month", "2 Month", "3 Month", "5 Month", "1 Year"].map(
                      (type) => (
                        <li
                          key={type}
                          className="flex justify-between items-center"
                        >
                          <label htmlFor={type} className="">
                            {type}
                          </label>
                          <input
                            type="checkbox"
                            name={type}
                            value={type}
                            onChange={handleInfoChange}
                            className="w-4 h-4"
                          />
                        </li>
                      )
                    )}
                  </ul>
                  {/* <p className="text-base md:text-xl">Application Deadline:</p> */}
                  {/* <ul className="py-4 space-y-4 md:space-y-6">
                {["Jan 2025", "Feb 2025", "March 2025"].map((deadline) => (
                  <li
                    key={deadline}
                    className="flex justify-between items-center"
                  >
                    <label htmlFor={deadline} className="">
                      {deadline}
                    </label>
                    <input
                      type="checkbox"
                      name={deadline}
                      value={deadline}
                      onChange={handleInfoChange}
                    />
                  </li>
                ))}
              </ul> */}
                </ScrollArea>
              </section>
            </div>
          </SheetContent>
        </Sheet>
        <div className="md:flex md:justify-around md:gap-5 ">
          <section className="hidden md:block w-[20%] md:w-[25%]">
            <div className=" rounded-3xl p-4 md:p-0 bg-[#313131]">
              <div className="hidden md:flex items-center gap-2 p-4 ">
                <Image
                  src="/icons/filter.svg"
                  width={20}
                  height={20}
                  alt="filter"
                  className=""
                />
                <h6 className="font-bold">Filters</h6>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-evenly bg-black rounded-lg px-3 w-[90%] ">
                  <Image
                    src="/icons/search.svg"
                    width={16}
                    height={16}
                    alt="search"
                  />
                  <input
                    placeholder="Search Scholarships..."
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none bg-black outline-none focus:ring-0 flex-1 p-2 placeholder:text-[12px] text-white w-[50%] rounded-lg"
                  />
                </div>
              </div>
              <hr className="mx-4 md:m-6" />
              <ScrollArea className="p-4 h-[500px] md:h-full overflow-auto">
                <h6 className="font-bold">Category:</h6>
                <ul className="py-4 space-y-4 md:space-y-6">
                  {[
                    { name: "Startup Launchpad", label: "Startup Launchpad" },
                    {
                      name: "Innovation Accelerator",
                      label: "Innovation Accelerator",
                    },
                    {
                      name: "Entrepreneur Bootcamp",
                      label: "Entrepreneur Bootcamp",
                      // img: "/canada.png",
                    },
                    {
                      name: "Womenpreneur Initiative",
                      label: "Womenpreneur Initiative",
                      // img: "/italy.png",
                    },
                    {
                      name: "Tech Ventures Program",
                      label: "Tech Ventures Program",
                      // img: "/uk.png",
                    },
                    {
                      name: "Creative Ideation Lab",
                      label: "Creative Ideation Lab",
                      // img: "/ireland.png",
                    },
                    {
                      name: "Social Impact Hub",
                      label: "Social Impact Hub",
                      // img: "/new-zealand.png",
                    },
                    {
                      name: "dePitch Perfect Academynmark",
                      label: "Pitch Perfect Academy",
                      // img: "/denmark.png",
                    },
                    {
                      name: "Business Growth Studio",
                      label: "Business Growth Studio",
                      // img: "/france.png",
                    },
                    {
                      name: "Business Growth Studio",
                      label: "Young Innovators Program",
                      // img: "/france.png",
                    },
                  ].map((country) => (
                    <li
                      key={country.name}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-2 items-center">
                        <label htmlFor={country.name} className="">
                          {country.label}
                        </label>
                      </div>
                      <input
                        type="checkbox"
                        name={country.name}
                        value={country.name}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4"
                      />
                    </li>
                  ))}
                </ul>
                <h6>Level:</h6>
                <ul className="py-4 space-y-4 md:space-y-6">
                  {["Beginner", "Intermediate", "Advance"].map((program) => (
                    <li
                      key={program}
                      className="flex justify-between items-center"
                    >
                      <label htmlFor={program.toLowerCase()} className="">
                        {program}
                      </label>
                      <input
                        type="checkbox"
                        name={program.toLowerCase()}
                        value={program.toLowerCase()}
                        onChange={handleInfoChange}
                        className="w-4 h-4"
                      />
                    </li>
                  ))}
                </ul>
                <h6>Duration:</h6>
                <ul className="py-4 space-y-4 md:space-y-6">
                  {["1 Month", "2 Month", "3 Month", "5 Month", "1 Year"].map(
                    (type) => (
                      <li
                        key={type}
                        className="flex justify-between items-center"
                      >
                        <label htmlFor={type} className="">
                          {type}
                        </label>
                        <input
                          type="checkbox"
                          name={type}
                          value={type}
                          onChange={handleInfoChange}
                          className="w-4 h-4"
                        />
                      </li>
                    )
                  )}
                </ul>
              </ScrollArea>
            </div>
          </section>
          <section className="md:w-[90%] w-full">
            {/* All University Section */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:py-2 flex flex-col ">
                <h3 className="">Explore Programs! </h3>
                <p>Showing 156 programs for startup launchpad:</p>
                {/* <p className="text-sm">Showing Scholarships in United States:</p> */}
              </div>
              <div className="flex items-center  justify-start md:justify-center gap-4 mt-4 md:mt-0">
                <button className="bg-[#313131] rounded-full  flex items-center gap-2 px-4 py-2 text-white">
                  <Image
                    src="/icons/sort.svg"
                    alt="sort"
                    width={100}
                    height={100}
                    className="w-4 h-4"
                  />
                  Sort by
                </button>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-2">
            {filterCountry.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col p-3"
              >
                <div>
                  <Image
                    src={course.UniImg}
                    alt="University Image"
                    width={400}
                    height={250}
                    className="w-full object-cover"
                  />
                </div>

                <div className="p-2 flex-grow">
                  <p className="font-bold">{course.title}</p>
                  <p className="">{course.UniName}</p>

                  <div className="flex justify-between flex-wrap">
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src={course.locationIcon}
                        alt="location"
                        width={16}
                        height={16}
                      />
                      <p className=" text-gray-600 font-bold">
                        {course.country}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src={course.scholarshipIcon}
                        alt="year"
                        width={16}
                        height={16}
                      />
                      <p className=" text-gray-600 font-bold">
                        {course.scholarship}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between flex-wrap">
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src={course.studyIcon}
                        alt="duration"
                        width={16}
                        height={16}
                      />
                      <p className=" text-gray-600 font-bold">
                        {course.studyLevel}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        src={course.dateIcon}
                        alt="fees"
                        width={16}
                        height={16}
                      />
                      <p className=" text-gray-600 font-bold">
                        {course.Date}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="mx-4 mb-4" />

                <div className="flex gap-2 flex-row justify-evenly mb-1 px-2">
                  <button className="md:w-[50%] w-[40%] border border-[#F0851D] text-[#F0851D] hover:bg-red-500 hover:text-white text-[12px]  md:text-md md:px-3 md:py-1 rounded-lg  sm:w-auto">
                    View Details
                  </button>
                  <button className=" w-[50%] border border-[#F0851D] text-[#F0851D] text-[12px] hover:bg-red-500 hover:text-white md:text-md md:px-3 py-1 rounded-lg  sm:w-auto">
                    Start Your Application
                  </button>
                </div>
              </div>
            ))}
          </div> */}
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 py-5">
              {featuredarray.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* Background Image */}
                  <Image
                    src={item.img}
                    alt={item.caption}
                    width={400}
                    height={400}
                    className="w-full h-[150px] md:h-[250px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Caption & Arrow */}
                  <div className="absolute bottom-2 left-0 md:bottom-4  flex items-center bg-white/20 backdrop-blur-md mx-1 py-1 px-2 md:px-4 md:py-3 rounded-2xl text-white">
                    <p className="text-[12px] md:text-[12px] lg:w-4/5">
                      {item.caption}
                    </p>
                    <Image
                      src={item.arrow}
                      alt="arrow"
                      width={24}
                      height={24}
                      className="ml-2 w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
                    />
                  </div>
                </div>
              ))}
            </div>{" "}
            <div className="w-24  md:w-28 mx-auto md:py-5">
              <div className="flex justify-between items-center">
                <p className="underline underline-offset-4">Show More</p>
                <Image
                  src="/icons/arrowDown.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
