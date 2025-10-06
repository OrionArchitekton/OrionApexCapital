import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readingTime from "reading-time";

const postsDir = path.join(process.cwd(), "content", "posts");
const postExtensions = [".md", ".mdx"];

function resolvePostPath(slug) {
  for (const ext of postExtensions) {
    const candidate = path.join(postsDir, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Post not found for slug: ${slug}`);
}

export function getAllPosts() {
  const files = fs
    .readdirSync(postsDir)
    .filter((filename) =>
      postExtensions.some((ext) => filename.toLowerCase().endsWith(ext))
    );

  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const file = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(file);
      const slug = filename.replace(/\.(md|mdx)$/i, "");

      return { slug, ...data, content };
    })
    .sort((a, b) => {
      if (!!a.featured && !b.featured) return -1;
      if (!a.featured && !!b.featured) return 1;
      return new Date(b.date) - new Date(a.date);
    });
}

export async function getPostBySlug(slug) {
  const file = fs.readFileSync(resolvePostPath(slug), "utf8");
  const { data, content } = matter(file);
  const mdxSource = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
    }
  });

  const stats = readingTime(content);

  return {
    slug,
    ...data,
    mdxSource,
    readingTime: `${Math.max(1, Math.round(stats.minutes))} min read`
  };
}

