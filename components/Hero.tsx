'use client'
import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="min-h-[100dvh] px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center ">
      <motion.h1 initial={{ opacity:0, y:200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl leading-normal font-bold relative bg-clip-text text-transparent bg-[#343a40] drop-shadow-xl  ">blog <span className="bg-clip-text text-transparent bg-[#343a40]">-</span>x<span className="bg-clip-text text-transparent bg-[#343a40]">-</span>ui</motion.h1>
      <motion.p initial={{ opacity: 0, y: 200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-gray-300">A complete blog UI.</motion.p>
    </div>
  )
}

export default Hero