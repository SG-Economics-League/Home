"use client";
import React, { useState, useEffect } from "react";
import RegistrationCloseSection from "./components/home/RegistrationCloseSection";
import OrganisingCommitteeSection from "./components/home/OrganisingCommitteeSection";
import CallToAction from "./components/home/CallToAction";
import SampleQuestionsSection from "./components/home/SampleQuestionsSection";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import CompetitionFormatSection from "./components/home/CompetitionFormat";




export default function HomePage() {
  
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return (
    <>
      <HeroSection />

      {hasMounted && <RegistrationCloseSection />}

      <AboutSection />

      <CompetitionFormatSection />

      <SampleQuestionsSection />

      <OrganisingCommitteeSection />

      <CallToAction />

    </>
  );
}
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