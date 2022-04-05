import ky from "ky"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import ArticleList from "../components/ArticleList"
import Header from "../components/Header"
import SelectCategory from "../components/SelectCategory"

export default function Category() {

  const router = useRouter()
  const query = router.query.category

  const [data, setData] = useState()

  useEffect(() => {
    if (!query) return
    ky.get(`https://newsapi.org/v2/top-headlines?category=${query}&apiKey=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [query])

  return (
    <div> 
      <Header className='d-flex align-items-center justify-content-center gap-1'>
        Top Headlines in <SelectCategory value={query} /> 
      </Header>
      <ArticleList data={data} />
    </div>
  )
}