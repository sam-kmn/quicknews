import { useRouter } from 'next/router'
import styles from '../../styles/Category.module.scss'

export default function SelectCategory({value}){

  const router = useRouter()
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']

  const handleSelect = (event) => {
    const category = (event.target.value).toLowerCase()
    if (category === 'all categories') return router.push('/')
    router.push('/category/' + category )
  }

  return (
    <select value={value} onChange={e => handleSelect(e)} className={`form-select ${styles.select}`} aria-label="Default select example">
      <option>All categories</option>
      {categories.map( category => <option key={category} value={category.toLowerCase()}>{category}</option> )}
    </select>
  )
}