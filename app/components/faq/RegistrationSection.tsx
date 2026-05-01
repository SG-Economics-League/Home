import { H2 } from "../Headers";
import FaqBox from "./FaqBox";

export default function RegistrationSection() {
    return <section id = "registration-faq">
    <H2>
        Registration
    </H2>    
    <div className="space-y-6 text-lg">
        <FaqBox
            question="Can my team be composed of members from different schools?"
            answer="Absolutely, as long as each teammate meets the eligibility criteria!"
        />
        <FaqBox
            question="Can I change the name and details of my team after registration?"
            answer={<span>Changes to registration information may be made prior to the registation closing date. Teams that wish to do so may contact the organisers via email at <a href="mailto:contact@sgeconsleague.org" className="text-primary underline font-semibold">contact@sgeconsleague.org</a>. Note that if there are multiple form submissions by the same team, only the most recent form submission will be considered for registration.</span>}
        />
        <FaqBox
            question="Should I participate even if I have not studied H2 or Olympiad level economics?"
            answer="Yes! All Pre-U students, regardless of their subjects, can participate in the school category. SEL has questions of a wide range of difficulties, so you can challenge yourself regardless of your economics proficiency."
        />
        <FaqBox
            question="Should I participate in the School Category or Open Category?"
            answer="SEL collaborates with local JCs and schools by sharing the performance of their students who have registered under the School Category. Thus, only participants of the school category will have their prizes and awards recorded in their CCA certificates and transcripts."
        />
        <FaqBox
            question="May I participate even if I am not studying in Singapore?"
            answer="Yes, you may. The same restrictions on the School and Open Category will apply: only students who are all studying in Pre-University education may participate in the school category. International participants in the School category also stand to recieve certificates and awards. International participants should note that the organisers of SEL may not always liason with non-local schools to verify and endorse competition results."
        />
    </div>
    </section>
}