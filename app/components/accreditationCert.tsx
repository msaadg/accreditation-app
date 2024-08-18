import { Heading } from "@/app/components/heading";

export const AccreditationCert = ({ certUrl } : {
  certUrl: string;
}) => {
  return (
    <div className="m-16">
      <Heading title="Accreditation Certificate" />
      <img
        src={certUrl}
        alt="Professional"
        className="max-h-full max-w-full object-cover object-top col-span-1 hover:shadow-2xl transition-all duration-300"
      />
    </div>
  )
}