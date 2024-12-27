import React, { useState } from 'react';
import { repositories } from '../data/repositories';
import RepositoryCard from './RepositoryCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { usePagination } from '../hooks/usePagination';
// import '../styles.css';

const ITEMS_PER_PAGE = 5;

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { paginatedItems, totalPages } = usePagination({
    items: filteredRepositories,
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage,
  });

  // Reset to first page when search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600">{filteredRepositories.length} total repositories</p>
        </div>
        
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            Refresh All
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      <SearchBar onChange={setSearchQuery} />

      <div className="space-y-4">
        {paginatedItems.map((repo) => (
          <RepositoryCard key={repo.name} repository={repo} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default RepositoryList;