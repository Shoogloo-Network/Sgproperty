import React, { useState } from 'react'
import UserSectionList from './UserSectionList'
import Activity from './Activity'
import Profile from './Profile'
const User = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const handleClick=(item)=>{
        console.log(item);
        setActiveSection(item.id);
    }
  return (
   
    <>
    <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
    <div>
   <UserSectionList onClick={handleClick}/>
   </div>
   <div>
    {
        activeSection ==='profile' && <Profile/>
    }
   </div>
   <div>
    {
        activeSection ==='activity' && <Activity/>
    }

   </div>
   <div>
    {
        activeSection ==='interactions' && <Interactions/>
    }
  </div>
  </div>
    </>
  )
}

export default User
