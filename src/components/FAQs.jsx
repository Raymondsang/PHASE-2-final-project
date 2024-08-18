import React, { useEffect, useState } from 'react';

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch FAQs data from the server
    fetch('https://final-backend-lime.vercel.app/faqs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching FAQs:', error);
        setError('There was an error loading the FAQs. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading FAQs...</p>;
  }

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions (FAQs)</h1>
      {error && <p className="error-message">{error}</p>}
      <dl className="faqs-list">
        {faqs.length === 0 ? (
          <p>No FAQs available at the moment.</p>
        ) : (
          faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))
        )}
      </dl>
    </div>
  );
};

export default FAQs;
