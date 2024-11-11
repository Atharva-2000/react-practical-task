import React from 'react'
import styles from "./LandingPage.module.css"
import Button from '../../components/shared/Button/Button'
import Heading from '../../components/shared/Heading/Heading'
import { Grid2 } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import ChoosePlan from '../../components/ChoosePlan/ChoosePlan'
import NavBar from '../../components/NavBar/NavBar'
import useMediaQuery from '@mui/material/useMediaQuery';

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
                        <p style={{color: "white", fontSize: "18px", fontWeight: 400, marginBottom: "16px"}}>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                        <Button text={"Try Whitepace free"} iconPath={"/assets/icons/right-arrow-icon.svg"} />
                    </div>
                </Grid2>
                <Grid2 size={{xxs: 12, sm: 6}}>
                    <img src="/assets/images/top-section-image.svg"  alt='top-section' style={{width : "100%", height: "100%"}}/>
                </Grid2>
            </Grid2>
            <img src='/assets/images/top-section-background.svg' alt='top-bg' className={styles.top_section_background} />
        </div>
        <div className={`${styles.section}`}>
            <ChoosePlan/>
        </div>
        <div className={styles.your_work_section}>
            <div className={styles.your_work_section_content}>
                <Heading c="white" text="Your work, everywhere you are" underlineIconPath={ isSmallScreen ? null : '/assets/icons/heading-bottom-blue.svg'} />
                <p style={{color: "white", fontSize: "18px", fontWeight: 400, marginBottom: "16px"}}>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                <Button text={"Try Taskey"} iconPath={"/assets/icons/right-arrow-icon.svg"} />
            </div>
            <img src='/assets/images/your-work-background.svg' alt='your-work-bg' className={styles.your_work_background_image}/>
        </div>
        <div className={`${styles.section}`}>
            <div className={styles.our_sponsors_section}>
                 <Heading text='Our sponsors' underlineIconPath={'/assets/icons/heading-bottom-yellow.svg'} />
                 <div className={styles.our_sponsors_content}>
                    <img src='/assets/images/apple.svg' alt='apple' height={"46px"}/>
                    <img src='/assets/images/microsoft.svg' alt='microsoft' height={"46px"}/>
                    <img src='/assets/images/slack.svg' alt='slack' height={"46px"} />
                    <img src='/assets/images/google.svg' alt='google' height={"46px"} />
                 </div>
            </div>
        </div>
        <div className={`${styles.section} ${styles.bottom_section}`}>
            <div className={styles.bottom_section_content}>
                <Heading text='Try Whitepace today' c='white'/>
                <div style={{marginBottom: "10px"}}>
                    <p style={{color: "white", fontSize: "18px",fontWeight: 400 }}>Get started for free.</p>
                    <p style={{color: "white", fontSize: "18px",fontWeight: 400, marginTop: "6px" }}>Add your whole team as your needs grow.</p>
                </div>
                <Button text={"Try Taskey free"} iconPath={"/assets/icons/right-arrow-icon.svg"} />
                <p style={{color: "white", fontSize: "18px",fontWeight: 400 }}>On a big team? Contact sales</p>
                <div style={{display: "flex", alignItems: "center", gap: "32px",  marginTop: "10px"}}>
                    <img src='/assets/icons/apple-logo.svg' alt='apple' height={"46px"} />
                    <img src='/assets/icons/windows-logo.svg' alt='windows' height={"46px"} />
                    <img src='/assets/icons/android-logo.svg' alt='android' height={"46px"} />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage