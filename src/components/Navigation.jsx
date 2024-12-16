import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import tourlogo from  "../assets/images/ourlogo.png"

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
  
    return (
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={tourlogo} alt="twe-logo" className='w-20 h-10' />
              {/* <span className="text-2xl font-bold text-indigo-600">T.W.E</span> */}
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
              <Link to="/tours" className="text-gray-700 hover:text-indigo-600">Tours</Link>
              <Link to="/destinations" className="text-gray-700 hover:text-indigo-600">Destinations</Link>
              <Link to="/activities" className="text-gray-700 hover:text-indigo-600">Activities</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            </div>
  
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FiSearch className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
              <FiUser className="h-5 w-5 text-gray-600" />
            </Link>
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FiMenu className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Tours</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Destinations</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
        <div className="flex items-center">
          {user && (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={logout}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    );
  }
export default Navigation;