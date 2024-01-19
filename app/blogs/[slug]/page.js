import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({ slug }) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Post({ params }) {
    const props = getPost(params);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg mx-auto mt-12'>
            <h1 className='bg-gradient-to-br from-black to-zinc-100 bg-clip-text p-2 text-transparent'>{props.frontMatter.title}</h1>

            {/* @ts-expect-error Server Component*/}
            <MDXRemote source={props.content} />
        </article>
    )
}

export async function generateMetadata({ params }) {
    const blog = getPost(params);

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    }
}