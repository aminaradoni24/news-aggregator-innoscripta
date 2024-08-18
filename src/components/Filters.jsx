import React, { useState } from "react"

const categories = [
  "General",
  "Business",
  "Technology",
  "Health",
  "Science",
  "Sports",
]
const sources = ["The New York Times", "NewsAPI", "The Guardian"]

const Filters = ({ onFilterChange }) => {
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [source, setSource] = useState("")

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    applyFilters(e.target.value, source)
  }

  const handleSourceChange = (e) => {
    setSource(e.target.value)
    applyFilters(category, e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
    applyFilters(category, source, e.target.value)
  }

  const applyFilters = (category, source, date) => {
    onFilterChange({
      date: date || "", // Provide default empty string if undefined
      category: category || "", // Provide default empty string if undefined
      source: source || "", // Provide default empty string if undefined
    })
  }
  const handleClearFilters = () => {
    setDate("")
    setCategory("")
    setSource("")
    applyFilters("", "", "")
  }

  return (
    <div className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-end'>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text capitalize'>Date:</span>
        </label>
        <input
          type='date'
          value={date}
          onChange={handleDateChange}
          className='input input-bordered input-sm'
        />
      </div>

      <div className='form-control'>
        <label htmlFor='categories' className='label'>
          <span className='label-text capitalize'>Category:</span>
        </label>
        <select
          name='categories'
          className='select select-bordered select-sm'
          value={category}
          onChange={handleCategoryChange}
        >
          <option value=''>All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className='form-control'>
        <label htmlFor='sources' className='label'>
          <span className='label-text capitalize'>Source:</span>
        </label>
        <select
          name='sources'
          className='select select-bordered select-sm'
          value={source}
          onChange={handleSourceChange}
        >
          <option value=''>All Sources</option>
          {sources.map((src, index) => (
            <option key={index} value={src}>
              {src}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => applyFilters(category, source, date)}
        className='btn btn-primary btn-sm '
      >
        Apply Filters
      </button>
      <button onClick={handleClearFilters} className='btn btn-secondary btn-sm'>
        Clear Filters
      </button>
    </div>
  )
}

export default Filters
