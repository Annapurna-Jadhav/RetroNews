import { useState, useEffect } from 'react';
import Button from './components/Button';
import './App.css';
import NewsCard from './components/NewsCard';
import SearchBar from './components/SearchBar';

function App() {
  const [search, setSearch] = useState('india');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY || "98a521e7abd540b8ab40181c8cd03605";

  const getNews = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2021-09-10&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      if (data.articles) {
        setNews(data.articles);
      } else {
        setError('No articles found');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews(search);
  }, [search]);

  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <div className="bg-image min-h-screen p-4">
      <h1 className="custom-heading">
        Let's Explore the NEWS
      </h1>
      <div className="border-b-2 border-black w-full my-4"></div>
      <SearchBar onSearch={handleSearch} />
      <Button />
      {loading && <p className="text-center text-black">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          !loading && <p className="text-center text-black col-span-full">No news articles found.</p>
        )}
      </div>
    </div>
  );
}

export default App;