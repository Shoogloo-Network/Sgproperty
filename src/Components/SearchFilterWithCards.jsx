import React from 'react'
import Card from './Card'
const SearchFilterWithCards = ({data}) => {
   
  return (
    
    console.log(data),
    <>
     {
        data?.map((city ,index) => (
            city.cardData?.map((city) => (
                <div key={city.name} className='card-search-list-data-item'>
                  <div style={{
            display:'flex', 
            gap:'10px',
            justifyContent:'center',
            marginBottom:'5px',
            pointerEvents: 'none'
          }}>
            
          </div>
          <div style={{
            zIndex:1009
          }}>
          
    
                <Card 
              
            image={city.image} 
            title={city.title} 
            description={city.description}
            descriptionPrice={city.descriptionPrice}
            iconCardData={city.iconCardData}
          />
        
          
          </div>
    
                </div>
            ))
        ))
    }
    
    </>
  )
}

export default SearchFilterWithCards
