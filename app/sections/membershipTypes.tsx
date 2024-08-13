import { CertificationCard } from "../components/certificationCard"
import { Heading } from "../components/heading"
import { CertCard } from "../lib/types";

export const MembershipTypes = ({ silver, gold, platinum, diamond } : {
  silver: CertCard;
  gold: CertCard;
  platinum: CertCard;
  diamond: CertCard;
}) => {
  return (
    <div className="mx-16 mb-16">
      <Heading title="Types of Membership" />
      <div className="grid grid-cols-4 gap-4">
        <div>
          <CertificationCard stamp={silver.stamp} title={silver.title.split(' ')[0]} benefits={silver.benefits} />
        </div>
        <div>
          <CertificationCard stamp={gold.stamp} title={gold.title.split(' ')[0]} benefits={gold.benefits} />
        </div>
        <div>
          <CertificationCard stamp={platinum.stamp} title={platinum.title.split(' ')[0]} benefits={platinum.benefits} />
        </div>
        <div>
          <CertificationCard stamp={diamond.stamp} title={diamond.title.split(' ')[0]} benefits={diamond.benefits} />
        </div>
      </div>
    </div>
  )
}