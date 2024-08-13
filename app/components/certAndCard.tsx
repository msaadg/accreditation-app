import { Heading } from "@/app/components/heading";

export const CertAndCard = ({ certUrl, cardUrl } : {
  certUrl: string;
  cardUrl: string;
}) => {
  return (
    <div className="m-16 grid grid-cols-2">
      <div className="col-span-1">
        <Heading title="Accreditation Certificate" />
        <img
          src={certUrl}
          alt="Professional"
          className="max-h-full max-w-full object-cover object-top col-span-1"
        />
      </div>

      <div className="col-span-1">
        <Heading title="Business Card" />
        <img
          src={cardUrl}
          alt="Professional"
          className="max-h-full max-w-full object-cover object-top col-span-1"
        />
      </div>
    </div>
  )
}