import React from 'react'
import { Layout1, Layout2, Layout3 } from './Layouts'
// import * as Layouts from './Layouts'

const PostLayout = () => {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <div className='max-w-[1440px] w-[94%] mx-auto backdrop-blur-md bg-slate-950/30 rounded-lg drop-shadow-2xl shadow-xl border-2 border-transparent hover:border-2 hover:border-black px-2 lg:px-4 py-4 '>
      <Layout1 />
      </div>
      <div className='max-w-[1440px] w-[94%] mx-auto backdrop-blur-md bg-slate-950/30 rounded-lg drop-shadow-2xl shadow-xl border-2 border-transparent hover:border-2 hover:border-black px-2 lg:px-4 py-4 '>
      <Layout2 />
      </div>
      <div className='max-w-[1440px] w-[94%] mx-auto backdrop-blur-md bg-slate-950/30 rounded-lg drop-shadow-2xl shadow-xl border-2 border-transparent hover:border-2 hover:border-black px-2 lg:px-4 py-4 '>
      <Layout3 />
      </div>
    </div>
  )
}

export default PostLayout