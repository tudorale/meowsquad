import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Map.module.css";

const Map = dynamic(
  () => import("../components/Map"),
  { suspense: true }
);

export default function Home() {

  return (
    <>
      <Suspense fallback={<div className={styles.spinner}></div>}>
        <Map />
      </Suspense>
    </>
  )
}
