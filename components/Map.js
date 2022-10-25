import React from 'react'
import styles from '../styles/Map.module.css';
import Link from "next/link"

function Map() {
  return (
    <div className={styles.homeWrapper}>

        <img className={styles.background} src="/map.PNG"/>
        
        <Link href="/locations/village">
          <div className={styles.villageTrigger + " " + styles.trigger}></div>
        </Link>

        <Link href="/locations/school">
          <div className={styles.schoolTrigger + " " + styles.trigger}></div>
        </Link>
    </div>
  )
}

export default Map