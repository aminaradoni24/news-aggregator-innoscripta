import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import newsImage from "../assets/news.jpg"
import Loading from "./Loading"
import ErrorElement from "./ErrorElement"
const ArticleList = () => {
  const { filteredArticles, status, error } = useSelector(
    (state) => state.articles
  )

  if (status === "loading") return <Loading />
  if (status === "failed") return <ErrorElement />

  return (
    <>
      {filteredArticles.length > 0 ? (
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
      ) : (
        <div class='pt-12 flex justify-center'>
          <div role='alert' className='alert alert-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='h-6 w-6 shrink-0 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span> Please search for articles...</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ArticleList
