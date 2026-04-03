import Image from "next/image";

export default function SocialSection() {
    return <section className="flex items-center justify-center mt-24 px-4 md:px-0">
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
              <h3 className="text-4xl font-medium slab text-baseText mt-6">
                Join our Community
              </h3>
              <p className="text-baseText mt-6 max-w-lg">
                Ask questions, make friends, and form teams. Good vibes only!
              </p>
              <a
                href="https://discord.gg/fcYDumMpx7"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>
          </div>
        </div>
      </section>
}