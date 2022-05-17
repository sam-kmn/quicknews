import ky from "ky"
import Header from "../components/Header"
import ArticleList from "../components/ArticleList"
import SelectCategory from "../components/SelectCategory"

export async function getServerSideProps(context){
  const {params} = context
  const {category} = params
  const res = await ky.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=pl&apiKey=${process.env.API_KEY}`)
  const data = await res.json()

  return { props: {data, category}}
}

export default function Category({data, category}) {

  return (
    <div> 
      <Header className='d-flex align-items-center justify-content-center gap-1'>
        Top Headlines in <SelectCategory value={category} /> 
      </Header>
      <ArticleList data={data} />
    </div>
  )
}