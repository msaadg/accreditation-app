import { Heading } from "../components/heading"
import { InfoBox } from "../components/infoBox";

export const AccreditationPerksSec = ({credibility, prospects, recognition, opportunities, reputation, resources} : {
  credibility: string;
  prospects: string;
  recognition: string;
  opportunities: string;
  reputation: string;
  resources: string;
}) => {
  return (
    <div className="p-16">
      <Heading title="Perks of Accreditation" />
      <div className="mt-6"> 
        <InfoBox title="Increased Credibility" desc={credibility} />
        <InfoBox title="Improved Job Prospects" desc={prospects} />
        <InfoBox title="Professional Recognition" desc={recognition} />
        <InfoBox title="Improved Networking Opportunities" desc={opportunities} />
        <InfoBox title="Enhanced Reputation" desc={reputation} />
        <InfoBox title="Access to Resources" desc={resources} />
      </div>
    </div>
  )
}