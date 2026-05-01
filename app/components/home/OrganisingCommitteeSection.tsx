import teamMembers, { TeamMember } from "@/app/data/teamMembers";
import Image from "next/image";
import { H2M } from "../Headers";
import Link from "next/link";

function MemberCard({ name, role, photo, socials, quote }: TeamMember) {
  const Card = <div className={`flex flex-col justify-center items-center py-4 px-2 rounded-lg transition-all ${socials ? "hover:brightness-90 hover:backdrop-brightness-90" : ""}`}>
    <div className="relative w-28 h-28 rounded-full bg-white border-4 border-gray-100 shadow-lg overflow-hidden">
        <Image
          src={photo ? `/team-pics/${photo}`:"/team-pics/default.png"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-4 font-semibold text-primary text-lg">
        {name}
      </p>
      <p  className="text-gray-600 text-sm">
        {role}
      </p>
      <p className="text-gray-500 text-xs text-center mt-2">
        {quote ? `"${quote}"` : `"Insert Quote Here"`}
      </p>
  </div>
  return <>
    {socials ? <Link href={socials} target="_blank" rel="noopener noreferrer">
      {Card}
    </Link> : Card}
  </>
}
export default function OrganisingCommitteeSection() {
    return <section className="w-full py-16">
            <div className="max-w-screen-lg mx-auto px-4">
              <H2M>
                Organising Team{" "}
                <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
                  2026
                </span>
              </H2M>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {teamMembers.map((member) => (
                    <MemberCard key={member.name} {...member} />
                ))}
              </div>
            </div>
          </section>
}