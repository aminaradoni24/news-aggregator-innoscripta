import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setPreferences } from "../redux/articlesSlice"

const categories = [
  "General",
  "Business",
  "Technology",
  "Health",
  "Science",
  "Sports",
]
const sources = ["The New York Times", "NewsAPI", "The Guardian"]

const PreferencesPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [preferences, setPreferencesState] = useState({
    preferredCategories: "",
    preferredSources: "",
  })

  useEffect(() => {
    const savedPreferences = JSON.parse(
      localStorage.getItem("newsPreferences")
    ) || {
      preferredCategories: "",
      preferredSources: "",
    }
    setPreferencesState(savedPreferences)
  }, [])

  const handleCategoryChange = (e) => {
    setPreferencesState((prev) => ({
      ...prev,
      preferredCategories: e.target.value,
    }))
  }

  const handleSourceChange = (e) => {
    setPreferencesState((prev) => ({
      ...prev,
      preferredSources: e.target.value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem("newsPreferences", JSON.stringify(preferences))
    dispatch(setPreferences(preferences))
    navigate("/")
  }

  return (
    <section className='align-element py-10'>
      <h1 className='text-2xl font-bold mb-4'>Manage Your Preferences</h1>
      <div className='mb-4'>
        <label htmlFor='categories' className='block mb-2'>
          Preferred Category:
        </label>
        <select
          id='categories'
          value={preferences.preferredCategories}
          onChange={handleCategoryChange}
          className='select select-bordered w-full'
        >
          <option value=''>Select a category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className='mb-4'>
        <label htmlFor='sources' className='block mb-2'>
          Preferred Source:
        </label>
        <select
          id='sources'
          value={preferences.preferredSources}
          onChange={handleSourceChange}
          className='select select-bordered w-full'
        >
          <option value=''>Select a source</option>
          {sources.map((src, index) => (
            <option key={index} value={src}>
              {src}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSave} className='btn btn-primary mt-4'>
        Save Preferences
      </button>
    </section>
  )
}

export default PreferencesPage
