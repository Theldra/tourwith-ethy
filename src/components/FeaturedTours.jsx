import { Link } from 'react-router-dom';

function FeaturedTours() {
  const featuredTours = [
    {
      id: 1,
      name: "Kakum National Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kakum_National_Park_Canopy_Walkway.jpg/1200px-Kakum_National_Park_Canopy_Walkway.jpg",
      description: "Experience the famous canopy walkway and rainforest",
      price: "GH₵300"
    },
    {
      id: 2,
      name: "Mole National Park",
      image: "https://www.visitghana.com/wp-content/uploads/2019/02/Mole-National-Park.jpg",
      description: "Ghana's largest wildlife sanctuary",
      price: "GH₵800"
    },
    {
      id: 3,
      name: "Boti Falls",
      image: "https://www.visitghana.com/wp-content/uploads/2019/02/Boti-Falls.jpg",
      description: "Twin waterfalls in the Eastern Region",
      price: "GH₵280"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Eco Tours</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div 
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-duration-300"
            >
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png';
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <Link 
                  to={`/tours/${tour.id}`}
                  className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/tours"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;