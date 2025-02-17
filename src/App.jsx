import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import MultipleButtons from './components/MultipleButtons';

import design from './assets/design.jpg';
import NewsCard from './components/NewsCard';
function App() {
  const [news,setNews]= useState([]);
  

  return (
    <>
      <div className='bg-image iceberg-regular'>

      <h1 className='text-gray-700 text-8xl text-center p-4 flex items-center justify-center'>
          The Retro
          
          News
          <div className="p-2 mx-4 rounded-full">
            <img src={design} className="grayscale-50 rounded-full w-20 h-20 " alt="design" />
          </div>
        </h1>
        
        <div className='w-full h-1 bg-gray-700'></div>
        <MultipleButtons />
        <div className='w-full h-1 bg-gray-700'></div>
        <div className=''>
          
      
      <h2 className='text-center w-4/5 leading-15 text-5xl m-auto mt-10 mb-6 text-gray-700'>
          The world is changing, stay ahead,
          With stories fresh,
          A vintage touch, a modern view,
          News reborn,
          <pre className='text-center w-4/5 text-6xl m-auto mt-4 iceberg-regular mb-18   text-gray-700'>
           just made for you!
          </pre>
        </h2>

        <SearchBar />

        <br/>
        <NewsCard/>
        </div>
      </div>
    </>
  );
}

export default App;