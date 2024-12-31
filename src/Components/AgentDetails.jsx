import  { useEffect, useState } from 'react';
import './AgentDetails.css';
const AgentDetails = () => {
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
                setDataRes(dataRes);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
  return (
    <div>
      {
        dataRes.map((item) => {

            return (
                <div key={item.id}>
<div>
<h1>{item.agentName}</h1>
</div>
<div>
<h1>{item.agentLocation}</h1>
</div>
                </div>
            )
        })
      }
    </div>
  )
}

export default AgentDetails
