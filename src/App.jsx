
import './App.css'
import NavBar from './Components/NavBar'
import ImageGallery from './Components/ImageGallery'
import { useState } from 'react'
import ImageGalleryPopup from './Components/ImageGalleryPopup';
import PropertyInfo from './Components/PropertyInfo';
import ProjectTabHome from './Components/ProjectTabHome';
import Footer from './Components/Footer';


function App() {
 const [isPopup , setIsPopup] =useState(false);

  return (
   <>
 
   
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
   <Footer/>
   </>}

   </>
  )
}

export default App
