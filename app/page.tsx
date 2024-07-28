// import Image from "next/image";



import { Category, Content, Excerpt, FeaturedImage, ShareButton, Tags, Title } from "./src";
// import { Excerpt, FeaturedImage, Title } from "@/lib/cjs";

export default function Home() {
  const aaa = "Lorem dsfsdfdsff sdf sf sdfdsfsdff xxxx x x xxxx x xx x   x x x xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}

          </a>
        </div>
      </div>
      <article className="relative flex flex-col dark:bg-gray-50">
        <a href="#def" aria-label="Te nulla oportere reprimique his dolorum" className="absolute inset-0 z-10"></a>
        <a href="#def" aria-label="Te nulla oportere reprimique his dolorum">
          <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
        </a>
        <div className="flex flex-col flex-1 p-6">

          <a href="#abc" aria-label="Te nulla oportere reprimique his dolorum" className="relative z-20"></a>
          <a href="#xyz" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 relative z-20">Convenire</a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug relative z-20">Te nulla oportere reprimique his dolorum</h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600 relative z-20">
            <span>June 1, 2020</span>
            <span>2.1K views</span>
          </div>
        </div>
      </article>

      <article className="flex flex-col dark:bg-gray-50 p-6 border border-gray-200 rounded-lg">
        {/* Feature Image */}
        <div className="feature-image">
          <FeaturedImage
            alt="Feature"
            className="object-cover w-full h-52 dark:bg-gray-500"
            src="https://source.unsplash.com/600x400/?blog"
          />
        </div>

        {/* Title */}
        <Title tagName="h3" rel="noopener noreferrer" className="title text-3xl font-bold mt-4">
          Blog Post Title
        </Title>

        {/* Author and Publication Date */}
        <div className="author-date flex items-center justify-between text-sm mt-2 text-gray-600">
          <span className="author">by John Doe</span>
          <span className="publication-date">July 25, 2024</span>
        </div>

        {/* Read Time and Views */}
        <div className="meta-info flex items-center justify-between text-xs mt-1 text-gray-600">
          <span className="read-time">5 min read</span>
          <span className="views">1.5K views</span>
        </div>

        {/* Excerpt */}
        <p className="excerpt mt-4 text-gray-800">
          This is a short summary or snippet of the blog post content. It gives readers an idea of what the post is about.
        </p>

        <Excerpt limitBy="word" limit={10} >
          {aaa}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil qui facilis iusto, minus dolorem quasi harum fuga magni odit praesentium inventore ab ipsum voluptatibus commodi fugit molestiae vitae consequuntur.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil qui facilis iusto, minus dolorem quasi harum fuga magni odit praesentium inventore ab ipsum voluptatibus commodi fugit molestiae vitae consequuntur.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil qui facilis iusto, minus dolorem quasi harum fuga magni odit praesentium inventore ab ipsum voluptatibus commodi fugit molestiae vitae consequuntur.
        </Excerpt>

        {/* Content */}
        <div className="content mt-4 text-gray-900">
          <Content>Here's the main body of the blog post. This is where the full content goes.
            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo at repellat, eligendi excepturi tempora aperiam aspernatur reprehenderit facilis voluptatem explicabo quas labore voluptates consectetur esse ipsa, nam minus hic similique.
          </Content>
          {/* More paragraphs and content */}
        </div>

        <Tags tags={["hello", "world"]}></Tags>
        <Category categories={["hello", "world"]}></Category>

        <ShareButton socialSite="Email" />

        {/* Tags */}
        <div className="tags mt-4 flex flex-wrap text-xs text-gray-600">
          <span className="tag bg-gray-200 px-2 py-1 rounded mr-2">Tag1</span>
          <span className="tag bg-gray-200 px-2 py-1 rounded mr-2">Tag2</span>
          <span className="tag bg-gray-200 px-2 py-1 rounded">Tag3</span>
        </div>

        {/* Share Buttons */}
        <div className="share-buttons mt-4 flex space-x-2">
          <button className="share bg-blue-600 text-white px-3 py-1 rounded">Share on Facebook</button>
          <button className="share bg-blue-400 text-white px-3 py-1 rounded">Share on Twitter</button>
          {/* More share buttons */}
        </div>

        {/* Call to Action */}
        <div className="cta mt-6 bg-blue-100 p-4 rounded">
          <p className="text-lg">Enjoyed this post? Subscribe for more content like this!</p>
          <button className="subscribe mt-2 bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
        </div>

        {/* Related Posts */}
        <div className="related-posts mt-6">
          <h2 className="text-xl font-semibold">Related Posts</h2>
          <ul className="list-none mt-2 space-y-2">
            <li><a href="#related1" className="text-blue-600 hover:underline">Related Post 1</a></li>
            <li><a href="#related2" className="text-blue-600 hover:underline">Related Post 2</a></li>
            <li><a href="#related3" className="text-blue-600 hover:underline">Related Post 3</a></li>
          </ul>
        </div>

        {/* Comments */}
        <div className="comments mt-6">
          <h2 className="text-xl font-semibold">Comments</h2>
          {/* Comments content goes here */}
        </div>

        {/* Author Bio */}
        <div className="author-bio mt-6 bg-gray-100 p-4 rounded flex items-center">
          <img src="https://source.unsplash.com/50x50/?author" alt="Author" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-600">John is a writer and blogger who shares insights on web development and design.</p>
          </div>
        </div>
      </article>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <span><div>ggg</div></span>
    </main>
  );
}
