'use client'
import React, { useState } from 'react';
import { Layout1, Layout2, Layout3, Layout4, Layout5 } from './Layouts';
import Pagination from './Pagination';

const layouts = [Layout1, Layout2, Layout3, Layout4, Layout5, Layout1, Layout2, Layout3, Layout4, Layout5];

const PostLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Set the number of layouts per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLayouts = layouts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {paginatedLayouts.map((LayoutComponent, index) => (
        <div
          key={index}
          className="max-w-[1440px] w-[94%] mx-auto backdrop-blur-md bg-slate-950/30 rounded-lg drop-shadow-2xl shadow-xl border-2 border-transparent hover:border-black px-2 lg:px-4 py-4"
        >
          <LayoutComponent />
        </div>
      ))}
      <Pagination
        totalItems={layouts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PostLayout