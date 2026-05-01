import { SubHeading } from "./CustomComponents";

export default function AwardsAndRankings() {
  return (
    <section className="mt-12">
      <SubHeading className="slab">Awards and Rankings</SubHeading>
      <p className="mt-4">
        The school category and open category have separate leaderboards and rankings.
      </p>
      <p className="mt-4">
        The awards are determined according to the cutoffs below, where <b>n</b> is the total number
        of teams, and <b>⌈x⌉</b> represents the ceiling function. Teams are ranked by the cumulative
        point total. A rank of <b>r</b> indicates that exactly <b>r - 1</b> teams scored strictly
        more points.
      </p>
      <p className="mt-4">
        The <b>top 5%</b> of teams will receive the <b>Gold</b> award, the <b>top 15%</b> will
        receive the <b>Silver</b> award, and the <b>top 30%</b> of teams will receive the{" "}
        <b>Bronze</b> award.
      </p>
      <div className="mt-6 border-2 border-primary rounded-xl overflow-hidden">
        <table className="w-full text-left border-separate" style={{ borderSpacing: 0 }}>
          <thead className="bg-secondary text-white">
            <tr>
              <th className="px-4 py-3 border border-primary font-medium">Award</th>
              <th className="px-4 py-3 border border-primary font-medium">Rank Range</th>
              <th className="px-4 py-3 border border-primary font-medium">% Cutoff</th>
            </tr>
          </thead>
          <tbody className="bg-white text-baseText">
            <tr>
              <td className="px-4 py-3 border border-primary text-[#D4AF37] font-medium">Gold</td>
              <td className="px-4 py-3 border border-primary">rank ≤ ⌈0.05 × n⌉</td>
              <td className="px-4 py-3 border border-primary">Top 5%</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-primary text-[#C0C0C0] font-medium">Silver</td>
              <td className="px-4 py-3 border border-primary">⌈0.05 × n⌉+1 to ⌈0.15 × n⌉</td>
              <td className="px-4 py-3 border border-primary">Top 15%</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-primary text-[#CD7F32] font-medium">Bronze</td>
              <td className="px-4 py-3 border border-primary">⌈0.15 × n⌉+1 to ⌈0.30 × n⌉</td>
              <td className="px-4 py-3 border border-primary">Top 30%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-baseText">
        <li>Teams will be ranked according to the cumulative point total obtained during the contest.</li>
        <li>
          A rank of <b>r</b> denotes that <b>r - 1</b> teams scored strictly more than that team.
        </li>
      </ul>
    </section>
  );
}