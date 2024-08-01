import { EventsCarousel } from "../components/eventsCarousel"
import { Heading } from "../components/heading"
import { EventPreview } from "../lib/types"

export const EventsSec = ({events} : {
  events: Array<EventPreview>
}) => {
  return (
    <div className="p-16 grid grid-cols-6">
      <div className="col-span-1">
        <Heading title='Events' />
      </div>

      <div className="col-span-5">
        <EventsCarousel events={events} />
      </div>
    </div>
  )
}