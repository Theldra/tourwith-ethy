import { allTours } from '../utils/tourData';
import TourCard from '../components/tours/TourCard';
import SearchBar from '../components/common/SearchBar';
import { useState } from 'react';

function ToursPage() {
  const [tours, setTours] = useState(allTours);

  const handleSearch = (location, date) => {
    const filtered = allTours.filter(tour => 
      tour.location.toLowerCase().includes(location.toLowerCase())
    );
    setTours(filtered);
  };

  const handleBookNow = (tourId) => {
    console.log('Booking tour:', tourId);
  };

  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Tours</h1>
          <SearchBar onSearch={handleSearch} />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursPage;