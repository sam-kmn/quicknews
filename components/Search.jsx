import {useState} from 'react'
import { useRouter } from 'next/router'
import {FiSearch} from 'react-icons/fi'
import styles from '../styles/Search.module.scss'

export default function Search(){
  const [filter, setFilter] = useState('')
  const router = useRouter()

  const submit = (event) => {
    event.preventDefault()
    if(filter) router.push('/search/'+filter)
    setFilter('')
    // console.log(router.asPath)
  }

  return (
    <form onSubmit={ e => submit(e)} className={styles.search}>
      <FiSearch className={styles.icon} />
      <input value={filter} onChange={e => setFilter(e.target.value)} className={styles.input} type="text" placeholder="Search..."/>
    </form>
  )
}