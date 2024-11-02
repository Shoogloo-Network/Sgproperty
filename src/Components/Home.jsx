

import Story from './Story'
import IconCardBtnWithoutHover from './IconCardBtnWithoutHover'
import RealStateBanner from './RealStateBanner'
import './Home.css'
import CardWithList from './CardWithList'
import NavBar from './NavBar'
import Footer from './Footer'

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
    <NavBar/>
    <RealStateBanner/>
   
    <div className='home-container'>

    <h1>Hot Selling Projects in India</h1>
    
   
        <div className='home-content' style={{cursor:'pointer'}}>
       
      <IconCardBtnWithoutHover data={iconDataForButton}/>
      <Story/>

        </div>
        <div className="real-estate-sections">
      <div className="real-estate-section">
        <h1 className="section-title">For Real Estate Developers</h1>
        <CardWithList />
      </div>
      <div className="real-estate-section" style={{ backgroundColor: '#fff'}}>
        <h1 className="section-title">For Agents</h1>
        <CardWithList />
      </div>
    </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Home
