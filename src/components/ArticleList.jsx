import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import newsImage from "../assets/news.jpg"
const ArticleList = () => {
  const { filteredArticles, status, error } = useSelector(
    (state) => state.articles
  )

  if (status === "loading") return <p>Loading...</p>
  if (status === "failed") return <p>Error: {error}</p>

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {filteredArticles.map((article, index) => (
        <Link
          key={index}
          to={article.url}
          className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
          target='_blank'
        >
          <figure className='px-4 pt-4'>
            <img
              src={article.imageUrl || newsImage}
              alt={article.title}
              className='rounded-xl h-64 md:h-48 w-full object-cover'
            />
          </figure>

          <div className='card-body items-center'>
            <h2 className='card-title capitalize tracking-wider text-primary'>
              {article.title}
            </h2>
            <span>{article.description}</span>
            <div className='w-full'>
              <p>
                <strong>Category:</strong> {article.category}
              </p>
              <p>
                <strong>Source:</strong> {article.source}
              </p>
              <p>
                <strong>Published At:</strong>
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArticleList
