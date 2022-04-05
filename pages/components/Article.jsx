import styles from '../../styles/Article.module.scss'
// import '../../styles/Link.module.scss'
import {useState, useEffect} from 'react'

const Article = ({data, ...props}) => {
  
  const [date, setDate] = useState()
  
  useEffect(() => {
    setDate(new Date(data.publishedAt).toLocaleDateString())
  }, [data])
  

  return (
    <div {...props} >
      <a href={data.url} className={`row ${styles.article} p-0`}>

        <div className="col-12 col-xl-6">
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{data.title}</p>
          <p className={`d-none d-lg-block ${styles.desc}`}>{data.description}</p>
        </div>

        <div className="col-12 col-xl-5 p-0">
          <img src={data.urlToImage} className="img-fluid p-0 p-xl-2" alt="" />
        </div>
      </a>
    </div>
  )
}

export default Article