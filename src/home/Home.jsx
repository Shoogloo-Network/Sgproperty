import Story from "./components/Story";
import IconCardBtnWithoutHover from "../cards/IconCardBtnWithoutHover";
import RealStateBanner from "./components/RealStateBanner";
import "./Home.css";
import CardWithList from "../cards/CardWithList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const iconDataForButton = [
    {
      img: "src/assets/icon/building-img.svg",
      title: "Best Sellers in India",
      description:
        "Our freshly brewed list of the best residential projects from top rated builders in the country, backed by our award-winning start-to-finish services.",

      buttonName: "View All",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <RealStateBanner />
      <div className="home-container">
        <h1>Hot Selling Projects in India</h1>
        <div className="home-content" style={{ cursor: "pointer" }}>
          <IconCardBtnWithoutHover
            data={iconDataForButton}
            onClick={() => {
              navigate("/search");
            }}
          />
          <Story />
        </div>
        <div className="real-estate-sections">
          <div className="real-estate-section">
            <h1 className="section-title">For Real Estate Developers</h1>
            <CardWithList
              url="src/assets/thumbnail/propvr-side.svg"
              backgroundColor="#ddf5ff"
            />
          </div>
          <div
            className="real-estate-section"
            style={{ backgroundColor: "#fff" }}
          >
            <h1 className="section-title">For Agents</h1>
            <CardWithList
              url="src/assets/thumbnail/square-connect-side.svg"
              backgroundColor="#fff6e7"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
