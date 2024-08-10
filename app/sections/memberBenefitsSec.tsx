import { Heading } from "../components/heading"
import { InfoBox } from "../components/infoBox";

export const MemberBenefitsSec = ({events, prospects, opportunity, publications} : {
  events: string;
  prospects: string;
  opportunity: string;
  publications: string;
}) => {
  return (
    <div className="p-16">
      <Heading title="Exclusive Member Benefits" />
      <div className="mt-6"> 
        <InfoBox title="Be A Part of worldwide events" desc={events} />
        <InfoBox title="Networking Prospects" desc={prospects} />
        <InfoBox title="Professional Expansion Opportunity" desc={opportunity} />
        <InfoBox title="Regional Publications" desc={publications} />
      </div>
    </div>
  )
}