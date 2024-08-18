import axios from "axios"

const NYT_API_KEY = import.meta.env.VITE_APP_NYT_API_KEY
const NEWS_API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY
const GUARDIAN_API_KEY = import.meta.env.VITE_APP_GUARDIAN_API_KEY

export const fetchNYTArticles = async (query) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYT_API_KEY}`
    )
    return response.data.response.docs.map((article) => ({
      title: article.headline.main,
      description: article.abstract,
      url: article.web_url,
      category: article.section_name,
      source: "The New York Times",
      publishedAt: article.pub_date,
      imageUrl: article.multimedia?.length
        ? `https://www.nytimes.com/${article.multimedia[0].url}`
        : null,
    }))
  } catch (error) {
    console.error("Error fetching NYT articles:", error)
    return []
  }
}

export const fetchNewsAPIArticles = async (query) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
    )
    return response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      category: article.category || "General",
      source: article.source.name,
      publishedAt: article.publishedAt,
      imageUrl: article.urlToImage,
    }))
  } catch (error) {
    console.error("Error fetching NewsAPI articles:", error)
    return []
  }
}

export const fetchGuardianArticles = async (query) => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}&show-fields=thumbnail,trailText`
    )
    return response.data.response.results.map((article) => ({
      title: article.webTitle,
      description: article.fields ? article.fields.trailText : "",
      url: article.webUrl,
      category: article.sectionName,
      source: "The Guardian",
      publishedAt: article.webPublicationDate,
      imageUrl: article.fields?.thumbnail,
    }))
  } catch (error) {
    console.error("Error fetching Guardian articles:", error)
    return []
  }
}
