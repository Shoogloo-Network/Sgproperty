import React from 'react'
import UserSectionList from './UserSectionList'
import Activity from './Activity'
const User = () => {
  return (
    
    <>
    <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
    <div>
   <UserSectionList/>
   </div>
   <div>
    <Activity/>
   </div>
  </div>
  
    </>
  )
}

export default User
