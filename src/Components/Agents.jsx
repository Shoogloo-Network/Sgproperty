
import AgentsCard from './AgentsCard'
import "./Agents.css"
import TopAgents from './TopAgents'

const Agents = () => {
  return (
   <div style={{display:"flex",margin:'20px 40px', gap:'30px'}}>
     <div style={{width:'70%'}}>
      <AgentsCard />
    </div>
    <div style={{width:'30%'}}>
    
       <TopAgents/>
    </div>
   </div>
  )
}

export default Agents
