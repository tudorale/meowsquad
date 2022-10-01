import React from 'react'
import styles from "../../styles/Village.module.css";

function village() {
  return (
    <div className={styles.village}>
        <img className={styles.image} src="/village-min.png"></img>

        <div className={styles.text}>
            <p className={styles.chapterTitle}>THE BEGINNING OF THE WAY</p>

            <p>Welcome to the first location that will open your eyes; Meowvillage. Mostly elderly cats live here. They are engaged in agriculture or, for example, beekeeping like a man in a fountain.</p>
            <p>It is a place full of tranquility, no one is in a hurry, life goes on as usual here. In the morning, slowly, all cats go about their business: adults to work, kids to kindergartens and schools. Just like you and me, isn&apos;t it? There are several kilometers between the village and the nearest town, but this is not a problem, because there is a bus that goes there every hour.</p>
            <p>I am sure each of you would like to be in this very beautiful and magical place right now, and understandably so; being here is like slowing down time. After living in a metropolis where everyone is always in a hurry, Meowvillage will give you a chance to unwind and be yourself.</p>
            <p>Go to the river, fish there or swim. Words cannot describe how vibrant and gorgeous this place is. Unfortunately, it will not be possible to depict the beauty of this place in words, but I can tell you a little more, but shhh, this is a secret. Right behind the houses that you see there is a small lake that is surrounded by a beautiful forest. There are also fields sown with wheat, corn and other crops. It is truly heaven on earth…</p>
            <p>At this moment your mind is probably already yearning for a soothing stay in Meowvillage. You could be lying on the fields and gaze at the beautiful blue sky. While you are doing this, I suggest you think about what the next location will be, because there is one hint in the picture that might reveal just enough.</p>
        </div>
    </div>
  )
}

export default village