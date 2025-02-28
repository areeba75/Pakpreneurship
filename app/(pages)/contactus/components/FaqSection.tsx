import React from "react";
import FAQ from "@/components/reusable/FAQ";

const FaqSection = () => {
  return (
    <>
    <div className='text-center md:w-[55%] mx-auto mt-10 space-y-2'>
        <h5>Frequently Asked <span className="text-[#A6EDC8] font-semibold">Questions!</span></h5>
        <p>Find answers to the most common questions about <span className="font-semibold">PAKPRENEURSHIP</span>, our programs, and how we can help you turn your entrepreneurial dreams into reality. Whether you&#39;re curious about mentorship, resources, or the application process, we&#39;ve got you covered!</p>
    </div>
     <div className="w-[90%] mx-auto">
            <FAQ
              title="Frequently Asked Questions:"
              items={[

                {
                  question: "What is PAKPRENEURSHIP?",

                  answer:
                    "PAKPRENEURSHIP is a learning and incubation center dedicated to empowering aspiring entrepreneurs by providing mentorship, resources, and training to turn innovative ideas into successful businesses."
                },
                {
                  question: "Who can join PakPreneurship Programs?",

                  answer:
                "PakPreneurship programs are open to anyone.It’s for high school students globally, teaching them to brainstorm and pitch business ideas.For early-stage entrepreneurs—think small business owners or  founders—with no strict age or degree rules, just a solid idea and commitment.Depends on what you’re after—student-focused ones might need you in school, while others just want hustle, an idea, or some skin in the game."                },
                {
                  question:
        "What kind of Support do you provide?",
                  answer:
        "PakPreneurship Incubators offer a range of support to help budding business owners turn ideas into reality and grow their ventures.Workshops: Short, focused sessions to teach specific skills—like crafting a business plan, mastering digital marketing, or pitching to investors.Incubators: These are longer-term programs that nurture startups, giving them a space to grow. You get mentorship, resources.Mentorship: A staple—connecting you with professionals who’ve launched or scaled ventures. Assigns mentors to tech founders with revenue, guiding them on growth hacks or funding.Networking Events: Programs host meetups, pitch nights, or mixers to link you with peers, investors, or industry folks."                },
                {
          question: "Can i join if i have already a startup?",
                  answer:
"Yes, you can absolutely join PakPreneurship even if you already have a startup. its not just for beginners dreaming up ideas, but also for founders like you who’ve got something going and want to level it up. Having a startup often makes you a perfect fit—especially for ones aimed at growth, scaling, or refining an existing venture."                },

                {
                  question: "How do I apply for a program?",
                  answer:
                    "Fill the form to apply : <Link>https://docs.google.com/forms/d/e/1FAIpQLScIzDapaoHGb1pzMdJOd_Fhxr9Q-gNHeESWFPviyzYK_P4sXg/viewform?usp=header</Link>"
                },
                
                
              ]}
            />{" "}
          </div>


    </>
  );
};

export default FaqSection;
