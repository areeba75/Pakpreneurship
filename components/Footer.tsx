import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-5 px-10">
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="italic text-center tracking-wider mb-5">
          THE FUTURE OF LEARNING IS{" "}
          <span className="text-green-400">PRACTICAL!</span>
        </h2>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm border-t border-gray-600 pt-6">
          {/* Navigate Section */}
          <div>
            <h6 className=" mb-2 tracking-wider">NAVIGATE</h6>
            <ul className="flex  gap-8">
              <div className="space-y-3">
                <li className="text-sm">
                  <Link href="#">Home Page</Link>
                </li>
                <li className="text-sm">
                  <Link href="#">Mentors</Link>
                </li>
                <li className="text-sm">
                  <Link href="#">About Us</Link>
                </li>
              </div>
              <div className="space-y-3">
                <li className="text-sm">
                  <Link href="#">Programs</Link>
                </li>
                <li className="text-sm">
                  <Link href="#">How it Works</Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Follow Section */}
          <div>
            <h6 className=" mb-2 tracking-wider">FOLLOW</h6>
            <ul className="space-y-3">
              <li className="text-sm">
                <Link href="#">LinkedIn</Link>
              </li>
              <li className="text-sm">
                <Link href="#">Facebook</Link>
              </li>
              <li className="text-sm">
                <Link href="#">Instagram</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h6 className=" mb-2 tracking-wider">CONTACT</h6>
            <ul className="space-y-3 ">
              <li className="text-sm">
                <Link href="#">Contact Us</Link>
              </li>
              <li className="text-sm">
                <a href="mailto:info@pakpreneurship.com">
                  info@pakpreneurship.com
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Section */}
          <div className="">
            <p className="p1 mb-2 font-semibold tracking-wider">VISIT</p>
            <p className="md:leading-6">
              By Appointment Only, 730 Lorem Ipsum Street, PS 195426
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-[10px] md:text-sm flex flex-col md:flex-row justify-between text-left space-y-2">
          <p>2025 ALL COPYRIGHTS RIGHTS RESERVED</p>
          <div className="space-x-2 flex ">
            <Link href="#" className="hover:underline">
              <p className="text-[10px] md:text-sm ">PRIVACY POLICY</p>
            </Link>
            <span>*</span>
            <Link href="#" className="hover:underline">
              <p className="text-[10px] md:text-sm ">TERMS & CONDITIONS</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
