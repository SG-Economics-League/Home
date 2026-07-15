import { H2 } from "../Headers";
import FaqBox from "./FaqBox";

export default function QualifiersSection() {
    return <section id = "qualifiers-faq">
    <H2>
        Qualifiers
    </H2>    
    <div className="space-y-6 text-lg">
        <FaqBox
            question="Is AI allowed during the competition?"
            answer={<span>No, any usage of AI tools such as Chatbots is strictly prohibited. Our AI Policy will be released closer to the competition.</span>}
        />
        <FaqBox
            question="May I use the internet during this competition?"
            answer="Yes! Most online resources such as textbooks, research papers, graphing calculators, and computing software can all be used to aid in solving questions. The one exception is that any usage of AI tools such as Chatbots is strictly prohibited."
        />
        <FaqBox
            question="How do we obtain new problems to solve during the contest?"
            answer="After completing or skipping an existing question, your team can choose new questions from a pool of subsequent questions. Your team can attempt a maximum of 4 main problems at any one time."
        />
        <FaqBox
            question="How hard are SEL questions?"
            answer="SEL questions range in difficulty from those similar to the ones you have encountered in school, to questions set at the undergraduate and olympiad level."
        />
        <FaqBox
            question="What happens if I submit a wrong answer?"
            answer="You can reattempt a question-part as many times as you need, but the points awarded for a correct answer will decrease after incorrect attempts. Certain questions such as MCQs have a limit of 3 attempts."
        />
        <FaqBox
            question="May I skip questions?"
            answer="Yes, but 3 points will be deducted from your team's overall score per skip. Your team will receive a free skip that allows you to skip a question without penalty every 30 minutes."
        />
        <FaqBox
            question="How do I obtain bonus points?"
            answer="From 10 am, the Economania section will be unlocked, featuring 5 categories of 3 questions each in ascending difficulty. If your team completes some or all categories of Economania before 11 am, the points which your team obtained from those categories will be doubled."
        />
    </div>
    </section>
}