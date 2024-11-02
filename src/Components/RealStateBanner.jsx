import React from 'react'
import IconCard from './IconCard'
import './RealStateBanner.css'
const RealStateBanner = () => {
    const iconData1 =[
        {
            img:'src/assets/icon/building.png',
            description:'New Launch',
      
        },
        {
            img:'src/assets/icon/building-1.png',
            description:'2,3 BHK Flats',
      
        },
        {
            img:'src/assets/icon/maps.png',
            description:'986 Sq. Ft. to 1494 Sq. Ft. (Saleable)',
      
        },
        {
            img:'src/assets/icon/maps.png',
            description:'986 Sq. Ft. to 1494 Sq. Ft. (Saleable)',
      
        },
      ]
      
      function handleClick(data){
        console.log(data);
      }
  return (
    <>
    <div style={{backgroundImage:'url(src/assets/propertyImage/desktop-banner.jpeg)',backgroundSize:'cover',backgroundPosition:'center'}}>
    <div>
    <IconCard data={iconData1} onClick={handleClick}/>
    </div>
    </div>
    
    </>
  )
}

export default RealStateBanner
