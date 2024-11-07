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
        <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
            <div>
                <UserSectionList onClick={handleClick}/>
            </div>
            <div>
                {activeSection === 'profile' && <Profile/>}
            </div>
            <div>
                {activeSection === 'activity' && <Activity/>}
            </div>
            <div>
                {activeSection === 'interactions' && <Interactions/>}
            </div>
        </div>
    )
}

export default User
