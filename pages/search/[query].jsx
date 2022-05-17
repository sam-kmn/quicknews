import ky from 'ky'
import Header from '../components/Header'
import ArticleList from "../components/ArticleList"

export async function getServerSideProps(context){
  const {query} = context.params
  const response = await ky.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`)
  const data = await response.json()

  return { props: {data, query}}
}

export default function Search({data, query}){

  return (
    <div>
      <Header> Search results: {data?.totalResults} </Header>
      <ArticleList data={data} />
    </div>
  )
}