import React, { useState } from 'react';
import { countries } from '../lib/countries';

export const ChapterSignupBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [coverLetter, setCoverLetter] = useState(""); // New state for cover letter
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const validateForm = (): boolean => {
    const errors: string[] = [];
    if (!name) errors.push("Please enter your name.");
    if (!email) errors.push("Please enter your email.");
    else if (!/\S+@\S+\.\S+/.test(email)) errors.push("Please enter a valid email address.");
    if (!phone) errors.push("Please enter your phone number.");
    else if (!/^\d{2}-\d{3}-\d{7}$/.test(phone)) errors.push("Please enter a valid phone number (e.g., 92-333-1234567).");
    if (!country) errors.push("Please select your country.");
    if (!coverLetter) errors.push("Please enter a cover letter."); // Validation for cover letter
    
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
      const res = await fetch('/api/sendSignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          coverLetter, // Include cover letter in the submission
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage('Signup form submitted successfully!');
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setCoverLetter(""); // Clear cover letter field
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

        <div className="mt-4">
          <textarea
            placeholder="Enter your cover letter *"
            className="p-4 border border-gray-300 rounded-md w-full h-64"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </div>

        {errors && <p className="text-red-500 text-sm mb-4 mt-4">{errors}</p>}
        {successMessage && <p className="text-green-800 text-sm mb-4 mt-4">{successMessage}</p>}

        <div className='flex justify-center mt-4'>
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
