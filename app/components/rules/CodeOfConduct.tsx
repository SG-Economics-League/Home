import { SubHeading, SubHeading2, UnorderedList } from "./CustomComponents";

export default function ParticipantsCodeofConduct() {
  return (
    <section className="mt-12">
      <SubHeading className="slab">Participants&apos; Code of Conduct</SubHeading>
      <p className="mt-4">
        This Code of Conduct outlines the rules and expectations that all participants must follow
        during the competition.
      </p>
      <SubHeading2 className="mt-6">Permissible Collaboration and Resources</SubHeading2>
      <p className="mt-4">
        Participants may confer with their team members for the duration of the contest, and are
        allowed the use of open-book aids and sources of information including but not limited to:
      </p>
      <UnorderedList
        items={[
          "The internet, including websites and search engines (but excluding AI tools)",
          "Digital or printed matter (e.g., lecture notes, economics textbooks, research papers)",
          "Software, such as Microsoft Excel, Desmos, Python, MATLAB, etc.",
          "Scientific and/or Graphing Calculators",
        ]}
      />
      <p className="mt-6">
        The examples listed above do not constitute endorsement for any named item. Participants
        agree that they must access such resources in accordance with all other rules specified in
        this Code of Conduct.
      </p>
      <SubHeading2 className="mt-10">Confidentiality and Prohibited External Communication</SubHeading2>
      <p className="mt-4">
        Participants must not communicate about contest problems with anyone outside their own team.
        In addition, they should exercise due caution to safeguard their team’s communications,
        contest materials, and solutions from unauthorized access. Such measures include but are not
        limited to:
      </p>
      <UnorderedList
        items={[
          "Conducting all team discussions in private or secure channels, not in public forums",
          "Ensuring non-team members cannot overhear or intercept communications",
          "Refraining from sharing information with or collaborating with other teams",
        ]}
      />
      <SubHeading2 className="mt-10">Ban of Generative AI</SubHeading2>
      <p className="mt-4">
        For the duration of the competition, any usage of Generative Artificial Intelligence (Gen
        AI) tools is strictly prohibited. Participants must refrain from any usage of Gen AI tools,
        including but not limited to: Chatbots such as ChatGPT and Deepseek that are capable of
        generating complex, coherent, and contextually relevant answers to questions posed by the
        user.
      </p>
      <SubHeading2 className="mt-10">Maintaining Fair Play and Integrity</SubHeading2>
      <p className="mt-4">
        Each participant is expected to uphold the competition’s integrity and refrain from
        behaviors that disrupt the Singapore Economics League (SEL). Examples of disallowed actions
        include, but are not limited to:
      </p>
      <UnorderedList
        items={[
          "Libel, slander, harassment, or any kind of bullying",
          "Deliberate or accidental actions that hinder the normal running of the SEL",
          "Verbal, physical, or digital communications that malign the reputation of the SEL, the organizers, or any participant",
        ]}
      />
      <SubHeading2 className="mt-10">Legal Compliance and Responsible Usage of Digital Platforms</SubHeading2>
      <p className="mt-4">
        All participants must abide by the laws of the Republic of Singapore and use the
        competition’s platforms, software, and websites responsibly. Offenses covered under the
        Computer Misuse Act 1993 are strictly prohibited, including:
      </p>
      <UnorderedList
        items={[
          "Unauthorized access to and/or alteration of computer data",
          "Launching or aiding in Denial of Service (DoS) attacks",
          "Illegally intercepting or misusing computing services",
        ]}
      />
      <SubHeading2 className="mt-10">Enforcement and Penalties</SubHeading2>
      <p className="mt-4 mb-6">
        The SEL Organizing Team enforces a zero-tolerance policy on breaches of this Code of
        Conduct. Infractions may result in immediate disqualification or other penalties. The
        organizers reserve the right to refer serious violations to the participants’ respective
        schools for further disciplinary measures.
      </p>
    </section>
  );
}