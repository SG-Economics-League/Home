import Link from "next/link";
import Image from "next/image";
import DiscordLink from "./DiscordLink";

export default function Footer() {
  return (
    <footer className="bg-baseText text-white w-full mt-24">
      <div className="max-w-screen-md lg:max-w-screen-lg mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/navbar.png"
                alt="PhysicsBrawlOnline Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <p className="text-base leading-relaxed">
              Singapore Economics League is a problem solving competition by students, for students.
              We are a non profit team of volunteers dedicated to promoting an interest in economics
              among students in Singapore.
              <br />
              <br />
              The realisation of the competition was inspired by other leagues including{" "}
              <Link
                href="https://sgphysicsleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Singapore Physics League (SPhL)
              </Link>
              ,{" "}
              <Link
                href="https://www.sgchemleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Singapore Chemistry League (SChL)
              </Link>
              , and{" "}
              <Link
                href="https://sgbioleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Singapore Biology League (SBL)
              </Link>
              , as well as the{" "}
              <Link
                href="https://ieo-official.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                International Economics Olympiad (IEO)
              </Link>{" "}
              and{" "}
              <Link
                href="https://physicsbrawl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                PhysicsBrawl
              </Link>
              .
              <br />
              <br />
              #sgeconsleague{" "}
              <Link href="mailto:contact@sgeconsleague.org" className="hover:underline">
                contact@sgeconsleague.org
              </Link>
            </p>
          </div>

          {/* Right Column: links */}
          <div className="md:w-2/3 flex flex-col md:flex-row justify-end gap-12 text-xl">
            <div className="text-left">
              <h3 className="font-semibold mb-2 slab">Navigation</h3>
              <ul className="space-y-1 text-base">
                <li>
                  <Link href="/rules" className="hover:underline">
                    Rules
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/syllabus" className="hover:underline">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link href="/practise" className="hover:underline">
                    Practise
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2 text-xlslab">Connect with us</h3>
              <div className="flex items-center gap-3">
                <Link
                  href="https://instagram.com/sgeconsleague"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/singapore-economics-league/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                  </svg>
                </Link>
                <DiscordLink className="hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
                  </svg>
                </DiscordLink>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        <div className="flex items-center text-sm text-gray-400">
          <span className="mr-4">© Singapore Economics League 2025</span>
          <Link href="/privacy" className="hover:underline text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
