import React from 'react'
import './Button.css'

const SearchBar = () => {
  return (
    <div className='flex items-center justify-between p-3 m-auto mt-8 rounded-lg bg-amber-100 text-xl border-none px-6 w-3/5 placeholder-gray-500  '>

      <input
        className="border-none outline-0"
        placeholder="Enter anything..."
      />
     
      <button className="ml-0 text-gray-500 cursor-pointer hover:animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"
          />
        </svg>
      </button>

    </div>
  )
}

export default SearchBar
