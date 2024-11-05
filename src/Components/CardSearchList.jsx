import React, { useState, useMemo, useEffect } from 'react'
import "./CardSearchList.css"
import CardSearchListData from "./CardSearchListData"

const CardSearchList = () => {
    const buttonsData = [
        {
            id: 1,
            lableName: "Button 1",
            data:  [
                {
                cities: [
                    { name: "City 1", userNumber: "123" },
                    { name: "City 2", userNumber: "456" },
                    { name: "City 3", userNumber: "123" },
                    { name: "City 4", userNumber: "456" }
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
            lableName: "Button 2",
            data: [
                {
                cities: [
                    { name: "City 2", userNumber: "123" },
                    { name: "City 2", userNumber: "456" },
                    { name: "City 2", userNumber: "123" },
                    { name: "City 2", userNumber: "456" }
                ]
            }
            ,
            {
                cardData :[{
                    backgroundImage:"src/assets/stories/shriram-serenity-project-project-large-image1-7568.avif",
                    image:"src/assets/icon/call.png" ,
                          title:"Abhishek" ,
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
            {buttonsData.map((button) => (
                <button
                    key={button.id}
                    className={activeTab === button.id ? 'activeCardSearchList' : ''}
                    onClick={() => handleClick(button.id)}
                    style={{
                        backgroundColor: activeTab === button.id ? 'blue' : 'white',
                        color: 'rgb(0, 0, 0)',
                    }}
                >
                    {button.lableName}
                </button>
            ))}
            
            {memoizedCardList}
        </div>    
    )
}

export default CardSearchList
