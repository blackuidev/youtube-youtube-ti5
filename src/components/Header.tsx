import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          My Blog
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300 transition-colors duration-200">
                Home
              </a>
            </li>
            {/* Add more navigation links here if needed */}
            {/* <li>
              <a href="/about" className="hover:text-gray-300 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition-colors duration-200">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
