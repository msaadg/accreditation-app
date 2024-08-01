export const ScheduleCall = () => {
  return (
    <div className='flex justify-between bg-customOrange px-16'>
      <div className='text-white text-2xl font-semibold flex flex-col justify-center'>
        Want to schedule a call for dicussion? Request a call back now.
      </div>
      <div className='py-5'>
        <button className='bg-blue-gray-900 rounded-md text-white text-lg w-52 h-16 transition-all duration-300 hover:bg-black' onClick={() => console.log('Button clicked')}>
          Schedule A Call
        </button>
      </div>
    </div>
  )
}