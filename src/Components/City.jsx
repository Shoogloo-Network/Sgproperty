import React from 'react'
import './City.css'
const City = ({cities}) => {
  return (
    <>
    <div className='city-container'style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} >
      
        {
        cities?.map((city ,index) => (
            city.cities?.map((city) => (
                <div key={city.name} style={{display:'flex',justifyContent:'space-between',width:'fit-content',border:'1px solid black',padding:'10px',margin:'10px',borderRadius:'10px',gap:'10px'}}>
                    <p>{city.name}</p>
                    <p style={{color:'#5f449b'}}>({city.userNumber})</p>
                </div>
            ))
        ))
    }
    </div>
    </>
  )
}

export default City
