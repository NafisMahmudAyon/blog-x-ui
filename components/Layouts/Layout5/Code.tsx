import CodeSnippet from '@/components/CodeSnippet'
import React from 'react'

export const Code = () => {
  return (
    <CodeSnippet content={`<Blog className='relative text-white'>
  <BlogAction link={post.link} className='absolute inset-0 z-10' />
  <FeaturedImage src="https://via.placeholder.com/600x400" alt='image' className='object-cover h-full' />
  <Blog className='absolute bottom-0 bg-gradient-to-b from-black/0 to-gray-900/85 w-full px-4 pb-4 py-2'>
    <Title title={post.title} className='text-lg md:text-xl lg:text2xl font-bold my-2 md:my-3' isLink link={post.link} />
    <Author type='name' content={post.author.name} prefix='By' className='font-bold flex gap-1 text-xs' prefixStyle='font-light ' />
  </Blog>
    <Category categories={post.categories[0].name} className='mt-4 absolute top-1 right-4 bg-pink-600 py-1 px-2 text-xs rounded z-20' link={post.categories[0].link} />
  <Blog className='px-4 hidden'>
    <div className='flex gap-4 md:gap-6 items-center'>
      <AuthorBio className='flex gap-2 items-center relative z-20' profileImage={post.author.avatar} isLink content={post.author.name} profileLink={post.author.profileLink}>
        <Author type='avatar' className='w-10' avatarStyle='max-w-full h-auto aspect-square rounded-full ' />
      </AuthorBio>
      <Date date={post.date} formatString='YYYY-MM-DD' iconEnabled className='flex items-center gap-2' />
    </div>
  </Blog>
</Blog>`} />
  )
}
