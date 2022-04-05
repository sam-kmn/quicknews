import Search from './Search'
import styles from '../../styles/Navbar.module.scss'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <a href={'/'} className={styles.brand}>QuickNews</a>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar