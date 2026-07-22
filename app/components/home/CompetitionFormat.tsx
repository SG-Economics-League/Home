import Button from "../Button"
import GradientText from "../GradientText"
import { H2M, H3L } from "../Headers"

function MainQuestionsSection() {
    return <div className="w-full h-full flex flex-col border-2 border-primary bg-white shadow-lg justify-between rounded-xl px-6 py-4 sm:px-8 sm:py-6 items-center  gap-2">
        <div>
            <H3L>Main Questions</H3L>
            <ul className="list-none space-y-2 mt-3 ml-6">
                <li className="text-baseText text-lg flex items-start gap-2">
                    <span className="text-[#5073b1] font-bold text-xl leading-tight mt-0.5">*</span>
                    <div>Unlock up to <b>4 questions</b> at a time</div>
                </li>
                <li className="text-baseText text-lg flex items-start gap-2">
                    <span className="text-[#5073b1] font-bold text-xl leading-tight mt-0.5">*</span>
                    <div>
                        <div>Use {'"'}Skips{'"'} to bypass questions you find too difficult</div>
                        <ul className="list-none space-y-1 mt-1 ml-4">
                            <li className="text-baseText text-md flex items-start gap-2">
                                <span className="text-[#b15050] font-bold text-xl leading-tight mt-0.5">!</span>
                                <div>Free Skips replenish every <b>30 minutes</b></div>
                            </li>
                            <li className="text-baseText text-md flex items-start gap-2">
                                <span className="text-[#b15050] font-bold text-xl leading-tight mt-0.5">!</span>
                                <div>Additional Skips cost <b>3 points</b> each</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex justify-center mt-auto">
        <Button href="/rules" target="_self" className="mt-4 mx-auto block">
            Read Rules →
        </Button>
        </div>
    </div>
}

function EconomaniaSection() {
    return <div className="w-full h-full flex flex-col border-2 border-primary bg-white shadow-lg justify-between rounded-xl px-6 py-4 sm:px-8 sm:py-6 gap-2">
        <div>
            <H3L>Economania Questions</H3L>
            <ul className="list-none space-y-2 mt-3 ml-6">
                <li className="text-baseText text-lg flex items-start gap-2">
                    <span className="text-[#5073b1] font-bold text-xl leading-tight mt-0.5">*</span>
                    <div>Unlocks at <b>10am</b></div>
                </li>
                <li className="text-baseText text-lg flex items-start gap-2">
                    <span className="text-[#5073b1] font-bold text-xl leading-tight mt-0.5">*</span>
                    <div>
                        <div><b>4</b> Economic topics</div>
                        <ul className="list-none space-y-1 mt-1 ml-4">
                            <li className="text-baseText text-md flex items-start gap-2">
                                <span className="text-[#5073b1] font-bold leading-tight mt-0.5">–</span>
                                <div>Microeconomics, Game Theory, Macroeconomics, Financial Economics</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="text-baseText text-lg flex items-start gap-2">
                    <span className="text-[#5073b1] font-bold text-xl leading-tight mt-0.5">*</span>
                    <div><b>3</b> questions per category</div>
                </li>
            </ul>
        </div>
        <div className="flex justify-center">
        <Button href="/rules" className="mt-4 mx-auto block">
            Read Rules →
        </Button>
        </div>
    </div>
}

export default function CompetitionFormatSection() {
    return <section className="w-full py-4 pt-8 md:py-16 px-4">
        <div className="max-w-screen-lg w-full mx-auto">
            <H2M>
                Competition Format{" "}
                <GradientText from="from-[#7f9fd8]" to="to-[#5073b1]">
                    2026
                </GradientText>
            </H2M>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12 mt-8">
                <div className="w-full">
                    <MainQuestionsSection />
                </div>
                <div className="w-full">
                    <EconomaniaSection />
                </div>
            </div>
        </div>
        
    </section>
}