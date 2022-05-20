import { useRouter } from "next/router";
import { useEffect } from "react";
import ky from "ky"

import categories from "../../../constants/categories";
import languages from "../../../constants/languages";
import Header from "../../../components/Header"
import ArticleList from "../../../components/ArticleList"
import SelectCategory from "../../../components/SelectCategory"
import SeletctLanguage from "../../../components/SelectLanguage";


export async function getServerSideProps(context){
  var {category, language} = context.params
  if (!languages.includes(language) || !categories.map(c => c.toLowerCase()).includes(category)) return {props: {data: null}}
  const res = await ky.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=${language}&apiKey=${process.env.API_KEY}`)
  const data = await res.json()

  return { props: {data, language, category}}
}

export default function Category({data, language, category}) {

  const router = useRouter()
  useEffect(() => {
    if (data === null) router.push('/')
  }, [data, router])

  return isNaN(data) && (
    <div> 
      <Header className='d-flex align-items-center justify-content-center gap-1'>
        Top Headlines in 
        <SelectCategory value={category} />
        <SeletctLanguage value={language} category={category} /> 
      </Header>
      <ArticleList data={data} />
    </div>
  )
}