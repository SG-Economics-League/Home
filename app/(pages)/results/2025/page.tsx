import React from "react";
import { H1 } from "@/app/components/Headers";
import Button from "@/app/components/Button";
import ResultsSection from "@/app/components/results/ResultsSection";
import { pastYearPapers } from "@/app/data/practises";

export const metadata = {
    title: "2025 Results | Singapore Economics League",
};

const question2025 = pastYearPapers.find(val=>val.year=="2025")!
export default function Results2025Page() {
    return (
        <div className="w-full text-baseText">
            <div className="max-w-screen-lg mx-auto px-4 md:px-0">
                <H1>2025 Results</H1>
                <Button
                    href={question2025.questions}
                    className="mx-auto md:mx-0 block mt-12"
                >
                    Download the Paper
                </Button>
                <ResultsSection />
            </div>
        </div>
    );
}
