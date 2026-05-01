import { H3 } from "@/app/components/Headers";
import DownloadIcon from "@/app/components/icons/DownloadIcon";
import { SampleQuestion } from "@/app/data/practises";
import Button from "@/app/components/Button";

export default function SampleQuestionCard({ title, difficulty, difficultyColor, description, link }: SampleQuestion) {
  return (
    <div className="bg-white border-2 border-primary shadow-lg rounded-xl p-6 flex flex-col justify-between">
      <div>
        <H3 className="text-2xl mb-2">{title}</H3>
        <span className={`inline-block px-3 py-1 text-base font-medium rounded-full ${difficultyColor}`}>
          {difficulty}
        </span>
        <p className="text-baseText text-lg mt-3">{description}</p>
      </div>
      <Button href={link} className="mt-4 flex items-center justify-center gap-2 w-full text-xl font-semibold">
        <DownloadIcon />
        Download
      </Button>
    </div>
  );
}
