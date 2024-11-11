import React from 'react'
import styles from "./Heading.module.css"

const Heading = ({c="#212529", text="", underlineIconPath=null}) => {
  return (
    <div style={{width: "fit-content", position: "relative"}}>
        <p className={styles.headingText} style={{color: c}}>{text}</p>
        {
           underlineIconPath && (
              <img src={underlineIconPath} alt='underline' className={styles.underline_icon} />
           )
        }
    </div>
  )
}

export default Heading