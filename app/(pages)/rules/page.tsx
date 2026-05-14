"use client";
import { H1} from "@/app/components/Headers";
import React, { useEffect, useState } from "react";
import { sectionIds, allSubsectionIds } from "@/app/data/rules";
import BriefRules from "@/app/components/rules/BriefRules";
import Registration from "@/app/components/rules/Registration";
import CompetitionPlatform from "@/app/components/rules/CompetitionPlatform";
import ContestFormatAndScoring from "@/app/components/rules/ContestFormatAndScoring";
import AwardsAndRankings from "@/app/components/rules/RewardsAndRankings";
import ConductOfTheContest from "@/app/components/rules/ContestConduct";
import ParticipantsCodeofConduct from "@/app/components/rules/CodeOfConduct";
import TermsAndConditions from "@/app/components/rules/TermsAndConditions";
import SideBar from "@/app/components/rules/Sidebar";
import MobileContents from "@/app/components/rules/MobileContest";
import useSidebar from "@/app/hooks/useSidebar";



export default function RulesPage() {
  const {selected, selectedSub} = useSidebar(sectionIds, allSubsectionIds);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          height: 100vh;
          overflow-x: hidden;
        }
      `}</style>
      <H1>
        Rules
      </H1>
      <MobileContents selected={selected} selectedSub={selectedSub} />
      <div className="flex justify-center mb-10">
        <div className="max-w-screen-lg w-full flex flex-col lg:flex-row px-4 md:px-0">
          <div className="hidden lg:block lg:w-96 lg:pr-4">
            <div className="sticky top-12 h-[calc(100vh-160px)] overflow-y-auto overflow-x-hidden mt-10">
              <SideBar selected={selected} selectedSub={selectedSub} />
            </div>
          </div>
          <div id="main-content" className="w-full lg:pl-16 mt-16">
            <BriefRules />
            <Registration />
            <CompetitionPlatform />
            <ContestFormatAndScoring />
            <AwardsAndRankings />
            <ConductOfTheContest />
            <ParticipantsCodeofConduct />
            <TermsAndConditions />
            <p className="text-sm text-gray-500 mt-8">Last Updated: 4 April 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
