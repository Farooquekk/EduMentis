import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y:5,
        duration: 1,
        ease: "bounce.in",
        repeat: -1,
        yoyo: true, 
      });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <header className="w-full h-auto relative flex flex-col sm:flex-row items-center sm:items-start px-4 sm:px-16 py-8 bg-gray-900">
      {/* Text Section */}
      <div ref={textRef} className="w-full sm:w-1/2 text-yellow-400 mt-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-left px-4 mb-7">
          Welcome to EduMentis App
        </h1>
        <p className="text-xl sm:text-2xl text-left px-4">
          EduMentis is your gateway to a brighter future, offering expert-led guidance tailored to your learning needs.
          With a wealth of curated resources, you can access quality content designed to help you excel.
          Join a vibrant community of learners and professionals who share insights and support each other’s growth.
          Whether you're starting your journey or advancing your skills, EduMentis is here to empower you every step of the way.
          Your success story begins today! 🚀
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <img
          className="w-full sm:w-[80%] h-[35vh] sm:h-[70vh] object-fill rounded-lg m-3"
          src="https://img.freepik.com/free-vector/starting-career-concept-illustration_114360-16694.jpg"
          alt="EduMentis Banner"
        />
      </div>
    </header>
  );
};

export default Home;
