
import './App.css'

import ImageGallery from './Components/ImageGallery'
import { useState } from 'react'
import ImageGalleryPopup from './Components/ImageGalleryPopup';
import PropertyInfo from './Components/PropertyInfo';
import ProjectTabHome from './Components/ProjectTabHome';
import { useNavigate } from 'react-router-dom';


function App() {
 const [isPopup , setIsPopup] =useState(false);
//  const navigate = useNavigate();
//  const userName = JSON.parse(localStorage.getItem('user'));
//  const onClick = () => {
//   if(!userName){
//     navigate('/login');
//   }
//  }
  return (
    // onClick={onClick}
   <div >
 
   
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

   </div>
  )
}

export default App
