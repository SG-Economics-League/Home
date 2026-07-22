import Image from "next/image";
import { H2L } from "../Headers";
import Button from "../Button";

export default function PractisePeriodSection() {
  return <section className="w-full bg-[#fbfafb] py-4 md:py-16">
    <div className="max-w-screen-lg mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-stretch md:gap-20 gap-8">
        <div className="h-full w-full relative hidden md:block">
          <Image
            src="/graphics/competitionWebsite.png"
            alt="Website Design"
            fill={true}
            className="bg-[#f3f5fa] mx-auto h-full w-full object-contain shadow-xl rounded-lg overflow-hidden border border-gray-200"
          />
        </div>
        <div>
          <H2L className="text-4xl sm:text-5xl text-left mb-4">
            Practise{" "}
            <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
              Period
            </span>
          </H2L>
          <p className="text-gray-700 text-lg">
            Wonder what the competition will feel like?
            <br /> Our revamped competition website will be available <b>a week</b> before the competition starts, giving you and your team time to practise and get a feel for how the experience unfolds.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button
              variant="secondary"

              className="mx-auto md:mx-0 opacity-50"
            >
              Visit the website soon &rarr;
            </Button>
          </div>
          



        </div>
        <div className="h-full w-full relative block md:hidden">
            <Image
              src="/graphics/competitionWebsite.png"
              alt="Website Design"
              fill={true}
              className="bg-[#f3f5fa] block md:hidden mx-auto h-full w-full object-contain shadow-xl rounded-lg overflow-hidden border border-gray-200"
            />
          </div>
      </div>
    </div>
  </section>
}