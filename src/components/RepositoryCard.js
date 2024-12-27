import React from 'react';
import { FileCode } from 'lucide-react';

const RepositoryCard = ({ repository }) => {
  return (
    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileCode size={24} className="text-gray-600" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{repository.name}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                repository.type === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {repository.type}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <span className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${repository.languageColor}`}></div>
                {repository.language}
              </span>
              <span>{repository.size}</span>
              <span>Updated {repository.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;