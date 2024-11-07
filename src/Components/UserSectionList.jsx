import React from 'react'
import IconCard from './IconCard'
const UserSectionList = () => {
    const handleClick=(item)=>{
        console.log(item);
    }
    const iconData =[
        {
            img:'src/assets/icon/verified.png',
           title:'PROFILE',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY ACTIVITY',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY INTERACTIONS',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'POST PROPERTY',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY LISTINGS',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY COUPONS',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY AGENTS',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'MY SERVICES',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'RENTAL AGREEMENTS',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'RENT PAYMENTS',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'REFER AND EARN',

        },
        {
            img:'src/assets/icon/home-button.png',
            title:'LOGOUT',

        },
    ] ;

  return (
   <>
   <IconCard data={iconData} onClick={handleClick} style={{display:'flex',flexDirection:'column',gap:'10px'}} />
   </>
  )
}

export default UserSectionList
