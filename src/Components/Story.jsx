
import Stories from 'react-insta-stories';

const Story = () => {
    const stories =[{
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
