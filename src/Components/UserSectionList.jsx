import React from 'react'
import IconCard from './IconCard'
const UserSectionList = ({onClick}) => {
 
    const iconData =[
        {
            img:'src/assets/icon/verified.png',
           title:'PROFILE',
           id:'profile'

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY ACTIVITY',
            id:'activity'

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY INTERACTIONS',
            id:'interactions'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'POST PROPERTY',
            id:'postproperty'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY LISTINGS',    
            id:'mylistings'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY COUPONS',
            id:'mycoupons'

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY AGENTS',
            id:'myagents'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY SERVICES',
            id:'myservices'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'RENTAL AGREEMENTS',
            id:'rentalagreements'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'RENT PAYMENTS',
            id:'rentpayments'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'REFER AND EARN',
            id:'referandearn'
        },
        {
            img:'src/assets/icon/home-button.png',
            title:'LOGOUT',
            id:'logout'
        },
    ] ;

  return (
   <>
   <IconCard data={iconData} onClick={onClick} style={{display:'flex',flexDirection:'column',gap:'10px'}} />
   </>
  )
}

export default UserSectionList
