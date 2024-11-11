import React from 'react'
import styles from "./Footer.module.css"
import Logo from '../Logo/Logo'
import Button from '../shared/Button/Button'
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg"
import carrentDownIcon from "../../assets/icons/carret-down-icon.svg"
import globeIcon from "../../assets/icons/globe-icon.svg"
import facebookIcon from "../../assets/icons/facebook-icon.svg"
import twitterIcon from "../../assets/icons/twitter-icon.svg"
import linkedinIcon from "../../assets/icons/linkedin-icon.svg"


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_top_section}>
            <div className={styles.footer_top_section_column}>
                <Logo/>
                <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className={styles.footer_top_section_column}>
                <p style={{fontWeight: 700}}>Product</p>
                <p style={{color: "#FFE492"}}>Overview</p>
                <p>Pricing</p>
                <p>Customer stories</p>
            </div>
            <div className={styles.footer_top_section_column}>
                <p style={{fontWeight: 700}}>Resources</p>
                <p>Blog</p>
                <p>Guides & tutorials</p>
                <p>Help center</p>
            </div>
            <div className={styles.footer_top_section_column}>
                <p style={{fontWeight: 700}}>Company</p>
                <p>About us</p>
                <p>Careers</p>
                <p>Media kit</p>
            </div>
            <div className={styles.footer_top_section_column} style={{gap: "1rem", maxWidth: "244px"}}>
                <p style={{fontWeight: 700, fontSize: "28px"}}>Try It Today</p>
                <p>Get started for free. Add your whole team as your needs grow.</p>
                <Button text={"Start today"} iconPath={rightArrowIcon} />
            </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer_bottom_section}>
            <div className={styles.footer_bottom_section_left}>
                <div className={styles.language_selection}>
                    <img src={globeIcon} alt='globe' />
                    <p>English</p>
                    <img src={carrentDownIcon} alt='down' />
                </div>
                <p>Terms & privacy</p>
                <p>Security</p>
                <p>Status</p>
                <p>©2021 Whitepace LLC.</p>
            </div>
            <div className={styles.divider_small_screen}></div>
            <div className={styles.footer_bottom_section_right}>
                <img src={facebookIcon} alt='facebook' />
                <img src={twitterIcon} alt='twitter' />
                <img src={linkedinIcon} alt='linkedin' />
            </div>
        </div>
    </div>
  )
}

export default Footer