import Link from "next/link";
import { H2 } from "../Headers";
import FaqBox from "./FaqBox";

export default function PostCompetitionSection() {
    return <section id = "post-faq">
    <H2>
        Post-Competition
    </H2>    
    <div className="space-y-6 text-lg">
        <FaqBox
            question="What happens if I feel that there has been an error in the grading of my answer?"
            answer={<span>After the competition, teams will be given the opportunity to submit an appeal form if they feel that there has been an error in the grading of their answer. Upon successful appeal, teams who submitted the correct answer will have their points adjusted accordingly.</span>}
        />
        <FaqBox
            question="Will I receive a certificate for participating in SEL?"
            answer="Yes, all participants will receive a certificate of participation after the competition. Top teams will also receive certificates of merit and awards. For more information on the awards, please refer to the Awards section of our website."
        />
        <FaqBox
            question="Will the questions and solutions be released after the competition?"
            answer="Yes, the questions and solutions will be released on our website after the competition. We encourage all participants to review the solutions and learn from any mistakes they may have made during the competition."
        />
        <FaqBox
            question="I want to join the organising team for the next edition of SEL! How can I do so?"
            answer={<span>If you are interested in joining the organising team for the next edition of SEL, please reach out to us via email at <a href="mailto:contact@sgeconsleague.org" className="text-primary underline font-semibold">contact@sgeconsleague.org</a>. After the competition, we will also release a form for participants to sign up as volunteers for the next edition of SEL.</span>}
        />
    </div>
    </section>
}