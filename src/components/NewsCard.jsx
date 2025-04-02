import React from 'react'
import design from '../assets/design.jpg'

const NewsCard = () => {
    return (
        <div className="group transform transition-all duration-300 hover:-translate-y-2">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                    <img
                        src={design}
                        alt=""
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 line-clamp-2">
                           title
                        </h2>
                        <p className="text-gray-600 line-clamp-3">
                        content:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </p>
                    </div>
                    <button
                        type="button"
                        className="mt-6 w-full py-3 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Read more</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
