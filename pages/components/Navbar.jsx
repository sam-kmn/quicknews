import Link from './Link'
import Search from './Search'
import styles from '../../styles/Navbar.module.scss'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <Link href={'/'} className={styles.brand}>QuickNews</Link>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar