import { ResultType } from "@/app/data/pastYearResults/results2025"
import TeamAwardCard from "./TeamAwardCard"
import { H2 } from "../Headers"
interface MedalSectionProps {
    recipients: ResultType[]
    award: "Gold"|"Silver"|"Bronze"
}

export default function MedalSection({
    recipients,
    award 
}: MedalSectionProps){
    return <div >
        <H2>{award}</H2>
        <table className="mt-4 w-full border-collapse">
            <thead>
                <tr className="border-b border-gray-300 text-left text-sm uppercase tracking-wide text-gray-500">
                    <th className="py-2 pr-2 font-semibold w-0">Rank</th>
                    <th className="py-2 font-semibold">Team</th>
                    <th className="py-2 text-right font-semibold">Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    recipients.map(
                        team => <TeamAwardCard
                        key={team.teamName}
                        team={team}/>
                    )
                }
            </tbody>
        </table>
    </div>
}