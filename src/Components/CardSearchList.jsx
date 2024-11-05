import React from 'react'
import { useState } from 'react'
import './CardSearchList.css'
const CardSearchList = () => {
    const [componentData , setComponentData] = useState({});
    const [activeTab , setActiveTab] = useState(null);
    const buttonsData = [
        {
id:1,
lable:'Projects',
data:{
cities:[
    {
        name:'Mumbai',
        userNumber:'37982',
    },
    {
        name:'Mumbai',
        userNumber:'37982',
    },
    {
        name:'Mumbai',
        userNumber:'37982',
    },
    {
        name:'Mumbai',
        userNumber:'37982',
    },
    {
        name:'Mumbai',
        userNumber:'37982',
    },
    {
        name:'Mumbai',
        userNumber:'37982',
    }
]
},
        },
        {

        },
        
    ]

    const handleClick = (data,btnId)=>{
        setComponentData(data);
        setActiveTab(btnId);
    }

  return (
   
    <>
<div>
    
{buttonsData.map((button) => (
        <button
          key={button.id}
          className={activeTab === button.id ? 'active' : ''}
          onClick={() => handleClick(button.data, button.id)}
        >
          {button.label}
        </button>
      ))}
    
    
    
    
</div>    
    
    
    
    
</>
  )
}

export default CardSearchList
