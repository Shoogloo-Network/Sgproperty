import React from 'react'
import Card from './Card'
import { useState } from 'react';
import FormPopup from './FormPopup';
const SearchFilterWithCards = ({data}) => {
    const [showForm, setShowForm] = useState(false);

    const onCardClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // handlePreviousStory(currentIndex > 0 ? currentIndex - 1 : CardData.length - 1);

        // action('previous');
        // showForm && navigate('/detail-page')
         setShowForm(true);
         console.log('Clicked Card Data:', item); // Added console log
     
      }
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
            url={city.backgroundImage}
            onClick={onCardClick}
          />
        
          
          </div>
    
                </div>
            ))
        ))
    }
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}  
    </>
  )
}

export default SearchFilterWithCards
