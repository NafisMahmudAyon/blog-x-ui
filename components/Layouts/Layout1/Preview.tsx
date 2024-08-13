import { Author, AuthorBio, Blog, BlogAction, Category, Date, FeaturedImage, Title } from '@/app/src'
import posts from '@/components/posts'
import React from 'react'

export const Preview = () => {
  return (
    <>
      <Blog className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4'>
        {posts.slice(0, 4).map((post, index) => {
          return (
            <Blog key={index} className="relative bg-[#f2f7fb] pb-4">
              <BlogAction link={post.link} className='absolute inset-0 z-10' />
              <FeaturedImage src={post.featuredImage} alt='image' className='' />
              <Blog className='px-4'>
                <Category categories={post.categories[0].name} className='mt-4 relative z-20' link={post.categories[0].link} />
                <Title title={post.title} className='text-lg md:text-xl lg:text2xl font-bold my-2 md:my-3' isLink link={post.link} />
                <div className='flex gap-4 md:gap-6 items-center'>
                  <AuthorBio className='flex gap-2 items-center relative z-20' profileImage={post.author.avatar} isLink content={post.author.name} profileLink={post.author.profileLink}>
                    <Author type='avatar' className='w-10' avatarStyle='max-w-full h-auto aspect-square rounded-full ' />
                    <Author type='name' className='font-medium' />
                  </AuthorBio>
                  <Date date={post.date} formatString='YYYY-MM-DD' iconEnabled className='flex items-center gap-2' />
                </div>
              </Blog>
            </Blog>
          )
        })}
      </Blog>
    </>
  )
}
