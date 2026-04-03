import teamMembers from "@/app/data/teamMembers";
import Image from "next/image";

export default function OrganisingCommitteeSection() {
    return <section className="w-fullpy-16 mt-16">
            <div className="max-w-screen-lg mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black slab mb-8">
                Organising Team{" "}
                <span className="bg-gradient-to-r from-[#7f9fd8] to-[#5073b1] bg-clip-text text-transparent">
                  2025
                </span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {teamMembers.map((member) => (
                  <a
                    key={member.name}
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
                  >
                    <div className="relative w-28 h-28 rounded-full bg-white border-4 border-gray-100 shadow-lg overflow-hidden">
                      <Image
                        src={member.image || "/team-pics/default.png"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 font-semibold text-primary text-lg">
                      {member.name}
                    </p>
                    {member.roles.map((role) => (
                      <p key={role} className="text-gray-600 text-sm">
                        {role}
                      </p>
                    ))}
                  </a>
                ))}
              </div>
            </div>
          </section>
}