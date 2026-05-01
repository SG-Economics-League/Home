import Image from "next/image";
import GradientText from "../GradientText";
import { H3L } from "../Headers";
import { REGISTRATION_LINK } from "@/app/data/links";

function Box1() {
    return <div className="flex flex-col sm:flex-row items-center justify-start">
            <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 block sm:hidden">
              <Image
                src="/graphics/problemSolving.png"
                alt="Box 1 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4 hover:"
              />
              <div className="flex flex-row items-start gap-4">
                <GradientText 
                    from="from-[#1a1db8]" 
                    to="to-[#b8d0ff]"  
                    direction="bg-gradient-to-b" className="text-[8rem] font-bold leading-none">
                  1
                </GradientText>
                <div>
                  <H3L >
                    No Boundaries, No Limits
                  </H3L>
                  <p className="text-baseText mt-2 text-lg">
                    An online contest, accessible from anywhere. Log on from
                    the comfort of your home and put your wits to the test!
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 hidden sm:flex">
              <GradientText 
              from="from-[#1a1db8]" 
              to="to-[#b8d0ff]" 
              direction="bg-gradient-to-b"
              className="md:text-[8rem] text-[12rem] lg:text-[16rem] 
              font-bold leading-none">
                1
              </GradientText>
              <div>
                <H3L >
                  No Boundaries, No Limits
                </H3L>
                <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                  An online contest, accessible from anywhere. Log on from
                  the comfort of your home and put your wits to the test!
                </p>
              </div>
            </div>
            <Image
              src="/graphics/problemSolving.png"
              alt="Box 1 illustration"
              width={300}
              height={300}
              className="hidden sm:block w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:ml-16"
            />
          </div>
}

function Box2() {
    return <div>
            <div className="block sm:hidden border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6">
              <Image
                src="/graphics/backpack.png"
                alt="Box 2 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="flex items-start gap-4">
                <GradientText from="from-[#FFAE00]" to="to-[#F9E866]" direction="bg-gradient-to-b" className="text-[8rem] font-bold leading-none">
                  2
                </GradientText>
                <div>
                  <H3L >Calling all Pre-U Students!</H3L>
                  <p className="text-baseText mt-2 text-lg">
                    Studying in a JC/MI, local polytechnic, ITE, or secondary school? You are eligible to participate!
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-end">
              <Image
                src="/graphics/backpack.png"
                alt="Box 2 illustration"
                width={300}
                height={300}
                className="w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:mr-16"
              />
              <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-0">
                <div className="text-center sm:text-right">
                  <H3L >
                    Calling all Pre-U Students!
                  </H3L>
                  <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                    Studying in a JC/MI, local polytechnic, ITE, or
                    secondary school? You are eligible to participate!
                  </p>
                </div>
                <GradientText from="from-[#FFAE00]" to="to-[#F9E866]" direction="bg-gradient-to-b" className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold leading-none">
                  2
                </GradientText>
              </div>
            </div>
          </div>
}

function Box3() {
    return <div>
            <div className="block sm:hidden border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6">
              <Image
                src="/graphics/teamUp.png"
                alt="Box 3 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="flex items-start gap-4">
                <GradientText from="from-[#107F5C]" to="to-[#F1FEC6]" direction="bg-gradient-to-b" className="text-[8rem] font-bold leading-none">
                  3
                </GradientText>
                <div>
                  <H3L>Build Your Dream Team</H3L>
                  <p className="text-baseText mt-2 text-lg">
                    From classmates to friends in other schools, assemble the team of your choice to win it all!
                  </p>
                  <a
                    href={REGISTRATION_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4 sm:mt-6
                      inline-block
                      px-6 sm:px-8
                      py-2
                      bg-[#ffffff]
                      text-secondary
                      text-lg
                      font-medium
                      border-2
                      rounded-xl
                      border-b-4
                      border-secondary
                      transition-all
                      duration-200
                      hover:scale-105
                      transition-transform
                      duration-200
                      ease-in-out
                      hover:scale-105
                    "
                  >
                    Register Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-start">
              <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <GradientText from="from-[#107F5C]" to="to-[#F1FEC6]" direction="bg-gradient-to-b" className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold leading-none">
                  3
                </GradientText>
                <div>   
                  <H3L >Build Your Dream Team</H3L>
                  <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                    From classmates to friends in other schools, assemble the team of your choice to win it all!
                  </p>
                  <a
                    href={REGISTRATION_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4 sm:mt-6
                      inline-block
                      px-6 sm:px-8
                      py-2
                      bg-[#ffffff]
                      text-secondary
                      text-lg
                      font-medium
                      border-2
                      rounded-xl
                      border-b-4
                      border-secondary
                      transition-all
                      duration-200
                      hover:scale-105
                      transition-transform
                      duration-200
                      ease-in-out
                      hover:scale-105
                    "
                  >
                    Register Now!
                  </a>
                </div>
              </div>
              <Image
                src="/graphics/teamUp.png"
                alt="Box 3 illustration"
                width={300}
                height={300}
                className="w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:ml-16"
              />
            </div>
          </div>
}


function Box4() {
    return <div>
            <div className="block sm:hidden border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6">
              <Image
                src="/graphics/studying.png"
                alt="Box 4 illustration"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="flex items-start gap-4">
                <GradientText from="from-[#7B2FF7]" to="to-[#F9E866]" direction="bg-gradient-to-b" className="text-[8rem] font-bold leading-none">
                  4
                </GradientText>
                <div>
                  <H3L>The Grand Finals</H3L>
                  <p className="text-baseText mt-2 text-lg">
                    Top teams from the preliminaries battle it out in an exciting in-person finals — featuring live challenges, higher stakes, and the chance to claim the championship title!
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-end">
              <Image
                src="/graphics/studying.png"
                alt="Box 4 illustration"
                width={300}
                height={300}
                className="w-full sm:w-96 h-auto mt-6 sm:mt-0 sm:mr-16"
              />
              <div className="border-2 border-primary bg-white shadow-lg rounded-xl px-6 py-4 sm:px-8 sm:py-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-0">
                <div className="text-center sm:text-right">
                  <H3L>The Grand Finals</H3L>
                  <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                    A <b>brand new addition for SEL 2026</b> — top teams from the preliminaries battle it out in an exciting in-person finals!
                  </p>
                </div>
                <GradientText from="from-[#7B2FF7]" to="to-[#F9E866]" direction="bg-gradient-to-b" className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold leading-none">
                  4
                </GradientText>
              </div>
            </div>
          </div>
}

export default function AboutSection() {
    return       <section className="w-full py-8 sm:py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-0 flex flex-col gap-12 sm:gap-24">
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
        </div>
      </section>
}