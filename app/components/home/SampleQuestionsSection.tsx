import Image from "next/image";
import { H2L } from "../Headers";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Button from "../Button";

function PreviewCard({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={twMerge("w-3/5 aspect-[2/3] absolute inset-0 shadow-xl rounded-lg overflow-hidden border border-gray-200", className)}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function SampleQuestionsSection() {
    return <section className="w-full bg-[#fbfafb] py-16">
        <div className="max-w-screen-lg mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-stretch gap-12">
            <div>
              <Image
                src="/graphics/studying.png"
                alt="Syllabus Illustration"
                width={480}
                height={480}
                className="block md:hidden mx-auto mb-6 h-auto"
              />

              <H2L className="text-4xl sm:text-5xl text-left mb-4">
                Sample{" "}
                <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
                  Questions
                </span>
              </H2L>
              <p className="text-gray-700 text-lg">
                Wonder what types of questions SEL tests?
                <br /> Check out these curated examples!
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button
                  variant="secondary"
                  href="/practise"
                  className="mx-auto md:mx-0"
                  >
                  View Sample Questions &rarr;
                </Button>
                <Button
                  href="/syllabus"
                  className="mx-auto md:mx-0"
                >
                  View the Syllabus
                </Button>
              </div>
              

              <Image
                src="/graphics/studying.png"
                alt="Syllabus Illustration"
                width={360}
                height={360}
                className="hidden md:block mx-auto h-auto"
              />
            </div>
            <div className="h-full w-full relative">
              <PreviewCard src="/sample-questions/previews/preview1.jpg" alt="Sample question 1" className="md:top-[5%] md:left-[5%] md:rotate-[2deg] -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 left-1/2 top-1/2 rotate-[-20deg] origin-bottom-left" />
              <PreviewCard src="/sample-questions/previews/preview2.jpg" alt="Sample question 2" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:rotate-[10deg] origin-bottom-left" />
              <PreviewCard src="/sample-questions/previews/preview3.jpg" alt="Sample question 3" className="md:top-full md:left-full md:-translate-x-full md:-translate-y-full md:rotate-[18deg] -translate-x-1/2 -translate-y-1/2  left-1/2 top-1/2  rotate-[20deg] origin-bottom-left" />
            </div>
          </div>
        </div>
      </section>
}