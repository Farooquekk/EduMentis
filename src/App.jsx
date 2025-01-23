import Cursor from "./components/01_Cursor";
import Navbar from "./components/02_Navbar";
import Home from "./components/03_Home";
import About from "./components/04_About";
import Mentors from "./components/05_Mentors"; 
import ContactUs from "./components/05_Contactus";
import Footer from "./components/Footer";
import "tailwindcss/tailwind.css";
import { Element } from "react-scroll";

const mentorData = [
  {
    name: "Prof. Eida Taruha",
    profilePic: "https://img.freepik.com/free-vector/hand-drawn-black-teacher-clipart-illustration_23-2150940843.jpg", 
    description: "Expert in making helicopter with 10+ years of experience."
  },
  {
    name: "Prof. Jane Smith",
    profilePic: "https://cdn.vectopus.com/getillustrations/icons/EBC8B38023A8/BB835FE76F4D/icons-elderly-man-elderly-man-professor-teacher-256.png", 
    description: "Specializes in Data Science and Computational Biology."
  },
  {
    name: "Prof. Michael Brown",
    profilePic: "https://img.freepik.com/free-vector/hand-drawn-black-teacher-clipart-illustration_23-2150940843.jpg", 
    description: "Researches Quantum Computing and Cryptography."
  },
  {
    name: "Prof. Emily Wilson",
    profilePic: "https://img.freepik.com/free-vector/young-woman-white_25030-39547.jpg", 
    description: "Focuses on Software Engineering and Cloud Computing."
  },
  {
    name: "Prof. Sarah Johnson",
    profilePic: "https://img.freepik.com/premium-vector/smiling-young-man-avatar-flat-cartoon-style-vector-cute-male-character-boy-portrait-isolated_384065-338.jpg", 
    description: "Works on Network Security and Distributed Systems."
  },
  {
    name: "Prof. David Martinez",
    profilePic: "https://cdn.vectopus.com/getillustrations/icons/EBC8B38023A8/BB835FE76F4D/icons-elderly-man-elderly-man-professor-teacher-256.png", 
    description: "Researches Natural Language Processing and AI Ethics."
  },
  {
    name: "Prof. Linda Clark",
    profilePic: "https://img.freepik.com/free-vector/young-woman-white_25030-39547.jpg", 
    description: "Expert in Robotics and Autonomous Systems."
  },
  {
    name: "Prof. James Taylor",
    profilePic: "https://img.freepik.com/free-vector/hand-drawn-black-teacher-clipart-illustration_23-2150940843.jpg", 
    description: "Focuses on Computer Vision and Artificial Intelligence."
  }
];

const App = () => {
  return (
    <div className="bg-slate-950 text-white relative">
      <Cursor />
      <Navbar />
           <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About 
          title="Unlock Your Potential with EduMentis"
          items={[
            { title: "Learn from Industry Experts", description: "Gain insights and knowledge from experienced professionals." },
            { title: "Customized Learning Paths", description: "Personalized courses tailored to your educational and career goals." },
            { title: "24/7 Mentorship and Support", description: "Access expert guidance anytime, anywhere for continuous learning." },
            { title: "Career-Focused Skill Development", description: "Enhance your skills with hands-on training and real-world applications." }
          ]}
        />

        <About 
          title="Our Learning Features"
          items={[
            { title: "Expert Guidance", description: "Learn from top industry experts with years of experience." },
            { title: "Curated Courses", description: "Access high-quality courses tailored to your career goals." },
            { title: "Interactive Learning", description: "Engage with interactive lessons and hands-on projects." },
            { title: "Community Support", description: "Join a network of learners and mentors for growth." }
          ]}
        />
      </Element>

      <Element name="mentors">
        <Mentors 
          title="Meet Our Mentors"
          mentors={mentorData} 
        />
      </Element>

      <Element name="contact">
        <ContactUs />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
