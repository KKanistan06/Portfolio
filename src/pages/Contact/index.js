import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackground from '../../components/SectionBackground';
import Card3D from '../../components/Card3D';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_7k0uck9'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_b2ck3cz'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'HUq204E93o9koNRd9'; // Replace with your EmailJS public key

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Auto-hide success/error messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kanesalingam Kanistan', // Your name
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Clear form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setErrors({});
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissMessage = () => {
    setSubmitStatus(null);
  };

  return (
    <SectionBackground sectionName="contact">
      <section id="contact" className="contact section">
        <div className="contact__container container">
          <ScrollReveal animation="fadeInUp">
            <div className="contact__header">
              <h2 className="contact__title">Get In Touch</h2>
              <p className="contact__subtitle">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInUp" delay={300}>
            <Card3D className="contact__form-wrapper" intensity={6}>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact__form-input ${errors.name ? 'contact__form-input--error' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className="contact__form-error">{errors.name}</span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact__form-input ${errors.email ? 'contact__form-input--error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className="contact__form-error">{errors.email}</span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`contact__form-input ${errors.subject ? 'contact__form-input--error' : ''}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <span className="contact__form-error">{errors.subject}</span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`contact__form-textarea ${errors.message ? 'contact__form-input--error' : ''}`}
                    placeholder="Tell me about your project or just say hello!"
                    rows="6"
                  ></textarea>
                  {errors.message && (
                    <span className="contact__form-error">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact__form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact__form-spinner"></span>
                      Sending Email...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="contact__form-message contact__form-message--success">
                    <div className="contact__message-content">
                      <span className="contact__message-icon"></span>
                      <span className="contact__message-text">
                        Email sent successfully! I'll get back to you soon.
                      </span>
                      <button 
                        type="button"
                        className="contact__message-dismiss"
                        onClick={dismissMessage}
                        aria-label="Dismiss message"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="contact__form-message contact__form-message--error">
                    <div className="contact__message-content">
                      <span className="contact__message-icon"></span>
                      <span className="contact__message-text">
                        Failed to send email. Please try again or contact me directly.
                      </span>
                      <button 
                        type="button"
                        className="contact__message-dismiss"
                        onClick={dismissMessage}
                        aria-label="Dismiss message"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </Card3D>
          </ScrollReveal>
        </div>
      </section>
    </SectionBackground>
  );
};

export default Contact;
