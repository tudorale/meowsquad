import React from 'react'
import styles from "../../styles/School.module.css";

function village() {
  return (
    <div className={styles.wrapper}>
        <img className={styles.image} src="/school.png"></img>

        <div className={styles.text}>
            <p className={styles.chapterTitle}>MEOW SCHOOL</p>

            <p>Situated in the centre of the Cat World, Meow School is located near the local river. It's just a short walk away, usually taking up to fifteen minutes to arrive by foot from the village. The one-story building isn't big, with most of the ground floor being taken up by the canteen and cloakrooms. When compared to other areas of the school, the canteen is relatively large. I usually like the menu, but sometimes my friends and I sneak out to go to a fast-food branch that's located not too far from school. </p>
            <p>As I mentioned, almost all the classrooms are situated on the first floor. We have math classrooms, where students study algebra and geometry. We also have a science classroom, where practical experiments take place safely. Posters of Nobel winning scientists are scattered across the walls, with Kitties taking natural sciences lessons there, such as physics, biology and chemistry. They use microscopes and experimental equipment for their exciting assignments. Our gym is located in the basement, with Physical Education lessons taking place there. The gym is the largest facility at school. The fact that it has no windows means that the school has to put extra effort into the lighting system, with the facility notoriously being the "brightest" place at school!</p>
        </div>
    </div>
  )
}

export default village