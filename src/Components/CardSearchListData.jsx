import  { memo } from 'react'
import './CardSearchListData.css'
import City from './City'
import SearchFilterWithCards from './SearchFilterWithCards'
import SearchContactForm from './SearchContactForm'
const CardSearchListData = memo(({ cities }) => {
    return (
        <>
           <div style={{display:'flex', width:'80%',justifyContent:'space-between',margin:'auto',gap:'20px'}}>
            <div style={{width:'60%'}}>
          <div style={{display:'flex', flexDirection:'column',backgroundColor:'#F5F5F5',borderRadius:'10px' , padding:'10px'}}>
          <div className='city-title' style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <img src='src/assets/icon/location.png' alt='location' className='city-icon' width={20} height={20}/>
        <h1 style={{fontSize:'20px',fontWeight:'bold'}}>City</h1>
      </div>
          <City cities={cities} />
          </div>
            <SearchFilterWithCards data={cities}/>
            </div>
            <div style={{width:'40%', position:'sticky',top:'50px'}}>
                <SearchContactForm/>
            </div>
           </div>
        
        </>
    )
})

CardSearchListData.displayName = 'CardSearchListData';

export default CardSearchListData
