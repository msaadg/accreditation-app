import React, { useState } from 'react';
import { countries } from '../lib/countries';

export const ChapterSignupBox = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Implement the logic for form submission, e.g., sending data to the server.
    console.log('Form submitted');
  };

  return (
    <div className="w-full mx-auto bg-gray-100 p-8 rounded-lg shadow-lg border-2 border-customOrange">
      <div className="text-4xl font-bold text-gray-800 mb-4">
        Signup for chapter membership
      </div>
      <div className="text-lg mb-8">
        Fill the following form to start your membership process
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Full Name *"
            className="p-4 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Enter Email Address *"
            className="p-4 border border-gray-300 rounded-md"
            required
          />
          <form className="w-full mx-auto relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center p-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <input
              type="text"
              id="phone-input"
              aria-describedby="helper-text-explanation"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 ps-10 p-4 "
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </form>

          <select
            className="h-16 border border-gray-300 rounded-md p-4"
            required
          >
            <option className='text-gray-900' value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="my-8 p-16 bg-white border border-gray-300 rounded-md text-center">
          <div className="flex justify-center mb-8">
            <div className="text-customOrange text-4xl">&#128196;</div>
          </div>
          
          <div className="text-xl font-bold text-gray-800 mb-4">Resume or Cover Letter</div>
          
          <div className="text-gray-600 mb-8">
            PDF (Preferred), DOC, RTF, TXT up to 1MB
          </div>
          
          <label htmlFor="uploadFile1"
            className="flex bg-customOrange hover:bg-black transition-all duration-300 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2 fill-white inline" viewBox="0 0 32 32">
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000" />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000" />
            </svg>
            Upload
            <input type="file" id='uploadFile1' accept=".pdf,.doc,.docx,.rtf,.txt" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        
        <div className='flex justify-center'>
          <button
            type="submit"
              className='bg-customOrange rounded-md text-white text-lg w-full h-16 transition-all duration-300 hover:bg-black' onClick={() => console.log('Button clicked')}
          >
            Sign Up
          </button>
        </div>
      </form> 
    </div>
  );
};
