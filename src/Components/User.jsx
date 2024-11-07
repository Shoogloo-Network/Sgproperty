import React, { useState, useEffect } from 'react';
import UserSectionList from './UserSectionList'
import Activity from './Activity'
import Profile from './Profile'

import { useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeSection, setActiveSection] = useState('profile');

    useEffect(() => {
        const section = searchParams.get('section');
        if (section) {
            setActiveSection(section);
        }
    }, [searchParams]);

    const handleClick = (item) => {
        setActiveSection(item.id);
        setSearchParams({ section: item.id });
    }

    return (
        <div style={{display:'flex', flexDirection:'row', gap:'20px',width:'80%',margin:'auto'}}>
            <div>
                <UserSectionList onClick={handleClick}/>
            </div>
           <div style={{width:'100%'}}>
           <div style={{width:'100%'}}>
                {activeSection === 'profile' && <Profile/>}
            </div>
            <div style={{width:'100%'}}> 
                {activeSection === 'activity' && <Activity/>}
            </div>
           </div>
           
        </div>
    )
}

export default User
