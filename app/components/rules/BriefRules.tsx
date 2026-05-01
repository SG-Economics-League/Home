import { SubHeading } from "./CustomComponents";

function BriefRules() {
  return (
    <section>
      <SubHeading className="slab">Brief Rules</SubHeading>
      <p className="mt-4">
        <span className="font-semibold">What is it:</span> SEL is a 4-hour long, team online
        problem solving competition.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Team rules:</span> Teams comprise of 3 to 5 members.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Who can participate:</span> The school category is open
        exclusively to students in pre-university education, i.e. Junior Colleges, Secondary
        Schools, Polytechnics, ITE, international high schools or equivalent. There are no
        restrictions on who can participate in the open category.
      </p>
      <p className="mt-4">
        <span className="font-semibold">What is allowed:</span> All internet resources such as
        textbooks, and any computer programs (e.g. graphing software, IDEs) are allowed.
        Communication with individuals outside the team related to the problems is{" "}
        <u>strictly prohibited</u>. The usage of any Generative AI tools such as ChatGPT is
        also <u>strictly prohibited</u>.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Competition format:</span> Teams are awarded points for
        successfully answering problems. Correct answers unlock new, harder problems. Wrong answers
        and skipping problems lead to fewer points. The teams with the most points win!
      </p>
    </section>
  );
}

export default BriefRules;