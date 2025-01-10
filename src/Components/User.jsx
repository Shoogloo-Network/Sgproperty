import  { useState, useEffect } from 'react';
import UserSectionList from './UserSectionList'
import Activity from './Activity'
import Profile from './Profile'

import { useSearchParams } from 'react-router-dom'
import PostProperty from './PostProperty';
import UploadAndDisplay from '../agentForms/components/UploadAndDisplay';
import AgentPostPropertyForm1 from '../agentForms/forms/AgentPostPropertyForm1';

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeSection, setActiveSection] = useState('profile');

    useEffect(() => {
        const section = searchParams.get('section');
        if (section) {
            setActiveSection(section);
        }
    });

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
            <div style={{width:'100%'}}> 
                {/* {activeSection === 'postproperty' && <PostProperty/>} */}
                {activeSection === 'postproperty' && <AgentPostPropertyForm1/>}
            </div>
           </div>
           
        </div>
    )
}

export default User
