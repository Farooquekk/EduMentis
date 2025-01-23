import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => (
  <footer className="p-4 w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between">
    <div>
      <p className="my-4">Email us: support@edumentis.com</p>
    </div>
    <div>
      <h2 className="font-bold text-xl mt-4">EduMentis</h2>
      <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
      <p>About Us</p>
      <p>FAQs</p>
      <p>Privacy Policy</p>
    </div>
    <div>
      <h2 className="font-bold text-xl mt-4">Our Products</h2>
      <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
      <p>Mentorship Program</p>
      <p>Job Board</p>
      <p>Experience Center</p>
      <p>Become a Mentor</p>
      <p>EduMentis Hall of Fame</p>
    </div>
    <div>
      <h2 className="font-bold text-xl mt-4">Follow Us</h2>
      <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/edumentis" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} className="hover:text-yellow-400" />
        </a>
        <a href="https://twitter.com/edumentis" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} className="hover:text-yellow-400" />
        </a>
        <a href="https://www.linkedin.com/company/edumentis" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-yellow-400" />
        </a>
        <a href="https://www.instagram.com/edumentis" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-yellow-400" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
