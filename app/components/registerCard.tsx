import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  userType: string;
  name: string;
  email: string;
  phone: string;
}

interface FormErrors extends Partial<FormData> {
  form?: string;
}

export const RegisterCard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userType: "",
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.userType) newErrors.userType = "Please select a user type.";
    if (!formData.name) newErrors.name = "Please enter your name.";
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{2}-\d{3}-\d{7}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., 92-333-1234567).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataObject = new FormData();
      formDataObject.append('userType', formData.userType);
      formDataObject.append('name', formData.name);
      formDataObject.append('email', formData.email);
      formDataObject.append('phone', formData.phone);

      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        body: formDataObject,
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage('Email sent successfully!');
        setFormData({ userType: "", name: "", email: "", phone: "" }); // Reset form
        setErrors({});
      } else {
        setErrors({ form: 'Failed to send email. Please try again later.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between border-customOrange border-4 text-6xl bg-gray-500 opacity-95 w-full h-full p-8">
      <div className="text-gray-800 text-center w-96">
        <div className="text-3xl font-extrabold">
          Looking to get accredited?
        </div>
        <div className="text-xl font-extrabold mt-2">
          Fill out the form and start your accreditation process in 30 seconds
        </div>
      </div>

      <div className="mt-6">
        <form className="max-w-full" onSubmit={handleSubmit}>
          <select
            id="countries"
            name="userType"
            className={`bg-gray-50 border ${errors.userType ? 'border-red-500' : 'border-gray-300'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 p-4`}
            onChange={handleInputChange}
            value={formData.userType}
            required
          >
            <option value="" disabled>Who Are You?</option>
            <option value="Educational Institute">Educational Institute</option>
            <option value="Professional">Professional</option>
          </select>
          {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}

          <input
            placeholder="Your Name"
            name="name"
            className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-black text-sm rounded-lg h-16 p-4 mt-4`}
            onChange={handleInputChange}
            value={formData.name}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            placeholder="Your Email"
            name="email"
            className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-black text-sm rounded-lg h-16 p-4 mt-4`}
            onChange={handleInputChange}
            value={formData.email}
            type="email"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div className="relative mt-4">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center p-4 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
              </svg>
            </div>
            <input
              type="text"
              id="phone-input"
              name="phone"
              aria-describedby="helper-text-explanation"
              className={`bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 ps-10 p-4`}
              pattern="[0-9]{2}-[0-9]{3}-[0-9]{7}"
              placeholder="92-333-1234567"
              onChange={handleInputChange}
              value={formData.phone}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {errors.form && <p className="text-red-500 text-sm mt-4">{errors.form}</p>}
          {successMessage && <p className="text-green-800 text-sm mt-4">{successMessage}</p>}

          <button
            type="submit"
            className="bg-customOrange mt-6 rounded-md text-white text-lg w-full h-16 transition-all duration-300 hover:bg-black"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};
