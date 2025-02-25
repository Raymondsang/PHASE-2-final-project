import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetching from server
    axios.get('https://final-backend-lime.vercel.app/contact')
      .then(response => {
        setContactInfo(response.data.contact); 
      })
      .catch(error => {
        console.error('Error fetching contact data:', error);
        setError('There was an error loading contact information.');
      });
  }, []);

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {error && <p className="error-message">{error}</p>}
      {contactInfo.length === 0 ? (
        <p>Loading contact information...</p>
      ) : (
        contactInfo.map((item, index) => (
          <div className="contact-item" key={index}>
            <p><strong>{item.label}:</strong></p>
            {item.href ? (
              <a href={item.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                {item.value || item.label}
              </a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Contact;
