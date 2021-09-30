import React from 'react'

export default function Button({ theme, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${theme}-500 text-gray-100 p-4 w-full rounded-md tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg`}
    >
      {text}
    </button>
  )
}
