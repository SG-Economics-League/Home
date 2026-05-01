import React from "react";
import { H1, H2 } from "@/app/components/Headers";
import RegistrationSection from "@/app/components/faq/RegistrationSection";
import QualifiersSection from "@/app/components/faq/QualifiersSection";
import PostCompetitionSection from "@/app/components/faq/PostCompetition";

export const metadata = {
  title: "FAQ | Singapore Economics League",
};

export default function Faq() {
  return (
    <>
      <section className="w-full text-baseText">
        <div className="flex justify-center pt-8 pb-6">
          <H1>FAQs</H1>
        </div>
        <div className="max-w-screen-lg mx-auto mt-16 px-4 md:px-0 flex gap-4 flex-col">
          <RegistrationSection />
          <QualifiersSection />
          <PostCompetitionSection />
        </div>
      </section>
      <section className="w-full py-8">
        <div className="max-w-screen-lg mx-auto text-left px-4 md:px-0 ">
          <H2 className="text-3xl sm:text-4xl mb-4 mt-4">
            Still have questions?
          </H2>
          <p className="text-lg text-gray-700">
            Drop us an email at{" "}
            <a
              href="mailto:contact@sgeconsleague.org"
              className="text-primary underline font-semibold"
            >
              contact@sgeconsleague.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
