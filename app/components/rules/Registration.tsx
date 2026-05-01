import { SubHeading, UnorderedList } from "./CustomComponents";

function Registration() {
  return (
    <section className="mt-12">
      <SubHeading className="slab mb-4">Registration</SubHeading>
      <UnorderedList
        items={[
          "Participants must register in the competition in order to participate.",
          "Registration is open at sgeconsleague.org from <b>1 May</b> to <b>4 July 2025</b>.",
          "Each team must comprise <b>3 to 5 members</b>.",
          "For the school category, all team members must be pre-university students: i.e. studying in high school/equivalent or below (JCs/MI, Secondary Schools, Polytechnics, international high schools, etc.).",
          "Each contestant must be a member of only <b>one team</b>.",
          "Team names <b>cannot be offensive</b>. The SEL Organisers reserve the right to alter the name or disqualify any team whose name is deemed offensive.",
          "By participating in SEL, all participants agree to follow the rules of Singapore Economics League, as well as the Participant Code of Conduct.",
        ]}
      />
    </section>
  );
}

export default Registration;