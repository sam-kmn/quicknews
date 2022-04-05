import styles from '../../styles/Loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}