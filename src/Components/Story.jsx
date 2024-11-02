
import Stories from 'react-insta-stories';
import Card from './Card';

const Story = () => {
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

 
//     const stories =[{
//         url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
//         duration:2000,
//         content:(props)=>(
//           <div style={{backgroundImage:'url("src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif")', height:'100%',width:'100%',backgroundRepeat:'no-repeat'}}><Card  image="/assets/images/desktop-banner.jpeg" 
//           title="Sample Card Title 1" 
//           description="This is a description for the sample card. It can hold any text you want to display."/></div>
          
//         ),
        
//     },
//     {
//       url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
//       duration:2000,
//   },
//   {
//     url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
//     duration:2000,
// },
// {
//   url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
//   duration:2000,
// },
// {
//   url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
//   duration:2000,
// },
// {
//   url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
//   duration:2000,
// },
//   ];
const stories = CardData.map((item) => {
  return {
    content: (props) => (
      <div 
        style={{
          backgroundColor:"#fff",
          backgroundImage: `url(${item.backgroundImage})`, 
          height: '100%', 
          width: '100%', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          cursor:'pointer',
         
        }}
      >
        <div style={{width:'40%',marginTop:'25px'}}>
          <div style={{display:'flex', gap:'10px',justifyContent:'center',marginBottom:'5px'}}>
            <div style={{display:'flex',backgroundColor:'#B03052',color:'#fff', gap:'10px',padding:'5px 15px'}}><img src='src/assets/stories/story.png' alt='Exclusive'/><p>Exclusive</p></div>
            <div style={{display:'flex',backgroundColor:'#7ED4AD', color:'#fff', gap:'10px',padding:'5px 15px'}}><img src='src/assets/stories/quality.png' alt='Square Assured'/><p>Square Assured</p></div>
          </div>
        <Card 
          image={item.image} 
          title={item.title} 
          description={item.description}
          descriptionPrice={item.descriptionPrice}
          iconCardData={item.iconCardData}
        />
        </div>
      </div>
    ),
  };
});
  
return (
    <>

<Stories
			stories={stories}
      loop={true}
			defaultInterval={8000}
			width={'100%'}
      height={'100%'}
      storyContainerStyles={{ zIndex: 10 }}  
		/>

    
    
    
    
    
</>
  )
}

export default Story
