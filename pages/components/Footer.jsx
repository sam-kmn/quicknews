import styles from '../../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <header className='hot-gradient'>Newsletter</header>
      <p>Lorem ipsum dolor sit amet consectetur. Nihil, at?</p>
      <input type="email" placeholder='E-Mail' />
      <button className='btn btn-dark p-2'>Subscribe</button>
    </div>
  )
}

export default Footer