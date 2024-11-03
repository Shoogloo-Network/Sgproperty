import '../Components/FormPopup.css';

const FormPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>✕</button>
                <h2>Request Information</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Your Phone Number" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormPopup;
