import { H2 } from "@/app/components/Headers";
import { pastYearPapers } from "@/app/data/practises";
import DownloadIcon from "../icons/DownloadIcon";
import Button from "@/app/components/Button";

export default function PastYearPapersSection() {
  return (
    <>
      <H2 className="mb-2 mt-8 text-left text-black">
        Past Year{" "}
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
              <Button href={paper.questions} className="flex items-center gap-2">
                <DownloadIcon />
                Questions
              </Button>
              <Button href={paper.answers} variant="secondary" className="flex items-center gap-2">
                <DownloadIcon className="text-white" />
                Solutions
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
