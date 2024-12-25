"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="transition-all duration-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 md:px-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20 px-8">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image */}
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 animate__animated animate__fadeInLeft">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/blogimg.jpg"
                  alt="Fizza"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="w-full md:w-2/3 text-center md:text-left animate__animated animate__fadeInRight">
              <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m Fizza!</h1>
              <p className="text-lg leading-relaxed mb-4">
                A passionate beginner in web development, I have been diving into the world of
                HTML, CSS, JavaScript, TypeScript, and Next.js. My journey is fueled by curiosity, and I aim to
                create meaningful and user-friendly web experiences that can make a difference.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Along with my technical skills, I&apos;m passionate about learning new tools and frameworks to
                stay ahead in the ever-evolving field of web development.
              </p>
              <p className="text-lg leading-relaxed">
                Feel free to explore my journey and connect with me through the links below!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              My Journey as a Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-50">
              Here&apos;s how my learning path unfolded—from the basics to building
              full-fledged applications.
            </p>
          </div>

          {/* Journey Cards */}
          <div className="space-y-12">
            {/* Card 1: HTML & CSS */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/htmlcss.webp"
                  alt="HTML & CSS"
                  width={350}
                  height={200}
                  className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold mb-2">Starting with HTML &amp; CSS</h3>
                <p className="text-gray-600 dark:text-gray-50">
                  I began by learning how to structure and style websites, focusing on layouts and responsive designs.
                </p>
                <p className="text-gray-600 dark:text-gray-50 mt-4">
                  Mastering the basics of web design gave me a strong foundation for creating beautiful, user-friendly websites.
                </p>
              </div>
            </div>

            {/* Card 2: JavaScript */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/javascript.webp"
                  alt="JavaScript"
                  width={350}
                  height={200}
                  className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold mb-2">Learning JavaScript</h3>
                <p className="text-gray-600 dark:text-gray-50">
                  Discovering JavaScript unlocked endless possibilities for creating dynamic, interactive websites.
                </p>
                <p className="text-gray-600 dark:text-gray-50 mt-4">
                  It helped me move from static designs to dynamic, real-time updates on web pages, making my projects more engaging.
                </p>
              </div>
            </div>

            {/* Card 3: TypeScript */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/typescript.webp"
                  alt="TypeScript"
                  width={350}
                  height={200}
                  className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold mb-2">Exploring TypeScript</h3>
                <p className="text-gray-600 dark:text-gray-50">
                  TypeScript introduced me to a new level of clarity and structure in my coding journey, paving the way for building scalable projects.
                </p>
                <p className="text-gray-600 dark:text-gray-50 mt-4">
                  With TypeScript, I embraced strongly-typed programming, which made my projects more robust and easier to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">My Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-50">
              I&apos;m continuously improving my skills in various technologies to create modern and interactive websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Next.js</h3>
              <p className="text-gray-600 dark:text-gray-50">Building fast, server-rendered React apps.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 dark:text-gray-50">Utility-first CSS framework for designing responsive UIs.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">React</h3>
              <p className="text-gray-600 dark:text-gray-50">A JavaScript library for building user interfaces.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">TypeScript</h3>
              <p className="text-gray-600 dark:text-gray-50">Strongly-typed programming for scalable code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
