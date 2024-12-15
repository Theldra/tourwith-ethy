import { useState } from 'react';
import { allTours } from '../utils/tourData';

function PackageBuilderPage() {
  const [selectedItems, setSelectedItems] = useState({
    destinations: [],
    activities: [],
    accommodations: [],
    dining: [],
    tours: []
  });
  
  const [totalPrice, setTotalPrice] = useState(0);

  const accommodations = [
    {
      id: 'acc1',
      name: 'Kempinski Hotel',
      location: 'Accra',
      price: 'GH₵1200',
      rating: 5,
      image: 'https://www.kempinski.com/assets/images/hotels/accra/gallery/1_exterior.jpg',
      amenities: ['Spa', 'Pool', 'WiFi', 'Restaurant']
    },
    {
      id: 'acc2',
      name: 'Royal Senchi Resort',
      location: 'Akosombo',
      price: 'GH₵800',
      rating: 4,
      image: 'https://www.royalsenchi.com/images/gallery/exterior.jpg',
      amenities: ['River View', 'Pool', 'Restaurant']
    }
    // Add more accommodations
  ];

  const restaurants = [
    {
      id: 'rest1',
      name: 'Buka Restaurant',
      location: 'Accra',
      cuisine: 'Local Ghanaian',
      price: 'GH₵100',
      rating: 4.5,
      image: 'https://example.com/buka.jpg'
    },
    {
      id: 'rest2',
      name: 'Terrace Restaurant',
      location: 'Kumasi',
      cuisine: 'Continental',
      price: 'GH₵150',
      rating: 4,
      image: 'https://example.com/terrace.jpg'
    }
    // Add more restaurants
  ];

  const handleSelect = (type, item) => {
    setSelectedItems(prev => ({
      ...prev,
      [type]: prev[type].includes(item.id) 
        ? prev[type].filter(id => id !== item.id)
        : [...prev[type], item.id]
    }));
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    // Calculate total from all selected items
    let total = 0;
    // Add calculation logic here
    setTotalPrice(total);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Build Your Custom Package
        </h1>

        {/* Progress Tracker */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>

        {/* Package Sections */}
        <div className="space-y-12">
          {/* Destinations Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Select Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTours.map(tour => (
                <div 
                  key={tour.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    selectedItems.destinations.includes(tour.id)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleSelect('destinations', tour)}
                >
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold">{tour.name}</h3>
                  <p className="text-gray-600">{tour.location}</p>
                  <p className="text-indigo-600 font-semibold mt-2">{tour.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Accommodations Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Select Accommodation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accommodations.map(acc => (
                <div 
                  key={acc.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    selectedItems.accommodations.includes(acc.id)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleSelect('accommodations', acc)}
                >
                  <img 
                    src={acc.image} 
                    alt={acc.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold">{acc.name}</h3>
                  <p className="text-gray-600">{acc.location}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(acc.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-indigo-600 font-semibold mt-2">{acc.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dining Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Select Dining Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map(rest => (
                <div 
                  key={rest.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    selectedItems.dining.includes(rest.id)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleSelect('dining', rest)}
                >
                  <img 
                    src={rest.image} 
                    alt={rest.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold">{rest.name}</h3>
                  <p className="text-gray-600">{rest.cuisine}</p>
                  <p className="text-gray-600">{rest.location}</p>
                  <p className="text-indigo-600 font-semibold mt-2">{rest.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Package Summary */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Package Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Selected Items:</span>
                <span>{Object.values(selectedItems).flat().length}</span>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <span>Total Price:</span>
                <span>GH₵{totalPrice}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Book Package
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PackageBuilderPage; 