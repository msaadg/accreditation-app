import { Heading } from "../components/heading";
import { NewsPrev } from "../components/newsPrev"
import { NewsPreview } from "../lib/types"

export const NewsSec = ({ news } : {
  news: Array<NewsPreview>
}) => {
  const sortedNews = [...news].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="p-16 bg-gray-100">
      <Heading title='The Latest News' />
      <div className="grid grid-cols-2 gap-10">
        {sortedNews.slice(0, 2).map((newsItem, index) => (
          <NewsPrev key={index} imageUrl={newsItem.imageUrl} title={newsItem.title} preview={newsItem.preview} publishedAt={newsItem.publishedAt} slug={newsItem.slug} />
        ))}
      </div>
    </div>
  )
}