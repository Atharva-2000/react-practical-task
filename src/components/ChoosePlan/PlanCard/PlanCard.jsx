import React from 'react'
import styles from "./PlanCard.module.css"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '../../shared/Button/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

const PlanCard = ({planType, details , hoveredPlan=null, setHoveredPlan=()=>{}}) => {

    const isHovered = planType===hoveredPlan ? true : false

    const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <div className={styles.plan_card} style={isHovered ? {border : "none", paddingTop: isSmallScreen ? "36px" : "68px", paddingBottom: isSmallScreen ? "36px" : "68px", backgroundColor: "#043873"} : {border: "1px solid #FFE492", paddingTop: "36px", paddingBottom: "36px", backgroundColor: "white"}} onMouseOver={()=>{setHoveredPlan(planType)}} onMouseOut={()=>{setHoveredPlan("Personal")}} >
       <p className={styles.plan_type} style={{color : isHovered ? "white" : "#212529"}}>{planType}</p>
       <p className={styles.plan_price} style={{color : isHovered ? "#FFE492" : "#212529"}}>{`$${details.price}`}</p>
       <p className={styles.plan_subtitle} style={{color : isHovered ? "white" : "#212529"}}>{details.subtitle}</p>
       <div className={styles.plan_features}>
            {
                details.features.map((feature, index)=>{
                    return(
                        <div key={index} className={styles.plan_features_item} >
                            <TaskAltIcon fontSize='small' style={{color : isHovered ? "#FFE492" : "#212529"}} />
                            <p className={styles.plan_features_text} style={{color : isHovered ? "white" : "#212529"}}>{feature}</p>
                        </div>
                    ) 
                })
            }
       </div>
       {
         isHovered ? <Button text={"Get Started"} /> :  <Button text={"Get Started"} c='#212529' bg='white' extraStyles={{border: "1px solid #FFE492"}} />
       }
    </div>
  )
}

export default PlanCard