import  { useState } from 'react';
import './PostProperty.css'
const PropertyForm = () => {
  // Initialize state using useState hook
  const [formData, setFormData] = useState({
    listingType: '1', // Default value for Sale
    buildingType: '1', // Default value for Residential
    propertyType: '1', // Default value for Apartment
    city: '',
    project: '',
    locality: '',
    numberOfRooms: '2.5', // Default value
    area: '',
    areaType: '27', // Default value for Built-up Area
    areaUOM: '23' // Default value for Sq. Yd.
  });

  // Handle change for radio inputs and text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission to log the data to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="rightBox postYourPropertyBox">
        <div className="yourprogressBox">
      <div id="listingScoreBox" className="scoreBox fixed">
        <div className="scoreBdy">
          <div className="progressBox">
            <div className="bar" data-name="listing_score" data-percent="5%">
              <svg viewBox="-10 -10 220 220">
                <g fill="none" strokeWidth={15} transform="translate(100,100)">
                  <path
                    d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                    stroke="url(#cl1)"
                  />
                  <path
                    d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                    stroke="url(#cl2)"
                  />
                  <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
                  <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
                  <path
                    d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                    stroke="url(#cl5)"
                  />
                  <path
                    d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                    stroke="url(#cl6)"
                  />
                </g>
              </svg>
              <svg viewBox="-10 -10 220 220">
                <path
                  d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                  strokeDashoffset="31.5"
                />
              </svg>
            </div>
            <svg width={0} height={0}>
              <defs>
                <linearGradient
                  id="cl1"
                  gradientUnits="objectBoundingBox"
                  x1={0}
                  y1={0}
                  x2={1}
                  y2={1}
                >
                  <stop stopColor="#f5a623" />
                  <stop offset="100%" stopColor="#f5a623" />
                </linearGradient>
                <linearGradient
                  id="cl2"
                  gradientUnits="objectBoundingBox"
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={1}
                >
                  <stop stopColor="#f5a623" />
                  <stop offset="100%" stopColor="#f5a623" />
                </linearGradient>
                <linearGradient
                  id="cl3"
                  gradientUnits="objectBoundingBox"
                  x1={1}
                  y1={0}
                  x2={0}
                  y2={1}
                >
                  <stop stopColor="#f5a623" />
                  <stop offset="100%" stopColor="#64b40d" />
                </linearGradient>
                <linearGradient
                  id="cl4"
                  gradientUnits="objectBoundingBox"
                  x1={1}
                  y1={1}
                  x2={0}
                  y2={0}
                >
                  <stop stopColor="#64b40d" />
                  <stop offset="100%" stopColor="#64b40d" />
                </linearGradient>
                <linearGradient
                  id="cl5"
                  gradientUnits="objectBoundingBox"
                  x1={0}
                  y1={1}
                  x2={0}
                  y2={0}
                >
                  <stop stopColor="#64b40d" />
                  <stop offset="100%" stopColor="#64b40d" />
                </linearGradient>
                <linearGradient
                  id="cl6"
                  gradientUnits="objectBoundingBox"
                  x1={0}
                  y1={1}
                  x2={1}
                  y2={0}
                >
                  <stop stopColor="#64b40d" />
                  <stop offset="100%" stopColor="#64b40d" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h4>Listing Completeness Score</h4>
          <span>You are 95% away from completing!</span>
        </div>
      </div>
      <div className="details">
        <ul>
          <li className="active">
            <div className="box">
              <em>
                <img
                  src="/assets/images/post-property-details.svg"
                  className="img-responsive"
                  alt="post-property-details"
                />
              </em>{" "}
              <span>Property Details</span>
            </div>
          </li>
          <li>
            <div className="box">
              <em>
                <img
                  src="/assets/images/post-additional-details.svg"
                  className="img-responsive"
                  alt="post-additional-details"
                />
              </em>{" "}
              <span>Additional Details </span>
            </div>
          </li>
          <li>
            <div className="box">
              <em>
                <img
                  src="/assets/images/post-amenities.svg"
                  className="img-responsive"
                  alt="post-amenities"
                />
              </em>{" "}
              <span>Amenities</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="progressBar">
        <ul>
          <li>
            <em>1</em>
          </li>
          <li>
            <em>2</em>
          </li>
          <li>
            <em>3</em>
          </li>
        </ul>
        <span id="progress-style" />
      </div>
    </div>
      <div className="addListingsBox" id="addListingsBox1">
        <h1>Provide details about your Property</h1>
        <form onSubmit={handleSubmit}>
          <div className="listBody">
            {/* Property Listing for Sale or Rent */}
            <div className="form-group">
              <label>Property Listing for</label>
              <div className="flexBox">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="listingType"
                    value="1"
                    id="listing-type-1"
                    checked={formData.listingType === '1'}
                    onChange={handleChange}
                  />
                  <label htmlFor="listing-type-1">Sale</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="listingType"
                    value="0"
                    id="listing-type-0"
                    checked={formData.listingType === '0'}
                    onChange={handleChange}
                  />
                  <label htmlFor="listing-type-0">Rent</label>
                </div>
              </div>
            </div>

            {/* Building Type (Residential or Commercial) */}
            <div className="form-group">
              <label>Building Type</label>
              <div className="flexBox">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="buildingType"
                    value="1"
                    id="building-type-1"
                    checked={formData.buildingType === '1'}
                    onChange={handleChange}
                  />
                  <label htmlFor="building-type-1">Residential</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="buildingType"
                    value="2"
                    id="building-type-2"
                    checked={formData.buildingType === '2'}
                    onChange={handleChange}
                  />
                  <label htmlFor="building-type-2">Commercial</label>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className="form-group">
              <label>Property Type</label>
              <div className="flexBox">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="propertyType"
                    value="1"
                    id="property-type-1"
                    checked={formData.propertyType === '1'}
                    onChange={handleChange}
                  />
                  <label htmlFor="property-type-1">Apartment</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="propertyType"
                    value="2"
                    id="property-type-2"
                    checked={formData.propertyType === '2'}
                    onChange={handleChange}
                  />
                  <label htmlFor="property-type-2">Villa</label>
                </div>
                {/* Add other property types here */}
              </div>
            </div>

            {/* City */}
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                placeholder="Please enter city name"
                onChange={handleChange}
              />
            </div>

            {/* Project */}
            <div className="form-group">
              <label>Project/Building Name</label>
              <input
                type="text"
                name="project"
                className="form-control"
                value={formData.project}
                placeholder="Start Typing Project/Society Name For Suggestions"
                onChange={handleChange}
              />
            </div>

            {/* Locality */}
            <div className="form-group">
              <label>Locality</label>
              <input
                type="text"
                name="locality"
                className="form-control"
                value={formData.locality}
                placeholder="Start Typing Locality Name For Suggestions"
                onChange={handleChange}
              />
            </div>

            {/* Number of Rooms */}
            <div className="form-group">
              <label>Number of Rooms</label>
              <div className="flexBox number">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="numberOfRooms"
                    value="Studio"
                    id="number_of_rooms_studio"
                    checked={formData.numberOfRooms === 'Studio'}
                    onChange={handleChange}
                  />
                  <label htmlFor="number_of_rooms_studio">Studio</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="numberOfRooms"
                    value="1 Rk"
                    id="number_of_rooms_1_rk"
                    checked={formData.numberOfRooms === '1 Rk'}
                    onChange={handleChange}
                  />
                  <label htmlFor="number_of_rooms_1_rk">1 Rk</label>
                </div>
                {/* Add other room options here */}
              </div>
            </div>

            {/* Area and Area Type */}
            <div className="form-group">
              <label>Area Details</label>
              <div className="flexBox">
                <input
                  type="text"
                  name="area"
                  className="form-control"
                  value={formData.area}
                  placeholder="Enter Area Value"
                  onChange={handleChange}
                />
                <select
                 className="styled-select form-control"
                  name="areaType"
                  value={formData.areaType}
                  onChange={handleChange}
                >
                  <option value="27">Built-up Area</option>
                  <option value="28">Saleable Area</option>
                  <option value="24">Carpet Area</option>
                  <option value="25">Plot Area</option>
                </select>
              </div>
            </div>

            {/* Area Unit of Measurement */}
            <div className="form-group">
              <label>Area Unit of Measurement</label>
              <select
  className="styled-select form-control"
  name="areaUOM"
  value={formData.areaUOM}
  onChange={handleChange}
>
  <option value="22">Sq. Ft.</option>
  <option value="23">Sq. Yd.</option>
  <option value="24">Sq. Mt.</option>
  <option value="125">Acre</option>
</select>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;
