import React, { useState } from "react";

interface EnquiryFormProps {
  schoolTitle: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ schoolTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Enquiry Submitted", { name, email, phone, message });
  };

  return (
    <div className="bg-gray-100 border-2 border-customOrange p-8 max-w-full mx-16 mb-16">
      <div className="text-4xl font-bold text-gray-800 mb-4">Enquiry Form</div>
      <div className="text-lg text-gray-600 mb-8">
        Send us an enquiry for <strong>{schoolTitle}</strong>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <input
            type="text"
            placeholder="Enter Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg w-full"
            required
          />
          <input
            type="email"
            placeholder="Enter Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg w-full"
            required
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg w-full h-32"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-customOrange hover:bg-customBlue text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
        >
          Send Your Enquiry
        </button>
      </form>
    </div>
  );
};
