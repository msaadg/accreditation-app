import React, { useState, ChangeEvent, FormEvent } from "react";

interface GetInTouchProps {
  phone: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export const GetInTouch: React.FC<GetInTouchProps> = ({ phone, email }) => {
  const [name, setName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!formEmail) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formEmail)) {
      newErrors.email = "Please enter a valid email address.";
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
    if (name === "email") setFormEmail(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/sendContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email: formEmail,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage('Message sent successfully!');
        setName("");
        setFormEmail("");
        setMessage("");
        setErrors({});
      } else {
        setErrors({ form: 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row m-16">
      {/* Contact Information Section */}
      <div className="lg:w-1/3 p-6 mr-8 border-t-4 bg-gray-100 border-customOrange">
        <div className="text-2xl font-bold text-gray-800 mb-4">Contact Information</div>
        <div className="text-lg text-gray-600">
          <p className="mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <span>{phone}</span>
          </p>
          <p className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span>{email}</span>
          </p>
        </div>
      </div>

      {/* Get In Touch Form Section */}
      <div className="lg:w-2/3 bg-gray-100 p-6 border-2 border-customOrange shadow-">
        <div className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</div>
        <div className="text-lg text-gray-600 mb-8">
          Have an enquiry or some feedback for us? Fill out the form below to contact our team.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleInputChange}
              className={`p-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formEmail}
              onChange={handleInputChange}
              className={`p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              name="message"
              placeholder="How can we help?"
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
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};
