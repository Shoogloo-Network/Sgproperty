
import '../Components/IconCard.css';

const IconCard = ({ data , onClick ,style,imgStyle}) => {
  return (
    <div className="icon-card-container" style={style}>
      {/* style={style} */}
      {data.map((item, index) => (
        <div key={index} className="icon-card" onClick={()=>{
          onClick(item); 
        }}  >
          <img src={item.img} alt={item.description} className="icon-card-image" style={imgStyle} />
          <div className="icon-card-content">
            {item.title && <h4 className="icon-card-title">{item.title}</h4>}
            <p className="icon-card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconCard;
