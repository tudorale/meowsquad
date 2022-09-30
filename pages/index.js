import styles from '../styles/Home.module.css';
import Link from "next/link"

export default function Home() {

  return (
    <>
      <div className={styles.homeWrapper}>

        <img className={styles.background} src="/bg.PNG"/>
        <Link href="/locations/village">
          <div className={styles.villageTrigger}></div>
        </Link>
      </div>
    </>
  )
}
