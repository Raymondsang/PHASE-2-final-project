import React, { useState } from 'react';

const Demonstration = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    
    fetch('http://localhost:3000/book-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setMessage('Visit booked successfully!');
        setFormData({
          fname: '',
          lname: '',
          email: '',
          password: ''
        });
      })
      .catch(error => {
        setMessage('Error booking visit. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });

    
    setTimeout(() => {
      setMessage('Visit booked successfully!');
      setFormData({
        fname: '',
        lname: '',
        email: '',
        password: ''
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="demonstration-container">
      <h1>Book a Visit to Our Demonstration Farm</h1>
      <p>
        <button type="button" className="book-button">Book</button>
      </p>
      <form className="demonstration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your first name"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter your last name"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default Demonstration;
