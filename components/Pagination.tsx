// Pagination.tsx
import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mx-auto border bg-slate-950/30 border-green-600 rounded-lg">
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className={`px-2 md:px-3 lg:px-4 py-2 text-green-600 transition-colors duration-150 rounded-l-lg hover:bg-green-100 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={currentPage === 1}
            >
              {"⫷"}
            </button>
          </li>

          {visiblePages.map((page, index) =>
            typeof page === 'number' ? (
              <li key={index}>
                <button
                  onClick={() => onPageChange(page)}
                  className={`px-2 md:px-3 lg:px-4 py-2 transition-colors duration-150 ${currentPage === page ? 'bg-green-600 text-white' : ' text-green-600 hover:bg-green-100'} ${index === visiblePages.length - 1 && ''}`}
                >
                  {page}
                </button>
              </li>
            ) : (
              <li key={index}>
                {/* <span className="px-2 md:px-3 lg:px-4 py-2 text-green-600">...</span> */}
                  <span className="inline-block h-full rotate-180 text-xs lg:text-base px-2 md:px-3 lg:px-4 py-2 text-green-600 transition-colors duration-150  hover:bg-green-100">°°°</span>
              </li>
            )
          )}

          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className={`px-2 md:px-3 lg:px-4 py-2 text-green-600 transition-colors duration-150 rounded-r-lg hover:bg-green-100 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={currentPage === totalPages}
            >
              {"⫸"}
              {/* {">⊳⊲⨠⪢⪡⪻⪼⫷⫸⇛⇚⇨⇦»«›‹"} */}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
