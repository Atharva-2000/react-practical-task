import React from 'react'
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logo}>
        <img src="/assets/icons/logo-icon.svg" height={"24px"} alt='logo'/>
        <p>whitepace</p>
    </div>
  )
}

export default Logo