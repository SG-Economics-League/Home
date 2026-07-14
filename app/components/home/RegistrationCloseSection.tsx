import { useEffect, useState } from "react";
import CountDown from "../CountDown";
import GradientText from "../GradientText";
import { H2M } from "../Headers";
import { REGISTRATION_CLOSE } from "@/app/data/eventDatetimes";
function calculateTimeLeft(EVENT_TIME: number) {
  const now = new Date().getTime();
  const difference = EVENT_TIME - now;
  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
}

export default function RegistrationCloseSection() {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(REGISTRATION_CLOSE));

    useEffect(() => {
      const interval = window.setInterval(() => {
        setTimeLeft(calculateTimeLeft(REGISTRATION_CLOSE));
      }, 1000);

      return () => window.clearInterval(interval);
    }, []);

    return (<section className="flex items-center justify-center py-16 px-4 md:px-0">
              <div className="max-w-screen-lg w-full ">
                
                <H2M>
                  Let{"'"}s <GradientText from="from-[#7f9fd8]" to="to-[#5073b1]"> Roll </GradientText>
                </H2M>
                <div className="border-2 border-primary bg-white rounded-xl p-8 sm:p-10 text-center">
    
                  <div className="flex sm:flex-row items-center justify-center gap-0 sm:gap-6">
                    {["Days", "Hours", "Minutes", "Seconds"]
                      .map((label, index) => {
                        const value = Object.values(timeLeft)[index] as string;
                        return <CountDown key={label} label={label} value={value} />;
                      })
                      .reduce<JSX.Element[]>((acc, elem, idx, arr) => {
                        if (idx < arr.length - 1) {
                          return [
                            ...acc,
                            elem,
                            <span
                              key={`colon-${idx}`}
                              className="
                              font-light
                              mx-1
                              sm:mx-2
                              text-baseText
                              text-5xl sm:text-6xl
                              self-start
                              mt-8 sm:mt-16
                            "
                            >
                              :
                            </span>,
                          ];
                        }
                        return [...acc, elem];
                      }, [])}
                  </div>
    
                  <div
                className="
                  inline-block
                  bg-background
                  text-secondary
                  rounded-md
                  px-4 py-3
                  shadow-sm
                  mb-2
                  mt-8
                "
              >
               <p className="font-semibold text-baseText sm:text-lg leading-tight text-left">
                Until Registration closes!!
              </p>
              </div>
                </div>
              </div>
            </section>)
}