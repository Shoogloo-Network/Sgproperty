import { useState } from 'react';

const AdditionalAttributes = () => {
    const [formData, setFormData] = useState({
        additionalRooms: ["Pooja Room", "Servant Room", "Study Room", "Extra Room"],
        possessionStatus: "Ready To Move",
        furnishingStatus: "Semi-Furnished",
        ageOfPropertyYears: "5-7",
        numberOfBathroom: "3",
        coveredParking: "3",
      });
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox") {
          setFormData((prev) => {
            const updatedRooms = checked
              ? [...prev.additionalRooms, value]
              : prev.additionalRooms.filter((room) => room !== value);
            return { ...prev, additionalRooms: updatedRooms };
          });
        } else {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }
    
        console.log(formData); // Logs updated form data
      };
  return (
    <div id="additionalAttributes">
    {/* Additional Rooms */}
    <div className="form-group" data-attribute={18}>
      <label>Additional Rooms</label>
      <div className="flexBox number">
        {["Pooja Room", "Servant Room", "Study Room", "Extra Room"].map(
          (room) => (
            <div className="customCheckBox" key={room}>
              <input
                type="checkbox"
                className="checkBox"
                name="additionalRooms"
                value={room}
                id={`additional_rooms_${room.toLowerCase().replace(" ", "_")}`}
                checked={formData.additionalRooms.includes(room)}
                onChange={handleChange}
              />
              <label
                htmlFor={`additional_rooms_${room
                  .toLowerCase()
                  .replace(" ", "_")}`}
              >
                {room}
              </label>
            </div>
          )
        )}
      </div>
    </div>

    {/* Possession Status */}
    <div className="form-group" data-attribute={1}>
      <label>Possession Status</label>
      <div className="flexBox number">
        {["Ready To Move", "Under Construction"].map((status) => (
          <div className="customRadioBox" key={status}>
            <input
              type="radio"
              className="radio"
              name="possessionStatus"
              value={status}
              id={`possession_status_${status
                .toLowerCase()
                .replace(" ", "_")}`}
              checked={formData.possessionStatus === status}
              onChange={handleChange}
            />
            <label
              htmlFor={`possession_status_${status
                .toLowerCase()
                .replace(" ", "_")}`}
            >
              {status}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Furnishing Status */}
    <div className="form-group" data-attribute={2}>
      <label>Furnishing Status</label>
      <div className="flexBox number">
        {["Furnished", "Semi-Furnished", "Unfurnished"].map((status) => (
          <div className="customRadioBox" key={status}>
            <input
              type="radio"
              className="radio"
              name="furnishingStatus"
              value={status}
              id={`furnishing_status_${status
                .toLowerCase()
                .replace(" ", "_")}`}
              checked={formData.furnishingStatus === status}
              onChange={handleChange}
            />
            <label
              htmlFor={`furnishing_status_${status
                .toLowerCase()
                .replace(" ", "_")}`}
            >
              {status}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Other sections omitted for brevity */}
  </div>
  )
}

export default AdditionalAttributes
