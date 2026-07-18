import results2025, { ResultType } from "@/app/data/pastYearResults/results2025" with { type: "json" }
import MedalSection from "./MedalSection"
const awards: Record<"Bronze"|"Silver"|"Gold", ResultType[]> = {
    "Gold": results2025.filter(val=>val.medal=="gold"),
    "Silver": results2025.filter(val=>val.medal=="silver"),
    "Bronze": results2025.filter(val=>val.medal=="bronze"),
    
    
}
export default function ResultsSection(){
    return <div className="flex flex-col gap-12 my-6">
        {
            Object.entries(awards).map(([award,recipients])=>{
                return <MedalSection 
                key={award}
                recipients={recipients}
                award={award as "Bronze"|"Silver"|"Gold"}
                />
            })
        }
    </div>
}