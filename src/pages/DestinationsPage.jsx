import { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { destinationImages } from '../config/images';

function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyDestinations, setNearbyDestinations] = useState([]);

  const destinationsByRegion = {
    northern: [
      {
        id: 'gh1',
        name: 'Mole National Park',
        region: 'northern',
        image: 'https://images.unsplash.com/photo-1624821558130-b325d7946fc4',
        description: 'Ghana\'s largest wildlife park, home to elephants, antelopes, and various primates.',
        highlights: ['Safari Tours', 'Wildlife Viewing', 'Guided Bush Walks'],
        price: 'From GH₵500'
      },
      {
        id: 'gh2',
        name: 'Larabanga Mosque',
        region: 'northern',
        image: 'https://images.unsplash.com/photo-1623864804069-5d8fa0b0ce45',
        description: 'One of the oldest mosques in West Africa, built in Sudanese architectural style.',
        highlights: ['Historical Tours', 'Cultural Experience', 'Photography'],
        price: 'From GH₵200'
      }
    ],
    coastal: [
      {
        id: 'gh3',
        name: 'Cape Coast Castle',
        region: 'coastal',
        image: 'https://images.unsplash.com/photo-1580881933443-7ef47f6e3d9e',
        description: 'UNESCO World Heritage site, a historic castle with profound significance.',
        highlights: ['Historical Tours', 'Museum Visit', 'Cultural Experience'],
        price: 'From GH₵300'
      },
      {
        id: 'gh4',
        name: 'Kakum National Park',
        region: 'coastal',
        image: 'https://images.unsplash.com/photo-1624821558512-983c3ebb4b39',
        description: 'Famous for its canopy walkway suspended 30 meters above the ground.',
        highlights: ['Canopy Walkway', 'Nature Trails', 'Bird Watching'],
        price: 'From GH₵400'
      }
    ],
    eastern: [
      {
        id: 'gh5',
        name: 'Boti Falls',
        region: 'eastern',
        image: 'https://images.unsplash.com/photo-1624821557882-25b3a704c44b',
        description: 'Twin waterfalls surrounded by lush vegetation and hiking trails.',
        highlights: ['Waterfall Viewing', 'Hiking', 'Nature Photography'],
        price: 'From GH₵150'
      },
      {
        id: 'gh6',
        name: 'Aburi Botanical Gardens',
        region: 'eastern',
        image: 'https://images.unsplash.com/photo-1624821558890-b89562561795',
        description: 'Historic gardens with exotic plants and peaceful walking trails.',
        highlights: ['Garden Tours', 'Plant Species', 'Peaceful Walks'],
        price: 'From GH₵100'
      }
    ],
    ashanti: [
      {
        id: 'gh7',
        name: 'Manhyia Palace Museum',
        region: 'ashanti',
        image: 'https://images.unsplash.com/photo-1624821558678-f6b619e89bf5',
        description: 'Official residence of Asantehene, showcasing Ashanti kingdom\'s rich history.',
        highlights: ['Cultural Tours', 'Royal History', 'Traditional Artifacts'],
        price: 'From GH₵200'
      },
      {
        id: 'gh8',
        name: 'Lake Bosomtwe',
        region: 'ashanti',
        image: 'https://images.unsplash.com/photo-1624821558789-0c7cb0b9c94c',
        description: 'Sacred lake formed by meteorite impact, perfect for water activities.',
        highlights: ['Boat Rides', 'Swimming', 'Local Culture'],
        price: 'From GH₵300'
      }
    ]
  };

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'northern', label: 'Northern Region' },
    { value: 'coastal', label: 'Coastal Region' },
    { value: 'eastern', label: 'Eastern Region' },
    { value: 'ashanti', label: 'Ashanti Region' }
  ];

  const getFilteredDestinations = () => {
    if (selectedRegion === 'all') {
      return Object.values(destinationsByRegion).flat();
    }
    return destinationsByRegion[selectedRegion] || [];
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1624821558130-b325d7946fc4'; 
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          T.W.E
        </h1>
        
        {/* Region Filter */}
        <div className="mb-8">
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Region
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="mt-1 block w-full md:w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        {/* Add Map Section */}
        <div className="mb-8 h-[400px]">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerClassName="w-full h-full rounded-lg"
              center={userLocation || { lat: 0, lng: 0 }}
              zoom={userLocation ? 10 : 2}
            >
              {userLocation && (
                <Marker
                  position={userLocation}
                  title="Your Location"
                />
              )}
              
              {getFilteredDestinations().map(destination => (
                <Marker
                  key={destination.id}
                  position={destination.coordinates}
                  title={destination.name}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredDestinations().map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                  onError={handleImageError}
                />
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full">
                  {destination.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage; 