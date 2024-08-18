import { Heading } from "../components/heading";

export const KeyAttributesSec = ({ bgImg, attributes } : {
  bgImg: string,
  attributes: string[]
}) => {
  // Split the attributes array into two columns
  const midIndex = Math.ceil(attributes.length / 2);
  const firstColumn = attributes.slice(0, midIndex);
  const secondColumn = attributes.slice(midIndex);

  return (
    <div className="relative h-full px-16 py-8 mb-16">
      <img src={bgImg} alt="Key Attributes Background" className="absolute inset-0 h-full w-full object-cover z-0" />

      <div className="relative text-white">
        <Heading title="Key Attributes of a Good Accreditation Board" color="white" />
        <div className="flex gap-64">
          <ul className="space-y-1">
            {firstColumn.map((attribute, index) => (
              <li key={index} className="flex items-center text-lg">
                <span className="mr-2">•</span> {attribute}
              </li>
            ))}
          </ul>
          <ul className="space-y-1">
            {secondColumn.map((attribute, index) => (
              <li key={index} className="flex items-center text-lg">
                <span className="mr-2">•</span> {attribute}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};