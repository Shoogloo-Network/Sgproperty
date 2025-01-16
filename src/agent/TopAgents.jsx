import  { useEffect, useState } from 'react';
import './TopAgents.css'
const TopAgents = () => {
     const [dataRes, setDataRes] = useState([]);
    
        useEffect(() => {
            data();
        }, []);
    
        const data = async () => {
            try {
                const response = await fetch('http://localhost:8000/agents');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const dataRes = await response.json();
                dataRes.sort((a,b)=>{
                    return b.listing - a.listing
                })
                setDataRes(dataRes);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
  return (
    <div className="container">
    <h1 className="title">Top Agents</h1>
    <div className="agents">
      {dataRes.map((item, index) => (
        <div key={item.id} className="agent-card">
         <div className='agent-card-image'>
         <img 
            src={item.profileImage} 
            alt={item.title} 
            className="agent-image" 
          />
          <h2 className="agent-name">{item.agentName}</h2>
         </div>
        <div className="agent-rank-icon">
        <i className="fa-solid fa-list-check"></i>
         <div className="agent-rank-div ">
          <p className="agent-rank">{index + 1}</p>
         </div>
        </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default TopAgents
