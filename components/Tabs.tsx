'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PostLayout from './PostLayout';
import SinglePost from './SinglePost';

const tabs = [
  { id: 'postLayout', label: 'Post Layout' },
  { id: 'gridLayout', label: 'Grid Layout' },
  { id: 'singlePost', label: 'Single Post Page' },
];

const Tabs = () => {
  const [selected, setSelected] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex gap-2 justify-start md:justify-center overflow-x-scroll">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelected(tab.id)}
            className={`relative rounded-full px-3 py-1.5 text-sm font-medium text-nowrap text-white transition ${selected === tab.id ? '' : 'hover:text-white/60'
              }`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {selected === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
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
          {selected === 'postLayout' && <PostLayout />}
          {selected === 'gridLayout' && <PostLayout />}
          {selected === 'singlePost' && <SinglePost />}
        </motion.div>
      </div>
    </div>
  );
};

export default Tabs;
