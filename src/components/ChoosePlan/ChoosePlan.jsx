import React, { useState } from 'react'
import styles from "./ChoosePlan.module.css"
import Heading from '../shared/Heading/Heading'
import { planDetails } from './PlanData'
import PlanCard from './PlanCard/PlanCard'

/*
const PLAN_TYPES = {
    FREE : "Free",
    PERSONAL : "Personal",
    ORGANIZATION : "Organization"
}
*/

const ChoosePlan = () => {

    const [hoveredPlan,setHoveredPlan] = useState("Personal")
    
  return (
    <div className={styles.choose_plan_container}>
        <Heading text='Choose Your Plan' underlineIconPath={'/assets/icons/heading-bottom-yellow.svg'} />
        <p className={styles.subtext}>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        <div style={{width: "100%"}}>
           <div className={styles.plan_cards_container}>
                {
                    Object.keys(planDetails).map((plan)=>{
                        return(
                            <PlanCard key={plan} planType={plan} details={planDetails[plan]} hoveredPlan={hoveredPlan} setHoveredPlan={setHoveredPlan} />
                        )
                    })
                }
           </div>
           <div className={styles.plan_cards_container_small_device}>
                <PlanCard planType={hoveredPlan} details={planDetails[hoveredPlan]} hoveredPlan={hoveredPlan} />
                <div className={styles.dots_container}>
                    {
                        Object.keys(planDetails).map((plan)=>{
                            return(
                                <div key={plan} className={styles.dot} style={{backgroundColor : hoveredPlan===plan ? "#043873" : "#4F9CF9"}} onClick={()=>{setHoveredPlan(plan)}}></div>
                            )
                        })
                    }
                </div>
           </div>
        </div>
    </div>
  )
}

export default ChoosePlan