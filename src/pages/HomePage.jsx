import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import ArticleList from "../components/ArticleList"
import Filters from "../components/Filters"
import { fetchArticles, setFilters } from "../redux/articlesSlice"
const HomePage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { filters } = useSelector((state) => state.articles)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const searchQuery = queryParams.get("search") || ""
    const dateFilter = queryParams.get("date") || ""
    const categoryFilter = queryParams.get("category") || ""
    const sourceFilter = queryParams.get("source") || ""

    // Apply filters from URL
    dispatch(
      setFilters({
        date: dateFilter,
        category: categoryFilter,
        source: sourceFilter,
      })
    )

    // Fetch articles with the search query
    if (searchQuery) {
      dispatch(fetchArticles(searchQuery))
    }
  }, [location.search, dispatch])

  const handleSearch = (query) => {
    navigate(
      `/?search=${query}&date=${filters.date}&category=${filters.category}&source=${filters.source}`
    )
  }

  const handleFiltersChange = (newFilters) => {
    navigate(
      `/?search=${filters.search || ""}&date=${
        newFilters.date || ""
      }&category=${newFilters.category || ""}&source=${newFilters.source || ""}`
    )
    dispatch(setFilters(newFilters))
  }

  return (
    <section className='align-element'>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFiltersChange} />
      <ArticleList />
    </section>
  )
}

export default HomePage
