export const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 flex flex-col items-center">
        
        <div className="animate-diagonal w-20 h-20 bg-purple-500"></div>
        
        <div className="animate-diagonal">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent leading-right">
            Hi, It's John Benedict Bongcac
          </h1>
        </div>

        <p className="text-gray-400 text-lg mb-2 whitespace-nowrap font-semibold">
          Computer Science student at the University of Mindanao
        </p>
        <p className="text-gray-600 text-lg mb-8 whitespace-nowrap font-light">
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
