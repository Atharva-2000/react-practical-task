import React from 'react'
import styles from "./Button.module.css"

const Button = ({bg="#4F9CF9", c="white", text, iconPath=null , onClick, extraStyles={}}) => {
  return (
    <button onClick={onClick} className={styles.button} style={{backgroundColor : bg, ...extraStyles}}>
        <p style={{color: c}}>{text}</p>
        {
           iconPath && <img src={iconPath} alt='icon' style={{marginLeft: "6px", height: "14px"}} />
        }
    </button>
  )
}

export default Button