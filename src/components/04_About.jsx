import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger); 

const About = ({ title, items }) => {
  const titleRef = useRef(null); 
  const sectionRef = useRef(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 80, 
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current, 
          start: "top 80%",
          toggleActions: "play none none none", 
        },
      });
    }, sectionRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={sectionRef} className="h-auto flex flex-col items-center text-center p-6 md:p-10 bg-gray-900">
     
      <p ref={titleRef} className="text-yellow-400 font-bold text-2xl md:text-4xl">
        {title}
      </p>
      <div className="w-24 md:w-36 h-1 border-b-4 border-yellow-200 mt-2 rounded-2xl mb-8 md:mb-12"></div>

      
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="w-11/12 sm:w-64 flex flex-col items-center mb-6 md:mb-12 p-4 border-yellow-300 border-2 rounded-xl 
                       transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:scale-105"
          >
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-3">
              {item.title}
            </p>
            <p className="text-lg md:text-xl text-white text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


About.propTypes = {
  title: PropTypes.string.isRequired,        
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired, 
};

export default About;
