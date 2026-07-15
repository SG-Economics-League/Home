import Animation from "./AnimatedBackground";

export default function HeroSection() {
    return <section
            className="
              relative
              py-8
              px-4
              sm:py-16 sm:px-6
              lg:py-24 lg:px-32
              text-background
              overflow-hidden
            "
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#3864bc] to-[#3864bc] via-[#4f82e8]">
              <Animation />
            </div>
            <div className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col items-start">
              <div
                className="
                  inline-block
                  bg-background
                  text-secondary
                  rounded-md
                  px-4 py-3
                  shadow-sm
                  mb-4
                "
              >
               <p className="font-semibold text-baseText sm:text-lg leading-tight text-left">
                Sat · 15 August 2026 · 09:00 AM — 01:00 PM SGT
              </p>
              </div>
              <h1
                className="
                  text-[3rem]
                  sm:text-[4rem]
                  lg:text-[5rem]
                  font-medium
                  text-left
                  mb-4
                  mt-4
                  slab
                  leading-tight
                "
                style={{
                  textShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)',
                }}
              >
                Singapore <br />
                Economics League
              </h1>
              <p className="max-w-3xl text-xl text-left text-background font-medium">
                A team based competition for problem solving in economics.
                <br />
                Battle your fellow students for the crown!
              </p>
            </div>
          </section>
}