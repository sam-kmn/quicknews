import { useRouter } from 'next/router'
import categories from '../constants/categories'
import styles from '../styles/Category.module.scss'

export default function SelectCategory({value}){

  const router = useRouter()

  const handleSelect = (event) => {
    const category = (event.target.value).toLowerCase()
    if (category === 'all categories') return router.push('/')
    router.push('/category/us/' + category )
  }

  return (
    <select value={value} onChange={e => handleSelect(e)} className={`form-select ${styles.select}`} aria-label="Default select example">
      <option>All categories</option>
      {categories.map( category => <option key={category} value={category.toLowerCase()}>{category}</option> )}
    </select>
  )
}