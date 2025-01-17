import  { useState, useEffect } from 'react';
import UserSectionList from './UserSectionList'
import Activity from '../../Components/Activity'
import Profile from '../../Components/Profile'
import { useSearchParams } from 'react-router-dom'
import PostProperty from '../../Components/PostProperty';
import AgentPostPropertyForm1 from '../../agentForms/forms/AgentPostPropertyForm1';
import Amenities from '../../agentForms/forms/Amenities';

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeSection, setActiveSection] = useState('profile');
    const [activeForm1 , setActiveForm1]=useState(false);
    const [activeForm2 , setActiveForm2]= useState(false);
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
               {!activeForm1 && (activeSection === 'postproperty' && <PostProperty active = {setActiveForm1}/>)}
                {(activeForm1 && !activeForm2 )&&(activeSection === 'postproperty' && <AgentPostPropertyForm1 active = {setActiveForm2}/>)}
                {activeForm2 &&(activeSection === 'postproperty' && <Amenities/>)}
            </div>
           </div>
           
        </div>
    )
}

export default User
