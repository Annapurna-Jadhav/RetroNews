import { useState, useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import MultipleButtons from './components/MultipleButtons';


function App() {

  return (
    <>
      <div className='bg-image'>
        <h1 className='text-gray-700 text-8xl text-center p-4'>The Retro News</h1>
        <div className='w-full h-1 bg-gray-700'></div>
        <h2 className='text-center w-3/5 text-5xl m-auto mt-10 mb-6 text-emerald-950'>The world is changing, stay ahead,
          With stories fresh, in fonts well-read.
          A vintage touch, a modern view,
          News reborn, just made for you!</h2>

        <SearchBar />
        <MultipleButtons />

      </div>
    </>

  );
}

export default App;