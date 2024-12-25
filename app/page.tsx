"use client";

import React from "react";

function Page() {
  return (
    <>
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      {/* Text Section */}
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span className="font-semibold">free repository</span> for community{" "}
          <br className="hidden lg:block" /> components using{" "}
          <span className="font-semibold underline decoration-primary">
            Tailwind CSS
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Open source Tailwind UI components and templates to{" "}
          <br className="hidden lg:block" /> bootstrap your new apps, projects,
          or landing sites!
        </p>

        {/* Search Input Section */}
        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20 hidden md:block">
  <form
    action="https://www.creative-tim.com/twcomponents/search"
    className="flex flex-wrap justify-between md:flex-row"
  >
    {/* Search Input */}
    <input
      type="search"
      name="query"
      placeholder="Search Components"
      required
      className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
    />

    {/* Search Button */}
    <button
      type="submit"
      className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </form>
</div>

      </div>

      {/* Image Section */}
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <img
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          className="w-full h-full max-w-md mx-auto"
        />
      </div>

    </section>
    <section id="plans" className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-gray-900 dark:to-gray-800">
  <div className="max-w-5xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Choose Your Plan</h2>
      <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
        Select the best plan tailored to your needs.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Free Plan */}
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Free</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">For individuals starting out</p>
        <div className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">$0</div>
        <p className="text-gray-600 dark:text-gray-400">per month</p>
        <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
          <li>✔️ Basic Features</li>
          <li>✔️ Limited Support</li>
          <li>❌ No Customization</li>
        </ul>
  <button className="w-full mt-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
    Get Started
  </button>
      </div>

      {/* Standard Plan */}
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105 border-2 border-blue-500">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Standard</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">For growing teams</p>
        <div className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">$29</div>
        <p className="text-gray-600 dark:text-gray-400">per month</p>
        <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
          <li>✔️ All Free Features</li>
          <li>✔️ Priority Support</li>
          <li>✔️ Basic Customization</li>
        </ul>
        <button className="w-full mt-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
          Choose Standard
        </button>
      </div>

      {/* Premium Plan */}
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Premium</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">For businesses & enterprises</p>
        <div className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">$99</div>
        <p className="text-gray-600 dark:text-gray-400">per month</p>
        <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
          <li>✔️ All Standard Features</li>
          <li>✔️ 24/7 Support</li>
          <li>✔️ Full Customization</li>
        </ul>
        <button className="w-full mt-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
          Go Premium
        </button>
      </div>
    </div>
  </div>
</section>

<section
  id="testimonials"
  className="py-20 bg-gray-100 dark:bg-gray-900 px-10"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Section Heading */}
    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-12 animate__animated animate__fadeIn animate__delay-1s">
      What Our Clients Say
    </h2>

    {/* Testimonials Cards */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
      {/* Testimonial 1 */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        &quot;This service has completely changed the way we do business. The team
          is very supportive and always available to help us.&quot;
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://randomuser.me/api/portraits/men/22.jpg"
            alt="Client 1"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              John Doe
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              CEO, Company Inc.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-3s">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        &quot;Amazing customer service and incredible value. I&quot;ve recommended this
          to all my colleagues!&quot;
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Client 2"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Jane Smith
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Marketing Director, Tech Ltd.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-4s">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        &quot;I can&apos;t imagine working without this service anymore. It&quot;s helped us
        streamline our processes immensely.&quot;
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://randomuser.me/api/portraits/men/38.jpg"
            alt="Client 3"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Mike Johnson
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Product Manager, XYZ Corp.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  </>
  );
}

export default Page;