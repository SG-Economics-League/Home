import { SubHeading, SubHeading2 } from "./CustomComponents";

export default function ContestFormatAndScoring() {
  return (
    <section className="mt-12">
      <SubHeading className="slab">Contest Format and Scoring</SubHeading>
      <p className="mt-4">
        The contest includes a variety of question formats to test your versatility. Below is an
        overview of the different question formats you may encounter.
      </p>
      <SubHeading2 className="mt-10">Question Types</SubHeading2>
      <p className="mt-4">
        The contest includes a variety of question formats to test your versatility. Below is an
        overview of the most common formats.
      </p>
      <div className="mt-6 space-y-6">
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">1. Multiple Choice (MCQ)</h4>
          <p className="text-lg text-baseText mt-1">
            Choose <b>1</b> answer out of <b>4</b> options (A, B, C, D).
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">2. MCQ Multi-select</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>Choose N answers out of M options, where N ≤ M.</li>
            <li>No marks are awarded for partially correct answers.</li>
          </ul>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">3. Integer</h4>
          <p className="text-lg text-baseText mt-1">
            Enter an integer from <b>-99999</b> to <b>99999</b>.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">4. Integer Set</h4>
          <p className="text-lg text-baseText mt-1">
            Individually input a set of N integers.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">5. Float</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>
              Enter numeric values (with decimals) from <b>-99999.99999</b> to <b>99999.99999</b>.
            </li>
            <li>
              Answers with extra decimal precision are accepted if they remain within the specified
              tolerance.
            </li>
          </ul>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">6. Sort</h4>
          <p className="text-lg text-baseText mt-1">
            Sort N different values into the correct sequence.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">7. True/False Set</h4>
          <p className="text-lg text-baseText mt-1">
            Give your answer to N True/False questions.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">8. String</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>Input a string of up to 30 characters in length.</li>
            <li>An exact match is required. Extra characters or spaces result in an incorrect answer.</li>
          </ul>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">9. String Set</h4>
          <p className="text-lg text-baseText mt-1">
            Input a set of N strings. Each string must be an exact match with the answer key.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4 py-2">
          <h4 className="font-semibold text-baseText">10. Table</h4>
          <ul className="list-disc ml-6 text-lg mt-1 space-y-1 text-baseText">
            <li>Key in the contents of an N×M table.</li>
            <li>Table answers can require either string or integer table entries, or a mixture of both.</li>
          </ul>
        </div>
      </div>
      <SubHeading2 className="mt-12">Submission Attempts and Scoring</SubHeading2>
      <ul className="list-disc ml-6 mt-2 space-y-2 text-baseText">
        <li>
          Each MCQ, MCQ Multi-select, Sort, and True/False Set question-part allows for no more than
          <b> 3 attempts</b>. After <b>3 incorrect attempts</b>, such question-parts will be disabled
          and score <b>0</b>. No partial credit is given; an exact match is always required.
        </li>
      </ul>
      <SubHeading2 className="mt-12">Main Problems Scoring</SubHeading2>
      <p className="mt-4">The following lookup table illustrates SEL&apos;s scoring scheme:</p>
      <div className="overflow-x-auto md:overflow-x-visible mt-6 border-2 border-primary rounded-xl w-full">
        <table className="w-full text-center border-separate" style={{ borderSpacing: 0 }}>
          <colgroup>
            <col className="w-[140px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
            <col className="w-[90px]" />
          </colgroup>
          <thead className="bg-secondary text-white">
            <tr>
              <th rowSpan={2} className="px-3 py-2 border border-primary font-medium whitespace-normal break-words">
                Full number of points
              </th>
              <th colSpan={6} className="px-3 py-2 border border-primary font-medium whitespace-normal break-words">
                Number of incorrect answers
              </th>
            </tr>
            <tr>
              <th className="px-3 py-2 border border-primary font-medium">0</th>
              <th className="px-3 py-2 border border-primary font-medium">1</th>
              <th className="px-3 py-2 border border-primary font-medium">2</th>
              <th className="px-3 py-2 border border-primary font-medium">3</th>
              <th className="px-3 py-2 border border-primary font-medium">4</th>
              <th className="px-3 py-2 border border-primary font-medium">5+</th>
            </tr>
          </thead>
          <tbody className="bg-white text-baseText">
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">2</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">3</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">4</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">5</td>
              <td className="px-3 py-2 border border-primary">5</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">6</td>
              <td className="px-3 py-2 border border-primary">6</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">7</td>
              <td className="px-3 py-2 border border-primary">7</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">8</td>
              <td className="px-3 py-2 border border-primary">8</td>
              <td className="px-3 py-2 border border-primary">5</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">9</td>
              <td className="px-3 py-2 border border-primary">9</td>
              <td className="px-3 py-2 border border-primary">5</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-primary font-semibold">10</td>
              <td className="px-3 py-2 border border-primary">10</td>
              <td className="px-3 py-2 border border-primary">6</td>
              <td className="px-3 py-2 border border-primary">4</td>
              <td className="px-3 py-2 border border-primary">3</td>
              <td className="px-3 py-2 border border-primary">2</td>
              <td className="px-3 py-2 border border-primary">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-baseText">
        <li>
          Every <b>30 minutes</b>, teams receive a <b>free skip</b> to discard a problem without
          penalty.
        </li>
        <li>
          If no free skips are available, skipping a question incurs a <b>3 point</b> penalty.
        </li>
      </ul>
      <SubHeading2 className="mt-12">Economania</SubHeading2>
      <p className="mt-4">
        At <b>10:00 AM</b>, the Economania section unlocks, offering 15 new problems across{" "}
        <b>5 categories</b> (Microeconomics, Firms, Game Theory, Macroeconomics, and Financial
        Economics). Each category has 3 problems in ascending difficulty:
      </p>
      <div className="mt-6 border-2 border-primary rounded-xl overflow-x-auto md:overflow-x-visible">
        <table className="w-full text-left border-separate" style={{ borderSpacing: 0 }}>
          <thead className="bg-secondary text-white">
            <tr>
              <th className="px-4 py-3 border border-primary font-medium">Microeconomics</th>
              <th className="px-4 py-3 border border-primary font-medium">Firm Theory</th>
              <th className="px-4 py-3 border border-primary font-medium">Game Theory</th>
              <th className="px-4 py-3 border border-primary font-medium">Macroeconomics</th>
              <th className="px-4 py-3 border border-primary font-medium">Finance</th>
            </tr>
          </thead>
          <tbody className="bg-white text-baseText">
            <tr>
              <td className="px-4 py-3 border border-primary">Micro Q1</td>
              <td className="px-4 py-3 border border-primary">Firms Q1</td>
              <td className="px-4 py-3 border border-primary">Game Theory Q1</td>
              <td className="px-4 py-3 border border-primary">Macro Q1</td>
              <td className="px-4 py-3 border border-primary">Finance Q1</td>
            </tr>
            {[2, 3].map((q) => (
              <tr key={q}>
                <td className="px-4 py-3 border border-primary">
                  Micro Q{q} <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Firms Q{q} <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Game Theory Q{q} <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Macro Q{q} <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
                <td className="px-4 py-3 border border-primary">
                  Finance Q{q} <span className="text-[#FF004F] font-semibold">(Locked)</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-baseText">
        <li>Unlock each subsequent problem by completing the earlier ones in that category.</li>
        <li>
          From <b>10:00 AM to 11:00 AM</b>, completing an entire category doubles its points as a{" "}
          <b>bonus</b>.
        </li>
        <li>
          After <b>11:00 AM</b>, participants can still access Economania questions, however bonus
          points shall no longer be awarded.
        </li>
        <li>Economania problems cannot be skipped.</li>
      </ul>
    </section>
  );
}