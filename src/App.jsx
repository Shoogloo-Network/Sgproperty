
import './App.css'

import ImageGallery from './Components/ImageGallery'
import { useState } from 'react'
import ImageGalleryPopup from './Components/ImageGalleryPopup';
import PropertyInfo from './Components/PropertyInfo';
import ProjectTabHome from './Components/ProjectTabHome';



function App() {
 const [isPopup , setIsPopup] =useState(false);

  return (
   <>
 
   
   {isPopup?<ImageGalleryPopup close={()=>{
    setIsPopup(false);
   }}/>:
   <>
   
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
