import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import MultipleButtons from './components/MultipleButtons';
import design from './assets/design.jpg';
import NewsCard from './components/NewsCard';
import backgroundImage from './assets/download.jpg'

function App() {
  const [news, setNews] = useState([]);

  return (
    <div className="min-h-screen bg-image" style={{backgroundImage:`url(${backgroundImage})`}}>
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <h1 className="text-gray-700 text-6xl md:text-8xl text-center flex items-center justify-center">
            The Retro
            <span className="block">News</span>
            <div className="p-2 mx-4 rounded-full transform hover:scale-110 transition-transform duration-300">
              <img src={design} className="grayscale-50 rounded-full w-16 h-16 md:w-20 md:h-20" alt="design" />
            </div>
          </h1>
        </div>
        
        <div className="w-full h-1 bg-gray-700 mb-8"></div>
        <MultipleButtons />
        <div className="w-full h-1 bg-gray-700 my-8"></div>
      </header>

      <main className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl leading-relaxed text-gray-700 mb-4 ">
            The world is changing, stay ahead,
            <br />
            With stories fresh,
            <br />
            A vintage touch, a modern view,
            <br />
            News reborn,
          </h2>
          <p className="text-4xl md:text-6xl iceberg-regular text-gray-700">
            just made for you!
          </p>
        </div>

        <SearchBar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </main>
    </div>
  );
}

export default App;
