import React, { useState } from 'react';
import { countries } from '../lib/countries';

export const ChapterSignupBox = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];
    if (!name) errors.push("Please enter your name.");
    if (!email) errors.push("Please enter your email.");
    else if (!/\S+@\S+\.\S+/.test(email)) errors.push("Please enter a valid email address.");
    if (!phone) errors.push("Please enter your phone number.");
    else if (!/^\d{2}-\d{3}-\d{7}$/.test(phone)) errors.push("Please enter a valid phone number (e.g., 92-333-1234567).");
    if (!country) errors.push("Please select your country.");
    if (!selectedFile) errors.push("Please upload a resume or cover letter.");
    
    setErrors(errors.join(" "));
    return errors.length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataObject = new FormData();
      formDataObject.append('name', name);
      formDataObject.append('email', email);
      formDataObject.append('phone', phone);
      formDataObject.append('country', country);
      if (selectedFile) {
        formDataObject.append('resume', selectedFile);
      }

      const res = await fetch('/api/sendSignupEmail', {
        method: 'POST',
        body: formDataObject,
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage('Signup form submitted successfully!');
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setSelectedFile(null);
        setErrors("");
      } else {
        setErrors('Failed to send signup form. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email Address *"
            className="p-4 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            id="phone-input"
            aria-describedby="helper-text-explanation"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 p-4"
            pattern="[0-9]{2}-[0-9]{3}-[0-9]{7}"
            placeholder="92-333-1234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            className="h-16 border border-gray-300 rounded-md p-4"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#25629B" className="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          
          <div className="text-xl font-bold text-gray-800 mb-4">Resume or Cover Letter</div>
          
          <div className="text-gray-600 mb-8">
            PDF (Preferred), DOC, RTF, TXT up to 1MB
          </div>
          
          {!selectedFile ? (
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
          ) : (
            <div className="text-center">
              <p className="text-gray-800">Uploaded file: <strong>{selectedFile.name}</strong></p>
              <p className="text-gray-600">File size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
              <button
                type="button"
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedFile(null)}
              >
                Remove File
              </button>
            </div>
          )}
        </div>
        
        {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}
        {successMessage && <p className="text-green-800 text-sm mb-4">{successMessage}</p>}

        <div className='flex justify-center'>
          <button
            type="submit"
            className='bg-customOrange rounded-md text-white text-lg w-full h-16 transition-all duration-300 hover:bg-black'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Sign Up'}
          </button>
        </div>
      </form> 
    </div>
  );
};
