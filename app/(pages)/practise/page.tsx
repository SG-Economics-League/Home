import React from "react";
import Link from "next/link";
import { H1, H2, H3 } from "@/app/components/Headers";

export const metadata = {
  title: "Practise | Singapore Economics League",
};

const sampleQuestions = [
  {
    title: "Economic Crisis on Arrakis",
    difficulty: "Easy",
    difficultyColor: "bg-[#D4F5E2] text-[#2E7D32]",
    description:
      "We learn macroeconomics to analyse our world. Do these macroeconomic forces still apply in the world of DUNE?",
    link: "/sample-questions/[Sample]-Easy.pdf",
  },
  {
    title: "Competition Sign-Ups",
    difficulty: "Medium",
    difficultyColor: "bg-[#FFF3C4] text-[#FF9800]",
    description:
      "Do you have entrepreneurial spirit? Its not just firms — high school students can be profit hungry too.",
    link: "/sample-questions/[Sample]-Moderate.pdf",
  },
  {
    title: "The AI Dilemma",
    difficulty: "Hard",
    difficultyColor: "bg-[#FFEBEE] text-[#D32F2F]",
    description:
      "AI poses both existential risk and untapped opportunity. How can humanity balance these factors?",
    link: "/sample-questions/[Sample]-Hard.pdf",
  },
];

const pastYearPapers = [
  {
    year: "2025",
    questions: "https://www.dropbox.com/scl/fi/cymwur1t7gjxklzzapc3v/SELanswers.pdf?rlkey=ycu1ul9xs5t6dww13h8jfsvse&st=6akznf1h&dl=0",
    answers: "https://www.dropbox.com/scl/fi/cymwur1t7gjxklzzapc3v/SELanswers.pdf?rlkey=ycu1ul9xs5t6dww13h8jfsvse&st=6akznf1h&dl=0",
  },
];

export default function PractisePage() {
  return (
    <div className="w-full text-baseText">
      <div className="max-w-screen-lg mx-auto px-4 md:px-0">

        {/* Header */}
        <H1>
          Practise 
        </H1>
        <p className="text-gray-700 text-lg mb-2">
          Wonder what types of questions SEL tests?
          <br /> Check out these curated examples, then review past year papers!
        </p>
        <Link
          href="/syllabus"
          className="inline-block px-6 py-3 bg-white text-secondary font-semibold border-2 rounded-xl border-b-4 border-secondary transition-all duration-200 hover:scale-105 mt-4 text-center no-underline"
        >
          View the Syllabus
        </Link>

        {/* Sample Questions */}
        <H2 className="text-2xl sm:text-3xl mt-12 mb-6">
          Sample{"\ "}
          <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
            Questions
          </span>
        </H2>
        <div className="flex flex-col gap-6">
          {sampleQuestions.map((question, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary shadow-lg rounded-xl p-6"
            >
              <H3 className="text-2xl mb-2">
                {question.title}
              </H3>
              <span
                className={`inline-block px-3 py-1 text-base font-medium rounded-full ${question.difficultyColor}`}
              >
                {question.difficulty}
              </span>
              <p className="text-baseText text-lg mt-3">{question.description}</p>
              <a
                href={question.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full text-secondary font-semibold text-xl rounded-xl px-4 py-2 border-2 border-b-4 border-secondary transition-all duration-200 hover:scale-105 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-secondary"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
                Download
              </a>
            </div>
          ))}
        </div>

        {/* Past Year Papers */}
        <H2 className="text-2xl sm:text-3xl mt-16 mb-6">
          Past Year{"\ "}
          <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
            Papers
          </span>
        </H2>
        <div className="flex flex-col gap-4">
          {pastYearPapers.map((paper) => (
            <div
              key={paper.year}
              className="bg-white border-2 border-primary shadow-lg rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <p className="text-2xl font-bold text-baseText slab">SEL {paper.year}</p>
              <div className="flex gap-3">
                <a
                  href={paper.questions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border-2 border-b-4 border-secondary text-secondary font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  Questions
                </a>
                <a
                  href={paper.answers}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-secondary text-white font-semibold rounded-xl border-2 border-b-4 border-[#3a5fa0] transition-all duration-200 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  Solutions
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


