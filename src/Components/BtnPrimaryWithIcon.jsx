
import "./BtnPrimaryWithIcon.css";
const BtnPrimaryWithIcon = ({src , cnt , onClick}) => {
  return (
   <>
   
   <div className="callback-request" onClick={onClick}>
                    <div className='callback-request-div'>
                    <img src={src} alt="phone" className="phone-icon" />
                    <p>{cnt}</p>
                    </div>
                   
                </div>
   </>
  )
}

export default BtnPrimaryWithIcon
