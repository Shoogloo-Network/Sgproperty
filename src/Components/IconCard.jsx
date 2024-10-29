
import '../Components/IconCard.css';

const IconCard = ({ data }) => {
  return (
    <div className="icon-card-container" >
      {/* style={style} */}
      {data.map((item, index) => (
        <div key={index} className="icon-card">
          <img src={item.img} alt={item.description} className="icon-card-image" />
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
