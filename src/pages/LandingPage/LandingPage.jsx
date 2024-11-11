import React from 'react'
import styles from "./LandingPage.module.css"
import Button from '../../components/shared/Button/Button'
import Heading from '../../components/shared/Heading/Heading'
import { Grid2 } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import ChoosePlan from '../../components/ChoosePlan/ChoosePlan'
import NavBar from '../../components/NavBar/NavBar'
import useMediaQuery from '@mui/material/useMediaQuery';
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg"
import topSectionRightImage from "../../assets/images/top-section-image.svg"
import topSectionBackground from "../../assets/images/top-section-background.svg"
import headingBottomBlue from "../../assets/icons/heading-bottom-blue.svg"
import headingBottomYellow from "../../assets/icons/heading-bottom-yellow.svg"
import yourWorkBackground from "../../assets/images/your-work-background.svg"
import appleImage from "../../assets/images/apple.svg"
import microsoftImage from "../../assets/images/microsoft.svg"
import slackImage from "../../assets/images/slack.svg"
import googleImage from "../../assets/images/google.svg"
import appleIcon from "../../assets/icons/apple-logo.svg"
import windowsIcon from "../../assets/icons/windows-logo.svg"
import androidIcon from "../../assets/icons/android-logo.svg"


const LandingPage = () => {

    const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <div className={styles.landingPage}>
        <NavBar />
        <div className={`${styles.section} ${styles.top_section}`}>
            <Grid2 container alignItems={"center"} columnSpacing={2} rowSpacing={8} sx={{width : "100%", zIndex: 3,}}>
                <Grid2 size={{xxs: 12, sm: 6}}>
                    <div className={styles.top_section_content_left}>
                        <Heading text='Get More Done with whitepace' c='white' />
                        <p className={styles.subtext} style={{ marginBottom: "16px"}}>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                        <Button text={isSmallScreen ? "Try Taskey Free"  : "Try Whitepace free"} iconPath={rightArrowIcon} />
                    </div>
                </Grid2>
                <Grid2 size={{xxs: 12, sm: 6}}>
                    <img src={topSectionRightImage}  alt='top-section-right' style={{width : "100%", height: "100%"}}/>
                </Grid2>
            </Grid2>
            <img src={topSectionBackground} alt='top-bg' className={styles.top_section_background} />
        </div>
        <div className={`${styles.section}`}>
            <ChoosePlan/>
        </div>
        <div className={styles.your_work_section}>
            <div className={styles.your_work_section_content}>
                <Heading c="white" text="Your work, everywhere you are" underlineIconPath={ isSmallScreen ? null : headingBottomBlue} />
                <p className={styles.subtext} style={{ marginBottom: "16px"}}>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                <Button text={"Try Taskey"} iconPath={rightArrowIcon} />
            </div>
            <img src={yourWorkBackground} alt='your-work-bg' className={styles.your_work_background_image}/>
        </div>
        <div className={`${styles.section}`}>
            <div className={styles.our_sponsors_section}>
                 <Heading text='Our sponsors' underlineIconPath={headingBottomYellow} />
                 <div className={styles.our_sponsors_content}>
                    <img src={appleImage} alt='apple' height={"46px"}/>
                    <img src={microsoftImage} alt='microsoft' height={"46px"}/>
                    <img src={slackImage} alt='slack' height={"46px"} />
                    <img src={googleImage} alt='google' height={"46px"} />
                 </div>
            </div>
        </div>
        <div className={`${styles.section} ${styles.bottom_section}`}>
            <div className={styles.bottom_section_content}>
                <Heading text='Try Whitepace today' c='white'/>
                <div style={{marginBottom: "10px"}}>
                    <p className={styles.subtext}>Get started for free.</p>
                    <p className={styles.subtext} style={{ marginTop: "6px" }}>Add your whole team as your needs grow.</p>
                </div>
                <Button text={"Try Taskey free"} iconPath={rightArrowIcon} />
                <p className={styles.subtext}>On a big team? Contact sales</p>
                <div style={{display: "flex", alignItems: "center", gap: "32px",  marginTop: "10px"}}>
                    <img src={appleIcon} alt='apple' height={"46px"} />
                    <img src={windowsIcon} alt='windows' height={"46px"} />
                    <img src={androidIcon} alt='android' height={"46px"} />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage