import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // 1) Set blogs directory
  const blogDir = "blogs";

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir));

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-10 lg:py-14  ">
        <div class=" flex flex-col items-cnter justify-center ext-center h-[70vh] ">
          <p class="mt-1 text-2xl text-zinc-400 tracking-tight">
            Stay Updated, Read Blogs
          </p>
          <h2 class="text-2xl font-bold tracking-tight md:text-7xl md:leading-tight ">
            Customer stories.
          </h2>
        </div>
<hr/>
        <section className="py-10">
          <h2 className="text-2xl font-bold">Latest Blogs</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {blogs.map((blog) => (
              
                <div key={blog.meta.title}
                  class="group  rounded-2xl p-5 duration-200 hover:bg-stone-100/80 hover:scale-105"
                  href="#"
                >
                  <div class="aspect-w-16 aspect-h-10">
                    <img
                      class="w-full object-cover h-48 rounded-xl"
                      src={`/${blog.meta.thumbnail} `}
                      alt="Image Description"
                    />
                  </div>
                  <h3 class="mt-5 text-lg font-medium leading-6 text-zinc-600">
                    {blog.meta.title}
                  </h3>
                  <p class="mt-2 text-base text-gray-500 line-clamp-2 tracking-tight">
                         {blog.meta.description}
                        </p>
                  <Link href={"/blogs/" + blog.slug} passHref key={blog.slug} class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-zinc-400">
                    Learn more
                    <svg
                      class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
