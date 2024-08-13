import CodeSnippet from '@/components/CodeSnippet'
import React from 'react'

export const Code = () => {
  return (
    <CodeSnippet content={`
<Blog key={index} className="relative bg-white">
  <BlogAction link={post.link} className='absolute inset-0 z-10' />
  <FeaturedImage src={post.featuredImage} alt='image' className='max-w-auto aspect-square object-cover ' />
  <Blog className='absolute bottom-0 bg-gray-900/75 text-white w-full grid gap-1 md:gap-2 py-3 md:py-4 px-4'>
    <Category categories={post.categories[0].name} className='relative w-max after:content-[""] after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-[2px] after:bg-lime-600 ' />
    <Title title={post.title} className='text-lg md:text-xl lg:text2xl font-bold my-2 md:my-3' isLink link={post.link} />
  </Blog>
</Blog>`} />
  )
}
