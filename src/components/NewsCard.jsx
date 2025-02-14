import React from 'react';

const NewsCard = ({ article }) => {
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-full bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-bold capitalize mb-2">
          {article.title}
        </h2>
        <img
          src={article.urlToImage || 'https://via.placeholder.com/400x200'}
          alt={article.title}
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <p className="text-sm">
          {truncateDescription(article.description || 'No description available', 100)}
        </p>
      </div>
      <div className="p-4 bg-slate-200">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-slate-300 hover:bg-slate-600 hover:text-slate-200 rounded-md transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;