import React from "react";
import { H1 } from "@/app/components/Headers";
import Button from "@/app/components/Button";
import SampleQuestionsSection from "@/app/components/practise/SampleQuestionsSection";
import PastYearPapersSection from "@/app/components/practise/PastYearPapersSection";

export const metadata = {
  title: "Practise | Singapore Economics League",
};

export default function PractisePage() {
  return (
    <div className="w-full text-baseText">
      <div className="max-w-screen-lg mx-auto px-4 md:px-0">

        {/* Header */}
        <H1>
          Practise 
        </H1>
        <Button
          href="/syllabus"
          target="_self"
          className="mx-auto md:mx-0 block mt-12"
        >
          View the Syllabus
        </Button>

        {/* Sample Questions */}
        <SampleQuestionsSection />

        {/* Past Year Papers */}
        <PastYearPapersSection />

      </div>
    </div>
  );
}


