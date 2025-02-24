import { Ham } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="fixed left-5 md:left-10 lg:left-16 top-2  w-[90%] rounded-2xl  shadow-md px-4 md:px-8 py-4 bg-white/10 backdrop-blur-3xl flex items-center justify-between z-20">
      {/* Logo Section */}
      <div className="flex items-center gap-2 ">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h6 className="font-medium tracking-normal text-white">
          <span className="text-green-800 font-semibold tracking-normal">
            PAK
          </span>
          PRENEURSHIP
        </h6>
      </div>

      {/* Navigation for Large Screens */}
      <div className="hidden lg:flex gap-8">
        <ul className="flex space-x-2 xl:space-x-6 text-white">
          <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
            Home
          </li>
          <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
            {" "}
            Programs
          </li>
          <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
            {" "}
            Mentors
          </li>
          <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
            {" "}
            How it Works
          </li>
          <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
            {" "}
            About Us
          </li>
          <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
            {" "}
            Contact Us
          </li>
        </ul>
      </div>

      {/* "Join Us" Button */}
      <button className="bg-green-800 hidden lg:block text-white px-5 py-2 rounded-full">
        Join Us
      </button>

      {/* Dropdown for Mobile View */}
      <div className="lg:hidden block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            {/* <Ham className="text-white" /> */}
            <Image src="/icons/navicon.svg" alt="nav" width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Home</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="border-b border-gray-200 last:border-b-0">
              Programs
            </DropdownMenuItem>
            <DropdownMenuItem className="border-b border-gray-200 last:border-b-0">
              Mentors
            </DropdownMenuItem>
            <DropdownMenuItem className="border-b border-gray-200 last:border-b-0">
              How it Works
            </DropdownMenuItem>
            <DropdownMenuItem className="border-b border-gray-200 last:border-b-0">
              About Us
            </DropdownMenuItem>
            <DropdownMenuItem className="border-b border-gray-200 last:border-b-0">
              Contact Us
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <button className="bg-green-800 text-white px-5 py-2 rounded-full">
                Join Us
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
