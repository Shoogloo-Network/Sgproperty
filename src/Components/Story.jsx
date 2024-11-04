import Stories from 'react-insta-stories';
import Card from './Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormPopup from './FormPopup';
const Story = () => {
  const navigate = useNavigate();
  const CardData =[{
    backgroundImage:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
    image:"src/assets/icon/call.png" ,
          title:"Shree Serenity" ,
          description:"Balewadi , Pune",
          descriptionPrice:"₹86.00 Lac - 1.49 Cr",
          iconCardData : [
            {
                img:'src/assets/icon/building.png',
                title:'Project Size',
                description:'165 Unit . 1.25 Acres',
            },
            {
                img:'src/assets/icon/web-management.png',
                title:'Configurations',
                description:'2-BHK , 3-BHK Flats',
            },
           
          ],
  },{
    backgroundImage:"src/assets/stories/krisala-41-westworld-project-project-large-image1-4756.avif",
    image:"src/assets/icon/call.png" ,
          title:"Rise Food Mall" ,
          description:"Noida Sector 1",
          descriptionPrice:"₹86.00 Lac - 1.49 Cr",
          iconCardData : [
            {
                img:'src/assets/icon/building.png',
                title:'Project ',
                description:'165 Unit . 1.25 Acres',
            },
            {
                img:'src/assets/icon/web-management.png',
                title:'Configurations',
                description:'2-BHK , 3-BHK Flats',
            },
           
          ],
  },{
    backgroundImage:"src/assets/stories/rise-food-mall-project-project-large-image1-6738.avif",
    image:"src/assets/icon/call.png" ,
    title:"Shree Serenity" ,
    description:"Balewadi , Pune",
    descriptionPrice:"₹86.00 Lac - 1.49 Cr",
          iconCardData : [
            {
                img:'src/assets/icon/building.png',
                title:'Project Size',
                description:'165 Unit . 1.25 Acres',
            },
            {
                img:'src/assets/icon/web-management.png',
                title:'Configurations',
                description:'2-BHK , 3-BHK Flats',
            },
           
          ],
  },{
    backgroundImage:"src/assets/stories/jp-codename-starlife-project-project-large-image1-5182.avif",
    image:"src/assets/icon/call.png" ,
    title:"Rise Food Mall" ,
    description:"Noida Sector 1",
    descriptionPrice:"₹86.00 Lac - 1.49 Cr",
          iconCardData : [
            {
                img:'src/assets/icon/building.png',
                title:'Project Size',
                description:'165 Unit . 1.25 Acres',
            },
            {
                img:'src/assets/icon/web-management.png',
                title:'Configurations',
                description:'2-BHK , 3-BHK Flats',
            },
           
          ],
  },
  {
    backgroundImage:"src/assets/stories/haware-my-first-home-project-project-large-image1-5447.avif",
    image:"src/assets/icon/call.png" ,
    title:"Shree Serenity" ,
    description:"Balewadi , Pune",
    descriptionPrice:"₹86.00 Lac - 1.49 Cr",
          iconCardData : [
            {
                img:'src/assets/icon/building.png',
                title:'Project Size',
                description:'165 Unit . 1.25 Acres',
            },
            {
                img:'src/assets/icon/web-management.png',
                title:'Configurations',
                description:'2-BHK , 3-BHK Flats',
            },
           
          ],
  },]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const stories = CardData.map((item) => ({
    content: ({ action, isPaused }) => (
      <div 
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${item.backgroundImage})`, 
          height: '100%', 
          width: '100%', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          cursor: 'pointer',
          position: 'relative',
          
        }}
      >
        <div 
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            // handlePreviousStory(currentIndex > 0 ? currentIndex - 1 : CardData.length - 1);

            // action('previous');
            // showForm && navigate('/detail-page')
             setShowForm(true);
         
          }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '30%',
            height: '100%',
            cursor: 'pointer'
          }}
        />
        
        <div 
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleNextStory(currentIndex < CardData.length - 1 ? currentIndex + 1 : 0);
            action('next');
            navigate('/detail-page')
          }}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '70%',
            height: '100%',
            zIndex: 2,
            cursor: 'pointer'
          }}
        />

        <div style={{
          width:'40%', 
          marginTop:'25px', 
          position: 'relative', 
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <div style={{
            display:'flex', 
            gap:'10px',
            justifyContent:'center',
            marginBottom:'5px',
            pointerEvents: 'none'
          }}>
            <div style={{
              display:'flex',
              backgroundColor:'#B03052',
              color:'#fff',
              gap:'10px',
              padding:'5px 15px',
              pointerEvents: 'none'
            }}>
              <img src='src/assets/stories/story.png' alt='Exclusive'/>
              <p>Exclusive</p>
            </div>
            <div style={{
              display:'flex',
              backgroundColor:'#7ED4AD',
              color:'#fff',
              gap:'10px',
              padding:'5px 15px',
              pointerEvents: 'none'
            }}>
              <img src='src/assets/stories/quality.png' alt='Square Assured'/>
              <p>Square Assured</p>
            </div>
          </div>
          <div style={{
            zIndex:1009
          }}>
          <Card 
            image={item.image} 
            title={item.title} 
            description={item.description}
            descriptionPrice={item.descriptionPrice}
            iconCardData={item.iconCardData}
            
            
          />
          </div>
        </div>
      </div>
    ),
    duration: 8000
  }));

  const handleAllStoriesEnd = () => {
    console.log('All stories ended');
    setCurrentIndex(0);
  };

  const handleNextStory = (index) => {
    console.log('Next story', index);
    setCurrentIndex(index);
  };

  const handlePreviousStory = (index) => {
    console.log('Previous story', index);
    setCurrentIndex(index);
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      position: 'relative'
    }}>
      <Stories
        stories={stories}
        loop={true}
        defaultInterval={8000}
        width="100%"
        height="100%"
        storyStyles={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        storyContainerStyles={{ 
          zIndex: 1
        }}
        keyboardNavigation={true}
        isPaused={false}
        preventDefault={true}
        onAllStoriesEnd={handleAllStoriesEnd}
        onNext={(s, st) => handleNextStory(st)}
        onPrevious={(s, st) => handlePreviousStory(st)}
        currentIndex={currentIndex}
      />
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}  
    </div>
  );
};

export default Story
