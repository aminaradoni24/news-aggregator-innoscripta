import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <div className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 items-end'>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text capitalize'>Search for articles...</span>
        </label>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for articles...'
          className='input input-bordered input-sm'
        />
      </div>

      <button onClick={handleSearch} className='btn btn-primary btn-sm '>
        Search
      </button>
    </div>
  )
}

export default SearchBar
