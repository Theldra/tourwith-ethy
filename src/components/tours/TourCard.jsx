import { AiFillStar } from 'react-icons/ai';

function TourCard({ tour, onBookNow }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-duration-300">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-48 object-cover"
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
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Location:</span> {tour.location}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Duration:</span> {tour.duration}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Group Size:</span> Up to {tour.maxGroupSize} people
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Start Dates:</span> {Array.isArray(tour.startDates) ? tour.startDates.join(', ') : tour.startDates}
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {tour.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => onBookNow(tour.id)}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TourCard;