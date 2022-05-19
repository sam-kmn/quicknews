import { useRouter } from 'next/router'
import languages from '../constants/languages'
import styles from '../styles/Category.module.scss'

export default function SeletctLanguage({value, category}){

  const router = useRouter()
  const handleSelect = (event) => {
    router.push(`/category/${event.target.value}/${category}`)
  }

  return (
    <select value={value} onChange={handleSelect} className={`form-select ${styles.select}`} aria-label="Default select example">
      {languages.map( lng => <option key={lng} value={lng.toLowerCase()}>{lng.toUpperCase()}</option> )}
    </select>
  )
}