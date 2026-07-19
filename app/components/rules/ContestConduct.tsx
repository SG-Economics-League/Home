import { DISCORD_LINK } from "@/app/data/links";
import { SubHeading } from "./CustomComponents";
import { SIGN_IN_OPEN, COMPETITION_START, COMPETITION_END } from "@/app/data/eventDatetimes";
import { formatTime24h } from "@/app/utils/formatDateTime";
import { track } from "@vercel/analytics";

export default function ConductOfTheContest() {
  const signInTime = formatTime24h(SIGN_IN_OPEN);
  const startTime = formatTime24h(COMPETITION_START);
  const endTime = formatTime24h(COMPETITION_END);

  return (
    <section className="mt-12">
      <SubHeading className="slab">Conduct of the Contest</SubHeading>
      <p className="mt-4">
        Participants may sign into the official <b>SEL Platform</b> at <b>{signInTime}</b> on the day of the
        contest. The contest will begin promptly at <b>{startTime}</b> and end at <b>{endTime}</b>.
      </p>
      <p className="mt-4">
        The <b>Main Problems</b> are accessible throughout the contest may each contain multiple
        question parts. Main problems have a wide spectrum of difficulties, and later problems will
        tend to be harder. Each team may work on up to <b>four</b> problems at once. Upon completing
        a problem, the team may select a new problem to attempt from a pool of other questions.
      </p>
      <p className="mt-4">
        From <b>10:00</b> to <b>11:00</b>, <b>Economania</b> problems will be available for teams to
        attempt independently and concurrently with the Main Problems. Economania problems can range
        from Easy, Medium, or Hard levels, and may contain special variants of question types (e.g.,
        unique multi-step MCQs). Regular Points and Bonus Points earned from Economania problems
        will be <b>added to the team’s overall score</b>.
      </p>
      <p className="mt-4">
        In the event of technical difficulties, disruptions, or questions about the platform,
        participants should raise a <b>Support Ticket</b> on the{" "}
        <a
          onClick={()=>track("joinDiscord")}
          href={DISCORD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-secondary font-bold hover:text-secondary"
        >
          official SEL Discord Server
        </a>{" "}
        or email us at{" "}
        <a href="mailto:contact@sgeconsleague.org" className="underline text-secondary font-bold hover:text-secondary">
          contact@sgeconsleague.org
        </a>
        . The SEL organisers shall not reply to any requests for clarifications, expansions, or
        translations of specialized economic terms or diagrams.
      </p>
    </section>
  );
}