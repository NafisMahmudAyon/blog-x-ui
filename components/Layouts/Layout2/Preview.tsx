import { Author, AuthorBio, Blog, BlogAction, Category, Date, FeaturedImage, Title } from '@/app/src'
import posts from '@/components/posts'
import React from 'react'

export const Preview = () => {
  return (
    <>
      <Blog className='grid gap-6'>
        {posts.slice(5, 8).map((post, index) => {
          return (
            <Blog key={index} className="relative grid grid-cols-1 md:grid-cols-3 bg-white">
              <BlogAction link={post.link} className='absolute inset-0 z-10' />
              <FeaturedImage src={post.featuredImage} alt='image' className='md:col-start-1 md:col-end-2 md:h-full md:object-cover ' />
              <Blog className='md:col-start-2 md:col-end-4 grid content-center gap-1 md:gap-2 py-3 md:py-4 px-4'>
                <Category categories={post.categories[0].name} className='relative z-20' link={post.categories[0].link} />
                <Title title={post.title} className='text-lg md:text-xl lg:text2xl font-bold my-2 md:my-3' isLink link={post.link} />
                <div className='flex gap-4 md:gap-6 items-center'>
                  <AuthorBio className='flex gap-2 items-center relative z-20' profileImage={post.author.avatar} content={post.author.name} profileLink={post.author.profileLink} isLink>
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
