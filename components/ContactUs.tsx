import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import Spinner from './Spinner';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call for 1.5 seconds
      setTimeout(() => {
        console.log({ name, email, message });
        
        setIsSubmitting(false);
        setSubmitted(true);

        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
        
        setTimeout(() => setSubmitted(false), 5000); // Reset message after 5 seconds
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
          
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center min-w-[150px] min-h-[52px]"
                  >
                    {isSubmitting ? <Spinner /> : 'Send Query'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-10 text-lg text-gray-700">
            <a href="tel:+919746567890" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9746567890</span>
            </a>
            <a href="mailto:tradersnetcare@gmail.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>tradersnetcare@gmail.com</span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactUs;
