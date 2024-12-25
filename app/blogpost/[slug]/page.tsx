import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { Metadata } from "next";
import CommentSection from "@/components/comment";

interface PageParams {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Dynamic blog post content",
};

export default async function Page({ params }: PageParams) {
  // Directory to read content from
  const contentDir = "content";
  const files = fs.readdirSync(contentDir);

  // Find the file with matching slug
  let matchedFile = "";
  let data: any = null;
  let content = "";

  for (const file of files) {
    const fileContent = fs.readFileSync(`${contentDir}/${file}`, "utf-8");
    const { data: frontmatter, content: fileContentMarkdown } = matter(fileContent);

    if (frontmatter.slug === params.slug) {
      matchedFile = file;
      data = frontmatter;
      content = fileContentMarkdown;
      break;
    }
  }

  // Handle missing file
  if (!matchedFile) {
    notFound();
    return null;
  }

  // Process Markdown to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(data.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
      <CommentSection postId={params.slug} />
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
