import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

// Define the type for each blog post
interface Blog {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}

// Read all the files in the 'content' directory and extract frontmatter
const dirContent = fs.readdirSync("content", "utf-8");

const blogs: Blog[] = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data as Blog; // Assert that the data matches the Blog type
});

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 *
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            {/* Blog post image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />

            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

              {/* Blog post description */}
              <p className="mb-4">{blog.description}</p>

              {/* Blog post author and date */}
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Link to the full blog post */}
              <Link
                href={`/blogpost/${blog.slug}`}
                className={`inline-block py-2 px-6 rounded-lg text-lg font-semibold text-gray-900 dark:text-gray-50 border-2 border-black dark:border-gray-700 transition-all duration-300 transform hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:hover:bg-gray-700 dark:hover:border-gray-50 dark:focus:ring-gray-50`}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
