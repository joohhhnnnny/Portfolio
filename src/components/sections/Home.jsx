export const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent leading-right">
          Hi, I'm John Benedict Bongcac
        </h1>

        <p className="text-gray-400 text-lg mb-2 whitespace-nowrap font-semibold">
          I'm a Computer Science student at the University of Mindanao
        </p>
        <p className="text-gray-600 text-lg mb-8 whitespace-nowrap font-light">
          Software Developer | Machine Learning Enthusiast | Artificial Intelligence
        </p>
      </div>
    </section>
  )
}
