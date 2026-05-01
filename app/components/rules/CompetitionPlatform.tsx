import { SubHeading, UnorderedList } from "./CustomComponents";

function CompetitionPlatform() {
  return (
    <section className="mt-12">
      <SubHeading className="slab mb-4">Competition Platform</SubHeading>
      <UnorderedList
        items={[
          "Teams participate through SEL's own online competition platform",
          "The link to the competition platform will be accessible via the SEL website.",
          "Log-in details for individual teams will be sent to them via <b>email</b> a few days before the contest date.",
          "The competition platform will feature a <b>live leaderboard</b> that ranks the points of teams in real time. During the final <b>30 minutes</b> of the contest, the live leaderboard will be hidden, for added suspense.",
        ]}
      />
    </section>
  );
}

export default CompetitionPlatform;