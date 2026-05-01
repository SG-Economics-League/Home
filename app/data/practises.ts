interface SampleQuestion {
  title: string;
  difficulty: string;
  difficultyColor: string;
  description: string;
  link: string;
}

interface PastYearPaper {
  year: string;
  questions: string;
  answers: string;
}

const sampleQuestions: SampleQuestion[] = [
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

const pastYearPapers: PastYearPaper[] = [
  {
    year: "2025",
    questions: "https://www.dropbox.com/scl/fi/cymwur1t7gjxklzzapc3v/SELanswers.pdf?rlkey=ycu1ul9xs5t6dww13h8jfsvse&st=6akznf1h&dl=0",
    answers: "https://www.dropbox.com/scl/fi/cymwur1t7gjxklzzapc3v/SELanswers.pdf?rlkey=ycu1ul9xs5t6dww13h8jfsvse&st=6akznf1h&dl=0",
  },
];

export { sampleQuestions, pastYearPapers };

export type { SampleQuestion, PastYearPaper };