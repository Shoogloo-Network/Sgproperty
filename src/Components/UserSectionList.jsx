import React from 'react'
import IconCard from './IconCard'
const UserSectionList = ({onClick}) => {
 
    const iconData =[
        {
            img:'src/assets/icon/profile.svg',
           title:'PROFILE',
           id:'profile'

        },
        {
            img:'src/assets/icon/my-activity.svg',
            title:'MY ACTIVITY',
            id:'activity'

        },
        {
            img:'src/assets/icon/my-interaction.svg',
            title:'MY INTERACTIONS',
            id:'interactions'
        },
        {
            img:'src/assets/icon/post-your-property.svg',
            title:'POST PROPERTY',
            id:'postproperty'
        },
        {
            img:'src/assets/icon/my-properties.svg',
            title:'MY LISTINGS',    
            id:'mylistings'
        },
        {
            img:'src/assets/icon/my-coupon.svg',
            title:'MY COUPONS',
            id:'mycoupons'

        },
        {
            img:'src/assets/icon/my-agents.svg',
            title:'MY AGENTS',
            id:'myagents'
        },
        {
            img:'src/assets/icon/my-services.svg',
            title:'MY SERVICES',
            id:'myservices'
        },
        {
            img:'src/assets/icon/my-rent-agreement.svg',
            title:'RENTAL AGREEMENTS',
            id:'rentalagreements'
        },
        {
            img:'src/assets/icon/my-rent-payments.svg',
            title:'RENT PAYMENTS',
            id:'rentpayments'
        },
        {
            img:'src/assets/icon/refer-and-earn.svg',
            title:'REFER AND EARN',
            id:'referandearn'
        },
        {
            img:'src/assets/icon/lock-unlock.svg',
            title:'LOGOUT',
            id:'logout'
        },
    ] ;

  return (
   <>
   <IconCard data={iconData} onClick={onClick} style={{display:'flex',flexDirection:'column',gap:'10px'} } imgStyle={{width:'25px',height:'25px'}} />
   </>
  )
}

export default UserSectionList
