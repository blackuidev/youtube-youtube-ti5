import { Routes, Route } from 'react-router-dom';
import React from 'react';

// Placeholder for a Layout component that would typically wrap the entire application
// In a real application, this would be a separate component file (e.g., src/components/Layout.tsx)
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">Blog Header</header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">Blog Footer</footer>
    </div>
  );
};

// Placeholder for the Home Page component
// In a real application, this would be a separate component file (e.g., src/pages/HomePage.tsx)
const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blog!</h1>
      <p>Explore our latest articles.</p>
      {/* Add a link to a sample blog post for demonstration */}
      <a href="/blog/123" className="text-blue-500 hover:underline mt-4 inline-block">View Sample Blog Post</a>
    </div>
  );
};

// Placeholder for an individual Blog Post Page component
// In a real application, this would be a separate component file (e.g., src/pages/BlogPostPage.tsx)
// It would typically use `useParams` from 'react-router-dom' to get the 'id'
const BlogPostPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>(); // Example of how to get the ID
  const id = "123"; // Hardcoded for this placeholder

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Post #{id}</h1>
      <p>This is the content for blog post with ID: {id}.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Home</a>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        {/* You might want to add a NotFound component for unmatched routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
