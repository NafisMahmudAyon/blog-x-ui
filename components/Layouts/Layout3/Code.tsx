import CodeSnippet from '@/components/CodeSnippet'
import React from 'react'

export const Code = () => {
  return (
    <CodeSnippet content={`<Blog className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
  {posts.slice(0, 4).map((post, index) => {
    return (
      <Blog key={index} className="relative bg-white">
        <BlogAction link={post.link} className='absolute inset-0 z-10' />
        <FeaturedImage src={post.featuredImage} alt='image' className='max-w-auto h-auto object-cover ' />
        <Blog className='grid gap-1 md:gap-2 py-3 md:py-4 px-4'>
          <Blog className='flex gap-4 md:gap-6 items-center'>
            <AuthorBio className='flex gap-2 items-center relative z-20'>
              <Author type='avatar' profileImage={post.author.avatar} name={post.author.name} profileLink={post.author.profileLink} isLink className='w-10' avatarStyle='max-w-full h-auto aspect-square rounded-full ' />
              <Author type='name' name={post.author.name} className='font-medium' isLink profileLink={post.author.profileLink} />
            </AuthorBio>
            <Date date={post.date} formatString='MMM DD, YY' iconEnabled className='flex items-center gap-2' />
          </Blog>
          <Title title={post.title} className='text-lg md:text-xl lg:text2xl font-bold my-2 md:my-3' isLink link={post.link} />
          <Excerpt className=''>
            {post.excerpt}
          </Excerpt>
          <ReadMore className='relative bg-gray-900 text-white px-3 py-2 inline-block w-max rounded-md hover:bg-gray-900/95 z-20 ' />
        </Blog>
      </Blog>
    )
  })}
</Blog>`} />
  )
}
