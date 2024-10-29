import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Default to India code
    phone: '',
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newInterests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);
        return { ...prevData, interests: newInterests };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your inquiry has been submitted!');
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <div className="phone-input">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="country-code-dropdown"
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+49">+49 (Germany)</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Interested in</label>
          <div className="interest-options">
            <div className="interest-option">
              <input
                type="checkbox"
                name="interests"
                value="Buying"
                checked={formData.interests.includes('Buying')}
                onChange={handleChange}
              />
              <span>Buying</span>
            </div>
            <div className="interest-option">
              <input
                type="checkbox"
                name="interests"
                value="Selling"
                checked={formData.interests.includes('Selling')}
                onChange={handleChange}
              />
              <span>Selling</span>
            </div>
            <div className="interest-option">
              <input
                type="checkbox"
                name="interests"
                value="Home Loan"
                checked={formData.interests.includes('Home Loan')}
                onChange={handleChange}
              />
              <span>Home Loan</span>
            </div>
            <div className="interest-option">
              <input
                type="checkbox"
                name="interests"
                value="Interiors"
                checked={formData.interests.includes('Interiors')}
                onChange={handleChange}
              />
              <span>Interiors</span>
            </div>
          </div>
        </div>
        <button type="submit" className="contact-button">
          Contact Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
