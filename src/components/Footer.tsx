import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>&copy; {currentYear} Lightswind AI. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center sm:justify-end space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
