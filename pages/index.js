import { Suspense } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("../components/Map"),
  { suspense: true }
);

export default function Home() {

  return (
    <>
      <Suspense fallback={<p style={{color: "white"}}>loading...</p>}>
        <Map />
      </Suspense>
    </>
  )
}
