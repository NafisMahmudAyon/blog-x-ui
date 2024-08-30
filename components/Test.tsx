'use client'
import { Author, AuthorBio, Blog, BlogAction, Category, Date, FeaturedImage, Title } from '@/app/src';
import React, { useState } from 'react';
import posts from './posts';

export const ViewportChanger = () => {
  const [viewport, setViewport] = useState('desktop');

  const handleViewportChange = (size:string) => {
    setViewport(size);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleViewportChange('mobile')}
          className={`px-4 py-2 ${viewport === 'mobile' ? 'bg-green-600 text-white' : 'bg-white text-green-600'} transition-colors duration-150 border border-green-600 rounded focus:shadow-outline`}
        >
          Mobile
        </button>
        <button
          onClick={() => handleViewportChange('tablet')}
          className={`px-4 py-2 ${viewport === 'tablet' ? 'bg-green-600 text-white' : 'bg-white text-green-600'} transition-colors duration-150 border border-green-600 rounded focus:shadow-outline`}
        >
          Tablet
        </button>
        <button
          onClick={() => handleViewportChange('desktop')}
          className={`px-4 py-2 ${viewport === 'desktop' ? 'bg-green-600 text-white' : 'bg-white text-green-600'} transition-colors duration-150 border border-green-600 rounded focus:shadow-outline`}
        >
          Desktop
        </button>
      </div>

      <div className="section-container">
        <div
          className={`section-content ${viewport === 'mobile' ? 'mobile-view' : viewport === 'tablet' ? 'tablet-view' : 'desktop-view'}`}
        >
          <div className="@container flex items-center gap-3">
            <div className="@[16.5rem]:h-12 @[16.5rem]:w-12 border-mono-4 bg-mono-4 relative h-10 w-10 shrink-0 overflow-hidden rounded-full border">
              {/* <Image
                src="/profile.jpeg"
                alt="Profile picture"
                layout="fill"
                sizes="100px"
              /> */}
            </div>
            <div className="flex w-full items-center justify-between gap-6">
              <div className="flex flex-col">
                <p className="text-pretty text-base font-bold !leading-[1.2]">
                  Sean Grindal
                </p>
                <p className="@[16.5rem]:block @[32.5rem]:text-white  text-mono-2 hidden text-xs leading-[1.1]">
                  Software Engineer at Company
                </p>
              </div>
              <div className="@[20.5rem]:block hidden pr-4">
                <a target="_blank" href={`https://x.com/seangrindal`}>
                  {/* <Icon icon="x-social" height={16} /> */}X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-content {
          border: 1px solid #ccc;
          padding: 20px;
        }

        .mobile-view {
          width: 320px;
        }

        .tablet-view {
          width: 768px;
        }

        .desktop-view {
          width: 1024px;
        }
      `}</style>
    </div>
  );
};
