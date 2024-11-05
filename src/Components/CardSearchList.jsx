import React, { useState, useMemo, useEffect } from 'react'
import "./CardSearchList.css"
import CardSearchListData from "./CardSearchListData"

const CardSearchList = () => {
    const buttonsData = [
        {
            id: 1,
            lableName: "Projects",
            data:  [
                {
                cities: [
                    { name: "Pune", userNumber: "123" },
                    { name: "Mumbai", userNumber: "456" },
                    { name: "Delhi", userNumber: "123" },
                    { name: "Noida", userNumber: "456" },
                    { name: "Gurgaon", userNumber: "456" },
                    { name: "Noida", userNumber: "456" },
                    { name: "Gurgaon", userNumber: "456" },
                    { name: "Noida", userNumber: "456" },
                    { name: "Gurgaon", userNumber: "456" },
                ]
            },
            
            {
                cardData :[{
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
            },
            ]
        },
        {
            id: 2,
            lableName: "Resale",
            data: [
                {
                cities: [
                    { name: "Punjab", userNumber: "123" },
                    { name: "Haryana", userNumber: "456" },
                    { name: "Delhi", userNumber: "123" },
                    { name: "Noida", userNumber: "456" },
                    { name: "Gurgaon", userNumber: "456" },
                    { name: "Noida", userNumber: "456" },
                    { name: "Gurgaon", userNumber: "456" },
                    { name: "Noida", userNumber: "456" },
                    { name: "Gurgaon", userNumber: "456" },
                ]
            }
            ,
            {
                cardData :[{
                    backgroundImage:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
                    image:"src/assets/icon/call.png" ,
                          title:"Abhishek" ,
                          url:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
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
                          url:"src/assets/stories/krisala-41-westworld-project-project-large-image1-4756.avif",
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
                    url:"src/assets/stories/rise-food-mall-project-project-large-image1-6738.avif",
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
            },
            ]
        },
        // ... more button data
    ];
    console.log('buttonsData:', buttonsData);

    const [activeTab, setActiveTab] = useState(1);
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        if (buttonsData && buttonsData.length > 0) {
            const initialData = buttonsData[0].data || [];
            console.log('Initial data:', initialData);
            setDisplayData(initialData);
        }
    }, []);

    const memoizedCardList = useMemo(() => {
        console.log('Current displayData:', displayData);
        return <CardSearchListData 
            key={
                buttonsData.find(btn => btn.id === activeTab)?.id
            }
            cities={displayData || []} 
        />
    }, [displayData])

    const handleClick = (btnId) => {
        setActiveTab(btnId);
        const newData = buttonsData.find(btn => btn.id === btnId)?.data || [];
        console.log('New data on click:', newData);
        setDisplayData(newData);
    }

    if (!buttonsData || buttonsData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <div style={{display:'flex',gap:'10px',width:'80%',margin:'20px auto',backgroundColor:'#F5F5F5',borderRadius:'10px',padding:'10px'}}>
            {buttonsData.map((button) => (
                <button
                    key={button.id}
                    className={activeTab === button.id ? 'activeCardSearchList' : ''}
                    onClick={() => handleClick(button.id)}
                    style={{
                        padding: '10px 16px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '8px',
                        margin: '0 8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: activeTab === button.id ? '#1890ff' : '#f5f5f5',
                        color: activeTab === button.id ? '#ffffff' : '#666666',
                        boxShadow: activeTab === button.id ? '0 2px 4px rgba(24, 144, 255, 0.2)' : 'none',
                    }}
                >
                    {button.lableName}
                </button>
            ))}
            </div>
            
            {memoizedCardList}
        </div>    
    )
}

export default CardSearchList
