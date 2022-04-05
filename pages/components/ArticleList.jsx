import Article from "./Article"
import Loading from "./Loading"
import styles from '../../styles/Article.module.scss'

export default function ArticleList({data, children}){


  return (
    !data?.articles ? <Loading /> : (
      <div className={`container-fluid ${styles.articles}`}>

        {data.articles.map( article => (
          <div key={article.title} className="row my-4 my-sm-3 justify-content-center">
            <Article data={article} className='col-11 col-sm-8 container' />
          </div>
        ))}

        {children}

    </div>)
  )
}