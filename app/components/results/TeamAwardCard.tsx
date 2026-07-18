"use client"
import { ResultType } from "@/app/data/pastYearResults/results2025"
import MenuArrowIcon from "../icons/MenuArrowIcon"
import { useState } from "react"

interface TeamAwardCardProps {
    team: ResultType
}
interface TeamMemberDetailsProps {
    teamMembers: string[]
    teamName: string
    isOpen: boolean
}
function TeamMemberDetails({teamName, teamMembers, isOpen}: TeamMemberDetailsProps){
    return <div
        className={`absolute top-full left-0 z-10 w-full origin-top overflow-hidden rounded-b-lg border border-gray-200 bg-white shadow-lg transition-all duration-500 ease-in-out group-hover:bg-gray-200 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
    >
        <ul className="divide-y divide-gray-100 w-full text-left">
            {teamMembers.map(member => (
                <li key={`${teamName}_${member}`} className="px-8 py-2 text-sm text-baseText">
                    {member}
                </li>
            ))}
        </ul>
    </div>
}
export default function TeamAwardCard({team}:TeamAwardCardProps){
    const [isViewingMembers, setIsViewingMembers] = useState(false)
    return <tr onClick={()=>setIsViewingMembers(prev=>!prev)}
    className="group cursor-pointer border-b relative border-gray-100 hover:bg-gray-200 transition-colors duration-500">
        <td className="py-2 text-center pr-2 text-baseText font-medium">
            {team.rank}
        </td>
        <td className="py-2 text-baseText">
            {team.teamName}
        </td>
        <td className="py-2 text-right text-baseText">
            {team.score}
        </td>
        <td className="py-2 pl-2 text-right w-0">
            <MenuArrowIcon isExpanded={isViewingMembers}/>
            <TeamMemberDetails
            teamMembers={team.members}
            teamName={team.teamName}
            isOpen={isViewingMembers}
            />
        </td>
        
    </tr>
}