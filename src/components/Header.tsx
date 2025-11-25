import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Info, Mail } from 'lucide-react'; // Using lucide-react for icons

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="flex items-center gap-2">
        <Home className="h-6 w-6" />
        <h1 className="text-xl font-bold">My Awesome App</h1>
      </div>
      <nav className="flex gap-4">
        <Button variant="ghost" className="text-white hover:bg-gray-700">
          <Home className="h-4 w-4 mr-2" /> Home
        </Button>
        <Button variant="ghost" className="text-white hover:bg-gray-700">
          <Info className="h-4 w-4 mr-2" /> About
        </Button>
        <Button variant="ghost" className="text-white hover:bg-gray-700">
          <Mail className="h-4 w-4 mr-2" /> Contact
        </Button>
      </nav>
    </header>
  );
};

export default Header;
