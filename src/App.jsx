
import './App.css'
import NavBar from './Components/NavBar'
import ImageGallery from './Components/ImageGallery'
import { useState } from 'react'
import ImageGalleryPopup from './Components/ImageGalleryPopup';
import PropertyInfo from './Components/PropertyInfo';
import ProjectTabHome from './Components/ProjectTabHome';
import HomeBanner from './Components/HomeBanner';

function App() {
 const [isPopup , setIsPopup] =useState(false);

  return (
   <>
   {/* <HomeBanner/> */}
   {isPopup?<ImageGalleryPopup close={()=>{
    setIsPopup(false);
   }}/>:
   <>
   <NavBar/>
   <div className='homePageMainDiv'>
   <ImageGallery onClickImage={()=>{
     setIsPopup(true);
   
   
   }}/>
   <PropertyInfo/>
   <ProjectTabHome/>
   </div>
   
   </>}

   </>
  )
}

export default App
