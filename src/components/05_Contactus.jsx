import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger); 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef(null); 
  const sectionRef = useRef(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
     
      gsap.from(formRef.current, {
        opacity: 0,
        y: 80, 
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none', 
        },
      });
    }, sectionRef); 

    return () => ctx.revert(); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
  };

  return (
    <section ref={sectionRef} className="p-8 bg-gray-900 text-yellow-400 font-bold">
      <div className="container mx-auto text-center">
        
        <h2 ref={formRef} className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us
        </h2>
        <div className="w-24 md:w-36 h-1 border-b-4 border-yellow-200 mt-2 rounded-2xl mb-8 md:mb-12 mx-auto"></div>

        <p className="text-lg mb-8">
          We would love to hear from you. Fill out the form below to get in touch with our team.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};



export default ContactUs;
