"use client"

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
}

export default function FAQ({ title, items }: FAQProps) {
  
  return (
    <section className="flex justify-start mt-8">
      {/* Wrapper Div */}
      <div className="w-full mx-auto ">
        <h4 className=" font-bold text-left text-white lg:my-6">{title}</h4>
        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="lg:space-y-8  lg:my-8"
        >
          {items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="">
              <AccordionTrigger className=" text-gray-200 md:py-4 md:px-2 rounded-lg  transition-colors text-left">
                <p>{item.question}</p>
              </AccordionTrigger>
              <AccordionContent className="md:px-6 p-2 text-gray-200  rounded-b-md">
                <p className="">{item.answer}</p>

                 
                   
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
