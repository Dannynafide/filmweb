import styles from './scroll.module.scss';

function Scroll({children}) {
  return <div className={styles.scroll}>{children}</div>;
}

export default Scroll;
