
import './App.css'
import NavBar from './Components/NavBar'
import ImageGallery from './Components/ImageGallery'
import { useState } from 'react'
import ImageGalleryPopup from './Components/ImageGalleryPopup';
import PropertyInfo from './Components/PropertyInfo';
import ProjectTabHome from './Components/ProjectTabHome';
import Home from './Components/Home';


function App() {
 const [isPopup , setIsPopup] =useState(false);

  return (
   <>
   <Home/>
   
   {/* {isPopup?<ImageGalleryPopup close={()=>{
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
   
   </>} */}

   </>
  )
}

export default App
