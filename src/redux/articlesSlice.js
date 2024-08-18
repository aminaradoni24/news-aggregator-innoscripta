import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  fetchNYTArticles,
  fetchNewsAPIArticles,
  fetchGuardianArticles,
} from "../services/api"

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (query) => {
    const nytArticles = await fetchNYTArticles(query)
    const newsApiArticles = await fetchNewsAPIArticles(query)
    const guardianArticles = await fetchGuardianArticles(query)
    return [...nytArticles, ...newsApiArticles, ...guardianArticles]
  }
)

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    filteredArticles: [],
    status: "idle",
    error: null,
    filters: {
      date: "",
      category: "",
      source: "",
    },
    preferences: {
      preferredCategories: [],
      preferredSources: [],
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload
      state.filteredArticles = state.articles.filter((article) => {
        const matchesDate = state.filters.date
          ? new Date(article.publishedAt || article.pub_date).toDateString() ===
            new Date(state.filters.date).toDateString()
          : true

        const matchesCategory = state.filters.category
          ? article.category &&
            article.category.includes(state.filters.category)
          : true

        const matchesSource = state.filters.source
          ? article.source && article.source.includes(state.filters.source)
          : true

        return matchesDate && matchesCategory && matchesSource
      })
    },
    setPreferences: (state, action) => {
      state.preferences = action.payload
      // Sort articles based on preferences
      state.filteredArticles = state.filteredArticles.sort((a, b) => {
        const aPref = state.preferences.preferredSources.indexOf(a.source)
        const bPref = state.preferences.preferredSources.indexOf(b.source)
        return bPref - aPref // Higher preference sources come first
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.articles = action.payload
        state.filteredArticles = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const { setFilters, setPreferences } = articlesSlice.actions

export default articlesSlice.reducer
