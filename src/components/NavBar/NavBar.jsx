import React, { useState } from 'react'
import styles from "./NavBar.module.css"
import Logo from '../Logo/Logo'
import Button from '../shared/Button/Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {

    const [showNavBar, setShowNavBar] = useState(false)

    const toggleNavbarVisibility = ()=>{
        setShowNavBar(!showNavBar)
    }

  return (
    <div className={styles.navbar_container_wrapper}>
        <div className={styles.navbar_container}>
            <Logo/>
            <div className={styles.navbar_menu}>
                <div className={styles.navbar_menu_dropdowns_container}>
                    <div className={styles.dropdown}>
                        <p>Products</p>
                        <img src='/assets/icons/carret-down-icon.svg' alt='' />
                    </div>
                    <div className={styles.dropdown}>
                        <p>Solutions</p>
                        <img src='/assets/icons/carret-down-icon.svg' alt='' />
                    </div>
                    <div className={styles.dropdown}>
                        <p>Resources</p>
                        <img src='/assets/icons/carret-down-icon.svg' alt='' />
                    </div>
                    <div className={styles.dropdown}>
                        <p>Pricing</p>
                        <img src='/assets/icons/carret-down-icon.svg' alt=''/>
                    </div>
                </div>
                <div className={styles.nav_right_section}>
                    <div className={styles.buttons_container}>
                        <Button bg="#FFE492" c="#043873" text="Login" />
                        <Button text="Try Whitepace free" iconPath={"/assets/icons/right-arrow-icon.svg"} />
                    </div>
                    <div className={styles.menu_icon_wrapper} onClick={toggleNavbarVisibility}>
                        {
                            showNavBar ? (
                                <CloseIcon fontSize='large' className={styles.menu_icon} /> 
                            ):(
                                <MenuIcon fontSize='large' className={styles.menu_icon} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.vertical_nav} style={{display : showNavBar ? "flex" : "none"}}>
            <div className={styles.dropdown}>
                <p>Products</p>
                <img src='/assets/icons/carret-down-icon.svg' alt='' />
            </div>
            <div className={styles.dropdown}>
                <p>Solutions</p>
                <img src='/assets/icons/carret-down-icon.svg' alt='' />
            </div>
            <div className={styles.dropdown}>
                <p>Resources</p>
                <img src='/assets/icons/carret-down-icon.svg' alt='' />
            </div>
            <div className={styles.dropdown}>
                <p>Pricing</p>
                <img src='/assets/icons/carret-down-icon.svg' alt=''/>
            </div>
            <div className={styles.vertical_nav_buttons}>
                <Button bg="#FFE492" c="#043873" text="Login" />
                <Button text="Try Whitepace free" iconPath={"/assets/icons/right-arrow-icon.svg"} />
            </div>
        </div>
    </div>
  )
}

export default NavBar