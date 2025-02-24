import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FAQItem {
  heading: string;
  paragraph?: string; // Making it optional
  answer: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5?: string; // ✅ Making line5 optional to avoid errors
}

interface FAQProps {
  //   title: string;
  items: FAQItem[];
}

export default function ProgramDetailAccordian({ items }: FAQProps) {
  return (
    <section className="flex justify-start">
      <div className="w-full mx-auto ">
        <Accordion type="single" collapsible className="">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-gray-200 rounded-lg transition-colors text-left">
                <p>{item.heading}</p>
              </AccordionTrigger>
              <AccordionContent className=" text-gray-200 rounded-b-md">
                {item.paragraph && (
                  <p className="font-bold">{item.paragraph}</p>
                )}
                <p>{item.answer}</p>
                <div className="space-y-2 pt-4">
                  <p className="flex items-center ">
                    <Image
                      src="/icons/bullet.svg"
                      alt="bullet"
                      width={20}
                      height={20}
                      className="w-8 h-8 mr-2"
                    />
                    {item.line1}
                  </p>
                  <p className="flex items-center ">
                    <Image
                      src="/icons/bullet.svg"
                      alt="bullet"
                      width={20}
                      height={20}
                      className="w-8 h-8 mr-2"
                    />
                    {item.line2}
                  </p>
                  <p className="flex items-center ">
                    <Image
                      src="/icons/bullet.svg"
                      alt="bullet"
                      width={20}
                      height={20}
                      className="w-8 h-8 mr-2"
                    />
                    {item.line3}
                  </p>
                  <p className="flex items-center ">
                    <Image
                      src="/icons/bullet.svg"
                      alt="bullet"
                      width={20}
                      height={20}
                      className="w-8 h-8 mr-2"
                    />
                    {item.line4}
                  </p>
                  {item.line5 && (
                    <p className="flex items-center ">
                      <Image
                        src="/icons/bullet.svg"
                        alt="bullet"
                        width={20}
                        height={20}
                        className="w-8 h-8 mr-2"
                      />
                      {item.line5}
                    </p>
                  )}{" "}
                  {/* ✅ Avoids error if line5 is undefined */}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
