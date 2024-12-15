import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    onSearch(location, date);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where do you want to go?"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="md:w-48">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button 
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <FiSearch className="h-5 w-5" />
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;