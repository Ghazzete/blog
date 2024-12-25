"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { theme } = useTheme(); // Not being used, can be removed if not necessary

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to a server)
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg text-center">
          I’d love to hear from you! Feel free to reach out for any questions or collaborations.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-300">
        <p>Follow me on:</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/fizza-muhammad-rasheed-2b14b2300"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ghazzete"
            target="_blank"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>

          <a
            href="mailto:tanoli302@gmail.com"
            className="text-red-600 dark:text-red-400 hover:text-red-700 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
