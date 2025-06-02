import { useState, useEffect } from 'react';
import '../../styles/typing-animation.css';

export const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, It's John Benedict Bongcac";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen"
    >
      <div className="z-10 flex flex-col items-center px-4 text-center">
        
        <div className="typing-container">
          <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text">
            {text}<span className="animate-blink-ml1 border-r-[3px] border-purple-500">|</span>
          </h1>
        </div>

        <p className="mb-2 text-lg font-semibold text-gray-400 whitespace-nowrap">
          Computer Science student at the University of Mindanao
        </p>
        <p className="mb-8 text-lg font-light text-gray-600 whitespace-nowrap">
          Software Developer | Machine Learning Enthusiast | Artificial Intelligence
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-purple-600 text-white py-3 px-6 rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
              View Projects
          </a>
          <a href="#contact" className="border border-purple-500/50 text-purple-500 py-3 px-6 roounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10">
              Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
