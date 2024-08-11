'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Preview } from './Preview';
import { Code } from './Code';

const tabs = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' },
];

export const Layout1 = () => {
  const [selected, setSelected] = useState(tabs[0].id);

  return (
    <div>
      <h3 
      className='w-[max-content] mx-auto text-xl font-medium text-center text-white my-4 border-b-2 border-transparent hover:border-b-2 hover:border-white transition-all duration-500 ease-in-out '
      >Layout 1</h3>
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelected(tab.id)}
            className={`relative px-3 py-1.5 text-sm font-medium text-white transition ${selected === tab.id ? ' ' : 'hover:text-white/60'
              }`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {selected === tab.id && (
              <motion.span
                // layoutId="bubble"
                className="absolute h-[2px] bg-white"
                initial={{ width: '0%', opacity: 0, bottom: 0, left: -0 }}
                animate={{ width: '100%', opacity: 1, left: 0 }}
                exit={{ width: '0%', opacity: 0, bottom: 0, left: -1000 }}
                transition={{ duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <motion.div
          key={selected} // Adding key to ensure proper re-rendering
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        >
          {selected === 'preview' && <Preview />}
          {selected === 'code' && <Code />}
        </motion.div>
      </div>
    </div>
  )
}
