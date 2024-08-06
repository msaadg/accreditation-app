import { select } from "@material-tailwind/react"

export const RegisterCard = () => {
  return (
    <div className="flex flex-col justify-between border-customOrange border-4 text-6xl bg-gray-500 opacity-95 w-full h-full p-12">
      <div className="text-gray-800 text-center w-96">
        <div className="text-3xl font-extrabold">
          Looking to get accredited?
        </div>
        <div className="text-xl font-extrabold mt-2">
          Fill out the form and start your accreditation process in 30 seconds
        </div>
      </div>

      <div className="mt-6">
        <form className="max-w-full">
          <select id="countries" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 p-4">
            <option selected>Who Are You?</option>
            <option value="Educational Institute">Educational Institute</option>
            <option value="Professional">Professional</option>
          </select>
        </form>
        
        <input placeholder="Your Name" className="w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg h-16 p-4" />
        <input placeholder="Your Email" className="w-full bg-gray-50 border border-gray-300 text-black text-sm rounded-lg h-16 p-4" />
        
        <form className="max-w-full mx-auto relative mt-4">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center p-4 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                </svg>
            </div>
            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 ps-10 p-4 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
        </form>

      </div>
      
      <button className="bg-customOrange mt-6 rounded-md text-white text-lg w-full h-16 transition-all duration-300 hover:bg-black" onClick={() => console.log('Button clicked')}>
        Submit
      </button>
    </div>
  )
}