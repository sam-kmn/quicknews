import Search from './Search'
import styles from '../styles/Navbar.module.scss'
import LinkStyles from '../styles/Link.module.scss'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <a href={'/'} className={`${styles.brand} ${LinkStyles.Link}`}>QuickNews</a>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar