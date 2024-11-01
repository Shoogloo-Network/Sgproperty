
import Stories from 'react-insta-stories';
import Card from './Card';

const Story = () => {
  const CardData =[{
    image:"/assets/images/desktop-banner.jpeg" ,
          title:"Sample Card Title 1" ,
          description:"This is a description for the sample card. It can hold any text you want to display.",
  },{
    image:"/assets/images/desktop-banner.jpeg" ,
          title:"Sample Card Title 1" ,
          description:"This is a description for the sample card. It can hold any text you want to display.",
  },{
    image:"/assets/images/desktop-banner.jpeg" ,
          title:"Sample Card Title 1" ,
          description:"This is a description for the sample card. It can hold any text you want to display.",
  },{
    image:"/assets/images/desktop-banner.jpeg" ,
          title:"Sample Card Title 1" ,
          description:"This is a description for the sample card. It can hold any text you want to display.",
  },]
    const stories =[{
        url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
        duration:2000,
        content:(props)=>(
          <div style={{backgroundImage:'url("src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif")', height:'100%',width:'100%',backgroundRepeat:'no-repeat'}}><Card  image="/assets/images/desktop-banner.jpeg" 
          title="Sample Card Title 1" 
          description="This is a description for the sample card. It can hold any text you want to display."/></div>
          
        ),
        
    },
    {
      url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
      duration:2000,
  },
  {
    url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
    duration:2000,
},
{
  url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
  duration:2000,
},
{
  url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
  duration:2000,
},
{
  url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
  duration:2000,
},
  ];
  return (
    <>
    <Stories
			stories={stories}
			defaultInterval={8000}
			width={'100%'}
      height={'100%'}
		/>
    
    
    
    
</>
  )
}

export default Story
