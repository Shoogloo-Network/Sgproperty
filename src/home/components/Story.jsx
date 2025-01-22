import Stories from "react-insta-stories";
import Card from "../../cards/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPopup from "../../userform/FormPopup";
import { fetchData } from "../../api/data";
const Story = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [cardData, setCardData] = useState([]);

  // Fetch card data from the API
  useEffect(() => {
    fetchData("cardData", setCardData);
  }, []);

 
  const addToLocalStorage = (item) => {
    const existingData = JSON.parse(localStorage.getItem("clickedCardsHistory") || "[]");
    const newData = [...existingData, item];
    localStorage.setItem("clickedCardsHistory", JSON.stringify(newData));
  };

  // Generate stories from card data
  const stories = cardData?.map((item, index) => ({
    content: ({ action, isPaused }) => (
      item.backgroundImage ? (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${item.backgroundImage})`,
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
            position: "relative",
          }}
        >
          {/* Left-side clickable area */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowForm(true);
              console.log("Clicked Card Data (Form):", item);
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "30%",
              height: "100%",
              cursor: "pointer",
            }}
          />

          {/* Right-side clickable area */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              navigate("/detail-page");
              console.log("Clicked Card Data (Navigate):", item);
              addToLocalStorage(item);
            }}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "70%",
              height: "100%",
              zIndex: 2,
              cursor: "pointer",
            }}
          />

          {/* Card content */}
          <div
            style={{
              width: "40%",
              marginTop: "25px",
              position: "relative",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "5px",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "orange",
                  color: "black",
                  gap: "10px",
                  padding: "5px 15px",
                  pointerEvents: "none",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                <img src="src/assets/stories/story.png" alt="Exclusive" />
                <p>Exclusive</p>
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fff",
                  color: "black",
                  gap: "10px",
                  padding: "5px 15px",
                  pointerEvents: "none",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                <img src="src/assets/stories/quality.png" alt="Square Assured" />
                <p>Square Assured</p>
              </div>
            </div>
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              descriptionPrice={item.descriptionPrice}
              iconCardData={item.iconCardData}
            />
          </div>
        </div>
      ) : (
        <div style={{ height: "100%", width: "100%", backgroundColor: "red" }}>
          <p>Error: Missing background image</p>
        </div>
      )
    ),
    duration: 8000,
  }));

  const handleAllStoriesEnd = () => {
    console.log("All stories ended");
    setCurrentIndex(0);
  };

  const handleNextStory = (index) => {
    console.log("Next story", index);
    setCurrentIndex(index);
  };

  const handlePreviousStory = (index) => {
    console.log("Previous story", index);
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Stories
        stories={stories.length > 0 ? stories : [{ content: () => <div>No stories available</div> }]}
        loop={true}
        defaultInterval={2000}
        width="100%"
        height="100%"
        keyboardNavigation={true}
        preventDefault={true}
        onAllStoriesEnd={handleAllStoriesEnd}
        onNext={(s, st) => handleNextStory(st)}
        onPrevious={(s, st) => handlePreviousStory(st)}
        currentIndex={currentIndex}
      
      />
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Story;
