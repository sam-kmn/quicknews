import ky from 'ky'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import SelectCategory from './components/SelectCategory'

export async function getStaticProps(){
  const res = await ky.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+process.env.API_KEY)
  const data = await res.json()

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default function Home({data}) {
  // const test = []
  return (
    <div>
      <Header className='d-flex align-items-center justify-content-center'>
        Top Headlines in <SelectCategory value={'all categories'} /> 
      </Header>
      <ArticleList data={data} />
    </div>
  )
}
