import React from "react";
import { H1, H3 } from "@/app/components/Headers";
import Button from "@/app/components/Button";

export const metadata = {
    title: "Results | Singapore Economics League",
};

export default function ResultsPage() {
    return (
        <div className="w-full text-baseText">
            <div className="max-w-screen-lg mx-auto px-4 md:px-0">
                <H1>Results</H1>
                <Button
                    href="/practise"
                    target="_self"
                    className="mx-auto md:mx-0 block mt-12"
                >
                    View Questions Instead
                </Button>
                <div className="bg-white border-2 mt-4 border-primary shadow-lg rounded-xl p-4 flex flex-row justify-between items-center px-6">
                    <H3 className="text-2xl">2025 Results</H3>
                      <Button variant="secondary" target="_self" href="/results/2025" className=" flex items-center justify-center gap-2 text-xl font-semibold">
                        View
                      </Button>
                    </div>
                
            </div>
        </div>
    );
}
