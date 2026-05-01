interface Section {
  id: string;
  subsections: string[];
}

const sectionData: Section[] = [
  { id: "Brief Rules", subsections: [] },
  { id: "Registration", subsections: [] },
  { id: "Competition Platform", subsections: [] },
  {
    id: "Contest Format and Scoring",
    subsections: [
      "Question Types",
      "Submission Attempts and Scoring",
      "Main Problems Scoring",
      "Economania",
    ],
  },
  { id: "Awards and Rankings", subsections: [] },
  { id: "Conduct of the Contest", subsections: [] },
  {
    id: "Participants' Code of Conduct",
    subsections: [
      "Permissible Collaboration and Resources",
      "Confidentiality and Prohibited External Communication",
      "Ban of Generative AI",
      "Maintaining Fair Play and Integrity",
      "Legal Compliance and Responsible Usage of Digital Platforms",
      "Enforcement and Penalties",
    ],
  },
  {
    id: "Terms and Conditions",
    subsections: [
      "Views and Opinions Disclaimer",
      "Warranty Disclaimer",
      "Fair Use",
      "Data Protection and Privacy",
      "Other Relevant Disclaimers",
      "Governing Law and Venue",
    ],
  },
];

const sectionIds = sectionData.map((s) => s.id);
const allSubsectionIds = sectionData.flatMap((s) => s.subsections);

export { sectionData, sectionIds, allSubsectionIds };
export type { Section };