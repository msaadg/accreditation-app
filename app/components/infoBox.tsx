export const InfoBox = ({title, desc} : {
  title: string,
  desc: string;
}) => {
  return (
    <div className="bg-gray-100 p-8 sm:px-8 border-l-4 border-customOrange my-8">
      <div className="text-2xl font-bold text-gray-800">
        {title}
      </div>
      <div className="text-gray-600 mt-2 text-lg">
        {desc}
      </div>
    </div>
  );
};
