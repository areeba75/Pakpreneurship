"use client";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="fixed left-5 md:left-10 lg:left-16 top-2  w-[90%] rounded-2xl  shadow-md px-4 md:px-8 py-4 bg-white/10 backdrop-blur-3xl flex items-center justify-between z-20">
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

      <div className="hidden lg:flex gap-8">
        <ul className="flex space-x-2 xl:space-x-6 text-white">
          <Link href="/">
            <li className=" hover:text-green-500  hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
              Home
            </li>
          </Link>
          <Link href="/exploreprograms">
            <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
              {" "}
              Programs
            </li>{" "}
          </Link>
          <Link href="/mentorsflow">
            <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
              {" "}
              Mentors
            </li>
          </Link>
          <Link href="/howitworks">
            <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
              {" "}
              How it Works
            </li>
          </Link>
          <Link href="/aboutus">
            <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
              {" "}
              About Us
            </li>
          </Link>
          <Link href="/contactus">
            <li className=" hover:text-green-500 hover:after:content-[''] hover:after:block hover:after:w-10 hover:after:h-[1px] hover:after:bg-green-500 hover:after:mt-0">
              {" "}
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      {/* "Join Us" Button */}
      <button className="bg-green-800 hidden lg:block text-white px-5 py-2 rounded-full">
        Join Us
      </button>

     
      <div className="lg:hidden block">
        <div className="relative flex items-center space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm rounded-full "
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <Image src="/icons/navicon.svg" alt="nav" width={20} height={20} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              id="user-dropdown"
              className="absolute right-1 top-10 z-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
           
              <ul className="py-2 w-[150px]">
                <li>
                  <Link
                    href="/"
                    className="block px-4 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="exploreprograms"
                    className="block px-4 py-1 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="mentorsflow"
                    className="block px-4 py-1 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b"
                  >
                    Mentors{" "}
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="howitworks"
                    className="block px-4 py-1  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b"
                  >
                    How it Works{" "}
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="aboutus"
                    className="block px-4 py-1  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b"
                  >
                    About us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="contactus"
                    className="block px-4 py-1  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Contact Us{" "}
                  </Link>
                </li>
              
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
