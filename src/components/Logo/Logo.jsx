import React from 'react'
import styles from "./Logo.module.css"
import logoIcon from "../../assets/icons/logo-icon.svg"

const Logo = () => {
  return (
    <div className={styles.logo}>
        <img src={logoIcon} height={"24px"} alt='logo'/>
        <p>whitepace</p>
    </div>
  )
}

export default Logo