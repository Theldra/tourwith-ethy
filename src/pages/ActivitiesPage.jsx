import { useState } from 'react';

function ActivitiesPage() {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  
  const activities = {
    festivals: [
      {
        id: 'fest1',
        name: 'Homowo Festival Experience',
        location: 'Ga Traditional Area, Greater Accra',
        duration: '1 day',
        price: 'GH₵450',
        description: 'Experience the traditional Ga harvest festival with local chiefs and people',
        includes: [
          'Traditional feast participation',
          'Cultural performance viewing',
          'Traditional clothing rental',
          'Local guide',
          'Photography session'
        ],
        maxParticipants: 10,
        seasonality: 'August-September'
      },
      {
        id: 'fest2',
        name: 'Akwasidae Festival',
        location: 'Manhyia Palace, Kumasi',
        duration: '1 day',
        price: 'GH₵500',
        description: 'Witness the royal Ashanti festival celebrating ancestral spirits',
        includes: [
          'Palace entry fee',
          'Traditional cloth rental',
          'Expert cultural guide',
          'Traditional lunch',
          'Souvenir gift'
        ],
        maxParticipants: 8,
        seasonality: 'Every 42 days'
      }
    ],
    cultural: [
      {
        id: 'cult1',
        name: 'Kente Weaving Workshop',
        location: 'Bonwire, Ashanti Region',
        duration: '3 hours',
        price: 'GH₵200',
        description: 'Learn the art of Kente weaving from master craftsmen',
        includes: ['Materials', 'Traditional lunch', 'Take-home piece'],
        maxParticipants: 6
      },
      {
        id: 'cult2',
        name: 'Traditional Drumming & Dancing',
        location: 'Accra Arts Centre',
        duration: '2 hours',
        price: 'GH₵150',
        description: 'Interactive session with professional performers',
        includes: ['Drum rental', 'Traditional attire', 'Photo session'],
        maxParticipants: 10
      },
      {
        id: 'cult3',
        name: 'Adinkra Symbol Making',
        location: 'Ntonso, Ashanti Region',
        duration: '4 hours',
        price: 'GH₵250',
        description: 'Learn the art of Adinkra symbol printing using traditional methods',
        includes: [
          'Materials for printing',
          'Take-home cloth piece',
          'Traditional snacks',
          'Village tour'
        ],
        maxParticipants: 6
      },
      {
        id: 'cult4',
        name: 'Traditional Bead Making',
        location: 'Krobo, Eastern Region',
        duration: '5 hours',
        price: 'GH₵280',
        description: 'Create your own traditional Krobo beads with local artisans',
        includes: [
          'Materials',
          'Lunch',
          'Take-home beads',
          'Community tour'
        ],
        maxParticipants: 8
      }
    ],
    nature: [
      {
        id: 'nat1',
        name: 'Wli Waterfalls Expedition',
        location: 'Volta Region',
        duration: '6 hours',
        price: 'GH₵350',
        description: 'Hike to Ghana\'s highest waterfall and enjoy the natural pool',
        includes: [
          'Transportation from Ho',
          'Packed lunch',
          'Guide fees',
          'Swimming time'
        ],
        maxParticipants: 10
      },
      {
        id: 'nat2',
        name: 'Shai Hills Reserve Safari',
        location: 'Greater Accra Region',
        duration: '5 hours',
        price: 'GH₵300',
        description: 'Explore wildlife and ancient caves in this historic reserve',
        includes: [
          'Park entry fees',
          'Safari guide',
          'Refreshments',
          'Cave exploration'
        ],
        maxParticipants: 8
      }
    ],
    culinary: [
      {
        id: 'food1',
        name: 'Traditional Cooking Class',
        location: 'Jamestown, Accra',
        duration: '4 hours',
        price: 'GH₵180',
        description: 'Learn to cook authentic Ghanaian dishes',
        includes: ['Ingredients', 'Recipe book', 'Meal tasting'],
        maxParticipants: 8
      },
      {
        id: 'food2',
        name: 'Street Food Tour',
        location: 'Kumasi Central Market',
        duration: '3 hours',
        price: 'GH₵150',
        description: 'Taste various local delicacies with expert guides',
        includes: ['Food tastings', 'Drink tastings', 'Market tour'],
        maxParticipants: 6
      },
      {
        id: 'food3',
        name: 'Palm Wine Tapping Experience',
        location: 'Aburi Gardens area',
        duration: '3 hours',
        price: 'GH₵200',
        description: 'Learn about traditional palm wine tapping and tasting',
        includes: [
          'Palm wine tasting',
          'Local snacks',
          'Demonstration',
          'Take-home bottle'
        ],
        maxParticipants: 6
      }
    ],
    craft: [
      {
        id: 'craft1',
        name: 'Bronze Casting Workshop',
        location: 'Krofrom, Kumasi',
        duration: '4 hours',
        price: 'GH₵300',
        description: 'Learn traditional bronze casting techniques',
        includes: [
          'Materials',
          'Safety equipment',
          'Take-home piece',
          'Refreshments'
        ],
        maxParticipants: 5
      },
      {
        id: 'craft2',
        name: 'Basket Weaving Class',
        location: 'Bolgatanga',
        duration: '3 hours',
        price: 'GH₵180',
        description: 'Learn the art of Bolga basket weaving',
        includes: [
          'Weaving materials',
          'Take-home basket',
          'Local refreshments',
          'Market visit'
        ],
        maxParticipants: 8
      }
    ]
  };

  const durations = [
    { value: 'short', label: 'Short (1-3 hours)' },
    { value: 'half-day', label: 'Half Day (4-6 hours)' },
    { value: 'full-day', label: 'Full Day (7+ hours)' },
    { value: 'multi-day', label: 'Multi-Day Experiences' }
  ];

  const pricingTiers = [
    { value: 'budget', label: 'Budget (Under GH₵200)' },
    { value: 'standard', label: 'Standard (GH₵200-350)' },
    { value: 'premium', label: 'Premium (GH₵350+)' }
  ];

  const handleActivitySelect = (activityId) => {
    setSelectedActivities(prev => {
      if (prev.includes(activityId)) {
        return prev.filter(id => id !== activityId);
      }
      return [...prev, activityId];
    });
  };

  const calculateTotalPrice = () => {
    return selectedActivities.reduce((total, activityId) => {
      const activity = Object.values(activities)
        .flat()
        .find(a => a.id === activityId);
      return total + parseInt(activity.price.replace('GH₵', ''));
    }, 0);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Customize Your Experience
        </h1>

        {/* Duration Filter */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Duration
          </label>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="mt-1 block w-full md:w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All Durations</option>
            {durations.map((duration) => (
              <option key={duration.value} value={duration.value}>
                {duration.label}
              </option>
            ))}
          </select>
        </div>

        {/* Activities Grid */}
        <div className="space-y-8">
          {Object.entries(activities).map(([category, categoryActivities]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 capitalize">
                {category} Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryActivities.map((activity) => (
                  <div 
                    key={activity.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedActivities.includes(activity.id)
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                    onClick={() => handleActivitySelect(activity.id)}
                  >
                    <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>
                    <p className="text-gray-600 mb-2">{activity.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-medium">Location:</span> {activity.location}</p>
                      <p className="text-sm"><span className="font-medium">Duration:</span> {activity.duration}</p>
                      <p className="text-sm"><span className="font-medium">Price:</span> {activity.price}</p>
                      <p className="text-sm"><span className="font-medium">Max Participants:</span> {activity.maxParticipants}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-1">Includes:</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        {activity.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Activities Summary */}
        {selectedActivities.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Selected Activities</h2>
            <ul className="space-y-2 mb-4">
              {selectedActivities.map(activityId => {
                const activity = Object.values(activities)
                  .flat()
                  .find(a => a.id === activityId);
                return (
                  <li key={activityId} className="flex justify-between items-center">
                    <span>{activity.name}</span>
                    <span>{activity.price}</span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>GH₵{calculateTotalPrice()}</span>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Book Selected Activities
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivitiesPage; 