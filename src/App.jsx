import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import MultipleButtons from './components/MultipleButtons';
import designImage from './assets/design.jpg';
import newsBackImage from './assets/newsBack.jpg';
import design2 from './assets/design2.jpg';
import singleLine from './assets/singleLine.jpg';
import design from './assets/design.jpg';
function App() {
  return (
    <>
      <div className='bg-image iceberg-regular'>

      <h1 className='text-gray-700 text-8xl text-center p-4 flex items-center justify-center'>
          The Retro
          
          News
          {/* <div className="p-2 mx-4 rounded-full">
            <img src={design} className="w-20 h-20 " alt="design" />
          </div> */}
        </h1>
        
        <div className='w-full h-1 bg-gray-700'></div>
        <MultipleButtons />
        <div className='w-full h-1 bg-gray-700'></div>
        <div className=''>
          
      
      <h2 className='text-center w-4/5 text-5xl m-auto mt-10 mb-6 text-gray-700'>
          The world is changing, stay ahead,
          With stories fresh, in fonts well-read.
          A vintage touch, a modern view,
          News reborn, just made for you!
        </h2>

        <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;