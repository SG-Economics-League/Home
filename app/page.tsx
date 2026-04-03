"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Animation from "./components/AnimatedBackground";
import Link from "next/link";
import GradientText from "./components/GradientText";
import RegistrationCloseSection from "./components/home/RegistrationCloseSection";
import OrganisingCommitteeSection from "./components/home/OrganisingCommitteeSection";
import SocialSection from "./components/home/SocialSection";


function PreviewCard({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`w-3/5 aspect-[2/3] absolute inset-0 shadow-xl rounded-lg overflow-hidden border border-gray-200 ${className ?? ""}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function HomePage() {
  
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);



  
  return (
    <>
      <section
        className="
          relative
          py-8
          px-4
          sm:py-16 sm:px-6
          lg:py-24 lg:px-32
          text-background
          overflow-hidden
        "
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#3864bc] to-[#3864bc] via-[#4f82e8]">
          <Animation />
        </div>
        <div className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col items-start">
          <div
            className="
              inline-block
              bg-background
              text-secondary
              rounded-md
              px-4 py-3
              shadow-sm
              mb-4
            "
          >
           <p className="font-semibold text-baseText sm:text-lg leading-tight text-left">
            Sat · 26 July 2025 · 09:00 AM — 01:00 PM SGT
          </p>
          </div>
          <h1
            className="
              text-[3rem]
              sm:text-[4rem]
              lg:text-[5rem]
              font-medium
              text-left
              mb-4
              mt-4
              slab
              leading-tight
            "
            style={{
              textShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)',
            }}
          >
            Singapore <br />
            Economics League
          </h1>
          <p className="max-w-3xl text-xl text-left text-background font-medium">
            A team based competition for problem solving in economics.
            <br />
            Battle your fellow students for the crown!
          </p>
        </div>
      </section>

      {hasMounted && <RegistrationCloseSection />}

      <section className="w-full py-8 sm:py-16 lg:py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-0 flex flex-col gap-12 sm:gap-24">
          <div className="flex flex-col sm:flex-row items-center justify-start">
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
                  <h3 className="text-2xl font-bold text-baseText slab">
                    No Boundaries, No Limits
                  </h3>
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
                <h3 className="text-2xl sm:text-3xl font-bold text-baseText slab">
                  No Boundaries, No Limits
                </h3>
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
          <div>
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
                  <h3 className="text-2xl font-bold text-baseText slab">Calling all Pre-U Students!</h3>
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-baseText slab">
                    Calling all Pre-U Students!
                  </h3>
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
          <div>
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
                  <h3 className="text-2xl font-bold text-baseText slab">Build Your Dream Team</h3>
                  <p className="text-baseText mt-2 text-lg">
                    From classmates to friends in other schools, assemble the team of your choice to win it all!
                  </p>
                  <a
                    href="https://tally.so/r/3NRLlG"
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-baseText slab">Build Your Dream Team</h3>
                  <p className="text-baseText mt-2 sm:mt-4 text-lg sm:text-xl">
                    From classmates to friends in other schools, assemble the team of your choice to win it all!
                  </p>
                  <a
                    href="https://tally.so/r/3NRLlG"
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
        </div>
      </section>
{/* 
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white rounded-lg shadow-lg w-[90%] max-w-2xl transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-95"
            }`}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x text-baseText hover:text-gray-900 transition"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <iframe
              data-tally-src="https://tally.so/r/3NRLlG?transparentBackground=1"
              width="100%"
              height="500px"
              title="SG Econs League: Registration"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )} */}

      <section className="w-full bg-[#fbfafb] py-16 mt-16">
        <div className="max-w-screen-lg mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2 items-stretch gap-12">
            <div >
              <Image
                src="/graphics/studying.png"
                alt="Syllabus Illustration"
                width={480}
                height={480}
                className="block md:hidden mx-auto mb-6 h-auto"
              />

              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 slab">
                Sample{" "}
                <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-gray-700 text-lg">
                Wonder what types of questions SEL tests?
                <br /> Check out these curated examples!
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/sample-questions"
                  className="inline-block px-6 py-3 bg-secondary text-white font-semibold border-2 rounded-xl border-b-4 border-[#3a5fa0] transition-all duration-200 hover:scale-105 text-center no-underline">
                  View Sample Questions &rarr;
                </Link>
                <Link
                  href="/syllabus"
                  className="inline-block px-6 py-3 bg-white text-secondary font-semibold border-2 rounded-xl border-b-4 border-secondary transition-all duration-200 hover:scale-105 text-center no-underline">
                  View the Syllabus
                </Link>
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
              <PreviewCard src="/sample-questions/preview-1.png" alt="Sample question 1" className="top-[5%] left-[5%] rotate-[2deg]" />
              <PreviewCard src="/sample-questions/preview-2.png" alt="Sample question 2" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[10deg]" />
              <PreviewCard src="/sample-questions/preview-3.png" alt="Sample question 3" className="top-full left-full -translate-x-full -translate-y-full rotate-[18deg]" />
            </div>
          </div>
        </div>
      </section>

      <OrganisingCommitteeSection />

      <SocialSection />

    </>
  );
}
