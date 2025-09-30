import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const recipientEmail = 'danielfrosh22@gmail.com'; // My email addresss 
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // from Ai = This is mostly Optionally, clear the form after opening the email client
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-intro-text">
      Need a developer/designer you can count on? Tell me about your project below, and I’ll follow up right away!
      </p>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
          Kindly submit
          </button>
        </form>
      </div>

      <div className="contact-info-footer">
        <p>Or reach out directly:</p>
        <p>Email: <a href="mailto:danielfrosh22@email.com">danielfrosh22@gmail.com</a></p>
        <div className="social-icons">
          <a href="https://github.com/KdanTechnies" target="_blank" rel="noopener noreferrer"><i className="fab fa-github">🐙</i>
          </a>
          <a href="https://www.linkedin.com/in/kaluonukadaniel133" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">🔗</i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;