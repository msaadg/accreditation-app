import { formatDateNews } from "../utils/formatDateNews";

export const NewsPrev = ({imageUrl, title, preview, publishedAt} : {
  imageUrl: string,
  title: string,
  preview: string,
  publishedAt: string
}) => {
  return (
    <div className="relative bg-white shadow-md overflow-hidden">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full max-h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-gray-900 via-black/60 to-transparent opacity-100"></div>
      </div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="text-3xl font-bold mb-2">{title}</div>
        <div className="mb-4 text-xl">{preview}</div>
        <div className="text-lg mb-4">{formatDateNews(publishedAt)}</div>
        <div className="flex text-customOrange font-bold hover:underline hover:cursor-pointer">
          <div className="mr-1 hover:mr-2 transition-all">
            Read Article
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}