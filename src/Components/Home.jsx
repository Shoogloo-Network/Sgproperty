

import Story from './Story'
import IconCardBtnWithoutHover from './IconCardBtnWithoutHover'
import './Home.css'
const Home = () => {
  const iconDataForButton =[
    {
        img:'src/assets/icon/building-img.svg',
        title:'Best Sellers in India',
        description:'Our freshly brewed list of the best residential projects from top rated builders in the country, backed by our award-winning start-to-finish services.',
      
        buttonName:'View All',

    },
]

  return (
    <>
    <div className='home-container'>
    <h1>Hot Selling Projects in India</h1>
    
   
        <div className='home-content'>
       
      <IconCardBtnWithoutHover data={iconDataForButton}/>
      <Story/>
        </div>
    </div>
    
    
    </>
  )
}

export default Home
