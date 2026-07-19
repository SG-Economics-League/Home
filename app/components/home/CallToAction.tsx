import Image from "next/image";
import { H2M } from "../Headers";
import GradientText from "../GradientText";
import DiscordLink from "../DiscordLink";

export default function CallToAction() {
    return <section className="flex items-center justify-center py-16 px-4 md:px-0">
        <div className="max-w-screen-lg w-full">
          <div className="flex flex-col gap-6">
            <div
              className="
                relative
                border-2 border-secondary
                rounded-3xl
                p-14 w-full
                flex flex-col items-center
                text-center bg-white text-lg
              "
            >
              <Image
                src="/graphics/flowerPot.png"
                alt="Community Mobile"
                width={200}
                height={200}
                className="md:hidden mx-auto mb-4"
              />
              <Image
                src="/graphics/flowerPot.png"
                alt="Community Left"
                width={200}
                height={200}
                className="
                  hidden
                  md:block
                  absolute
                  left-6
                  top-1/2
                  transform
                  -translate-y-1/2
                  h-auto
                  ml-4
                "
              />
              <Image
                src="/graphics/piggyBank.png"
                alt="Community Right"
                width={200}
                height={200}
                className="
                  hidden
                  md:block
                  absolute
                  right-6
                  top-1/2
                  transform
                  -translate-y-1/2
                  h-auto
                  mr-4
                "
              />
              <H2M>
                Join the{" "}<GradientText from="from-[#7f9fd8]" to="to-[#5073b1]" > SEL </GradientText> Community!
              </H2M>
              <p className="text-baseText mt-6 max-w-lg">
                Ask questions, make friends, and form teams. Good vibes only!
              </p>
              <DiscordLink
                className="
                  mt-9
                  px-5
                  py-2
                  bg-discordBlue
                  text-white
                  text-lg
                  font-semibold
                  rounded-lg
                  transition-transform
                  duration-200
                  ease-in-out
                  hover:scale-105
                  flex
                  items-center
                  space-x-2
                "
              >
                <Image
                  src="https://cdn3.emoji.gg/emojis/5542-discord-clyde-gif.gif"
                  alt="Discord"
                  width={24}
                  height={24}
                />
                <span>Join the SEL Discord Server!</span>
              </DiscordLink>
            </div>
          </div>
        </div>
      </section>
}