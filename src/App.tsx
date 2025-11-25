import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Header from './components/Header'; // Import the new Header component
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Render the Header component here */}
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
