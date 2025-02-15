import React from 'react'
import './Button.css'

const Button = ({ keyword }) => {
  return (
    <button className="relative block group">
      <span className="absolute inset-0 rounded-lg"></span>
      <div className="buttonColor transition relative border-none rounded-3xl group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-2">
          <p className="text-xl font-outerSans font-medium text-black">{keyword}</p>
        </div>
      </div>
    </button>
  )
}

export default Button