import React from 'react'
import styles from '../styles/Map.module.css';
import Link from "next/link"

function Map() {
  return (
    <div className={styles.homeWrapper}>

        <img className={styles.background} src="/bg.PNG"/>
        <Link href="/locations/village">
          <div className={styles.villageTrigger}></div>
        </Link>
    </div>
  )
}

export default Map