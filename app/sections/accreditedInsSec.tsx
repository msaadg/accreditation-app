import { Heading } from "../components/heading"

export const AccreditedInsSec = ({bgColor} : {
  bgColor: boolean
}) => {
  return (
    <div className={`p-16 ${bgColor ? 'bg-gray-100' : 'bg-white'}`}>
      <Heading title='Among Accredited Institutes' />
      <div className="text-6xl bg-blue-gray-900 w-full h-96 p-4">
        show institues logos here
      </div>
    </div>
  )
}