import React, { useState, ChangeEvent, FormEvent } from "react";

interface EnquiryFormProps {
  schoolTitle: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ schoolTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{2}-\d{3}-\d{7}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., 92-333-1234567).";
    }
    if (!message) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/sendEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message, schoolTitle }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage('Enquiry sent successfully!');
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrors({});
      } else {
        setErrors({ form: 'Failed to send enquiry. Please try again later.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
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
            name="name"
            placeholder="Enter Full Name *"
            value={name}
            onChange={handleInputChange}
            className={`p-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter Email Address*"
            value={email}
            onChange={handleInputChange}
            className={`p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number*"
            value={phone}
            onChange={handleInputChange}
            className={`p-4 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full`}
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={handleInputChange}
            className={`p-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full h-32`}
            required
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        {errors.form && <p className="text-red-500 text-sm mt-4">{errors.form}</p>}
        {successMessage && <p className="text-green-800 text-sm mt-4">{successMessage}</p>}

        <button
          type="submit"
          className="w-full bg-customOrange hover:bg-customBlue text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Your Enquiry'}
        </button>
      </form>
    </div>
  );
};
