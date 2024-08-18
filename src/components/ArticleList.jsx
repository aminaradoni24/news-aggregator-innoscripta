import React from "react"
import { useSelector } from "react-redux"

const ArticleList = () => {
  const { filteredArticles, status, error } = useSelector(
    (state) => state.articles
  )

  if (status === "loading") return <p>Loading...</p>
  if (status === "failed") return <p>Error: {error}</p>

  return (
    <div>
      {filteredArticles.map((article, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ width: "100%", height: "auto" }}
            />
          )}
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>
            <strong>Category:</strong> {article.category}
          </p>
          <p>
            <strong>Source:</strong> {article.source}
          </p>
          <p>
            <strong>Published At:</strong>{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <a href={article.url} target='_blank' rel='noopener noreferrer'>
            Read more
          </a>
        </div>
      ))}
    </div>
  )
}

export default ArticleList
