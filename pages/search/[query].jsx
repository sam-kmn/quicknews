import ky from 'ky'
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import ArticleList from "../components/ArticleList"
import Header from '../components/Header'

export default function Search(){

  const router = useRouter()
  const query = router.query.query
  const [pageSize, setPageSize] = useState(20)
  const loadMore = () => { if(pageSize < 100) setPageSize(pageSize + 20) }
  const [data, setData] = useState()

  useEffect(() => {
    if (!query) return
    ky.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}&pageSize=${pageSize}`)
      .then(res => res.json())
      .then(data => setData(data))
      // .catch(() => router.push('/404'))
  }, [query, pageSize])

  return (
    <div>
      <Header> Search results: {data?.totalResults} </Header>
      <ArticleList data={data}>

        {pageSize !== 100 ? (
          <div className='d-flex justify-content-center align-items-center p-4'>
            <button className='btn btn-dark' onClick={loadMore}>Load more</button>
          </div>
        ) : <></>}

      </ArticleList>


    </div>
  )
}