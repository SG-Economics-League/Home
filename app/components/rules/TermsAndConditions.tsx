import { SubHeading, SubHeading2 } from "./CustomComponents";

export default function TermsAndConditions() {
  return (
    <section className="mt-12">
      <SubHeading className="slab">Terms and Conditions</SubHeading>
      <p className="mt-4">
        These Terms and Conditions govern your use of this website and participation in the
        Singapore Economics League.
      </p>
      <SubHeading2 className="mt-6">Views and Opinions Disclaimer</SubHeading2>
      <p className="mt-4">
        Any opinions expressed on this website reflect the personal views of the Singapore Economics
        League (SEL) Organizing Team. These views do not necessarily represent or reflect the
        positions of any individuals, institutions, or organizations with which the SEL Organizing
        Team may be affiliated, unless expressly stated. No intention exists to target, discredit,
        or defame any group—be it religious, racial, corporate, governmental, or otherwise. Any
        resemblance to real persons, living or deceased, or to actual events, entities, or
        organizations is unintentional and purely coincidental.
      </p>
      <SubHeading2 className="mt-10">Warranty Disclaimer</SubHeading2>
      <p className="mt-4">
        All information and material provided on this website are intended solely for general
        informational use. The SEL Organizing Team makes no claim or promise, explicit or implied,
        regarding the accuracy, availability, suitability, or completeness of the content—this
        includes (but is not limited to) implied warranties of merchantability or non-infringement.
        To the fullest extent permitted under applicable law, the SEL Organizing Team disclaims
        liability for any errors, omissions, or inconsistencies in the content, and for any direct
        or indirect damages, losses, or injuries arising from its use.
      </p>
      <p className="mt-4">
        This site does not offer professional, medical, or investment advice. Participants remain
        responsible for seeking qualified, expert guidance where appropriate. By using this website,
        you acknowledge that any reliance on the resources or links provided here is at your own
        risk.
      </p>
      <SubHeading2 className="mt-10">Fair Use</SubHeading2>
      <p className="mt-4">
        While the SEL Organizing Team strives to avoid unauthorized usage of copyrighted material,
        some elements on this website may include copyrighted works not explicitly cleared by the
        copyright holder. Information is made available for purposes of critique, education, and
        scholarship. In good faith, the SEL Organizing Team believes such use constitutes “fair use”
        under Section 190 of the Copyright Act 2021 in the Republic of Singapore.
      </p>
      <SubHeading2 className="mt-10">Data Protection and Privacy</SubHeading2>
      <p className="mt-4">
        The SEL Organizing Team values your privacy and strives to comply with Singapore’s Personal
        Data Protection Act 2012 (PDPA). Any personal data collected through this website or as part
        of the competition registration process is used only for the administration and operation of
        the Singapore Economics League, unless otherwise indicated or required by law. Your data
        will not be sold or voluntarily shared with third parties for marketing or other unrelated
        activities.
      </p>
      <SubHeading2 className="mt-10">Other Relevant Disclaimers</SubHeading2>
      <p className="mt-4">
        By using this website and participating in the Singapore Economics League, you agree not to:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          Violate any Singapore laws pertaining to defamation, sedition, harassment, or other
          prohibited acts, whether in written, digital, or spoken communications
        </li>
        <li>
          Engage in activities that could compromise the security or integrity of this website or
          the competition’s digital platforms
        </li>
        <li>
          Misrepresent any material facts or misuse logos, branding, or other intellectual property
          belonging to the SEL Organizing Team or its partners
        </li>
      </ul>
      <SubHeading2 className="mt-10">Governing Law and Venue</SubHeading2>
      <p className="mt-4 mb-6">
        These Terms and Conditions shall be governed by and interpreted in accordance with the laws
        of the Republic of Singapore. Any disputes or claims arising from the use of this website or
        participation in the Singapore Economics League shall fall under the exclusive jurisdiction
        of the Singapore courts.
      </p>
    </section>
  );
}