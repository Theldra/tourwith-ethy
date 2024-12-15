import SearchBar from "./common/SearchBar";

function Hero() {
  const handleSearch = (location, date) => {
    console.log('Searching for:', { location, date });
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kakum_National_Park_Canopy_Walkway.jpg/1920px-Kakum_National_Park_Canopy_Walkway.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Ghana's Natural Wonders
          </h1>
          <p className="text-xl text-white mb-8">
            Experience eco-friendly tours across Ghana's most beautiful destinations
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;