import NextLink from 'next/link';
import styles from '../../styles/Link.module.scss'

export default function Link({ href, children, className }) {
  return (
    <NextLink href={href}>
      <a className={`${styles.Link} ${className}`}>
        {children}
      </a>
    </NextLink>
  );
}