"use client";


import { useEffect, useState } from "react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../../../../components/ui/sheet";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          {/* <Button
            variant={"ghost"}
            size={"sm"}
            className="md:hidden mt-8 mb-4 mx-4  bg-gray-100 border-2 border-gray-200"
          > */}
          {/* <Menu /> */}

          <div className="flex items-center w-[100px] bg-black justify-between">
            <div className="flex gap-2 bg-black">
              <Image
                src="/icons/filter.svg"
                width={18}
                height={18}
                alt="favourite"
                // className="2xl:w-[42px] 2xl:h-[42px]"
              />
              <p className=" font-bold">Filters </p>
            </div>
            <Image src="/right-arrow.png" alt="arrow" width={10} height={10} />
          </div>
          {/* </Button> */}
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <div className="p-4 mt-4">
            <Sidebar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
