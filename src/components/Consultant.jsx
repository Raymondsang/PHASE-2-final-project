import React, { useState } from 'react';

const Consultant = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    product: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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

    fetch('https://final-backend-lime.vercel.app/consultant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setMessage('Your request has been submitted successfully!');
        setFormData({
          email: '',
          password: '',
          product: ''
        });
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('There was an error submitting your request. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="consultant-container">
      <h1>Talk to a Consultant Today</h1>
      <form className="consultant-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            aria-label="Email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            aria-label="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Select Product:</label>
          <select
            id="product"
            value={formData.product}
            onChange={handleChange}
            required
            aria-label="Product selection"
          >
            <option value="" disabled>Select a product</option>
            <option value="Greenhouse equipment">Greenhouse Equipment</option>
            <option value="Irrigation equipment">Irrigation Equipment</option>
            <option value="Fertilizers and agrochemicals">Fertilizers and Agrochemicals</option>
            <option value="Talk to a specialist">Talk to a Specialist</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default Consultant;
