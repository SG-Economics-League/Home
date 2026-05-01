import { H2 } from "@/app/components/Headers";
import { sampleQuestions } from "@/app/data/practises";
import SampleQuestionCard from "./SampleQuestionCard";

export default function SampleQuestionsSection() {
  return (
    <>
      <H2 className="mb-2 mt-8 text-left text-black">
        Sample{" "}
        <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
          Questions
        </span>
      </H2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {sampleQuestions.map((question, index) => (
          <SampleQuestionCard key={index} {...question} />
        ))}
      </div>
    </>
  );
}
