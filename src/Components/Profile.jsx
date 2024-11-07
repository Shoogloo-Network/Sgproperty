import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    placeOfBirth: '',
    propertyRequirement: '',
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserProfile(prev => ({
        ...prev,
        profileImage: URL.createObjectURL(file)
      }));
    }
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      
      <div className="profile-image-section">
        <img 
          src={userProfile.profileImage || '/default-avatar.png'} 
          alt="Profile" 
          className="profile-image"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-input"
        />
      </div>

      <form className="profile-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={userProfile.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userProfile.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={userProfile.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={userProfile.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={userProfile.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
          />
        </div>

        <div className="form-group">
          <label>Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={userProfile.placeOfBirth}
            onChange={handleInputChange}
            placeholder="Enter your place of birth"
          />
        </div>

        <div className="form-group">
          <label>Property Requirement</label>
          <textarea
            name="propertyRequirement"
            value={userProfile.propertyRequirement}
            onChange={handleInputChange}
            placeholder="Describe your property requirements"
          />
        </div>

        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile
