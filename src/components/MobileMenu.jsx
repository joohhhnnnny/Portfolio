export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.95)] z-50 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }`}
    >
      <div className="flex flex-col items-center space-y-8">
        <a href="#home" className="text-2xl text-gray-300 hover:text-white transition-colors">
          Home
        </a>
        <a href="#about" className="text-2xl text-gray-300 hover:text-white transition-colors">
          About
        </a>
        <a href="#projects" className="text-2xl text-gray-300 hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" className="text-2xl text-gray-300 hover:text-white transition-colors">
          Contact
        </a>
      </div>

      <button 
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
};