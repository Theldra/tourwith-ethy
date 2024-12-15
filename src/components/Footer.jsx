import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TourWithEthy</h3>
            <p className="text-gray-400 mb-4">
              Discover the world with our expert-guided tours and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FiInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Tours</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Travel Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMapPin className="h-5 w-5 mr-2" />
                <span>123 Travel Street, Tourism City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-5 w-5 mr-2" />
                <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="h-5 w-5 mr-2" />
                <a href="mailto:info@tourwith-ethy.com" className="hover:text-white transition-colors">
                  info@tourwithethy.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {2024} TourWithEthy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}