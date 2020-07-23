import React from "react"
import styles from "./about.module.css"
import me from "../../static/me.png"
import sanFrancisco from "../../static/san-francisco.png"

export default () => (
  <div className={styles.container} id='about'>
    <img src={sanFrancisco} alt="San Francisco" className={styles.sfImage} />
    <div className={styles.aboutContent}>
      <p className={styles.location}>I’m based in San Francisco, currently working on a remote-driven team at <a target='_blank' href='https://www.betterup.com'>BetterUp.</a></p>
      <h3>When I'm not coding...</h3>
      <p className={styles.location}>I'm shooting photos and footage, dancing, skating, drawing, painting, writing, hiking, camping, boxing, socializing - the list goes on.</p>
    </div>
    <img src={me} alt="Me" className={styles.meImage} />
  </div>
)
