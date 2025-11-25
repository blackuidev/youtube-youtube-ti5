import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Blog Post Details
      </h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <p className="text-lg mb-4">
          This is a placeholder for a single blog post content.
        </p>
        <p className="text-xl font-semibold mb-4">
          Fetching blog post with ID: <span className="text-blue-400">{id}</span>
        </p>
        <p className="text-gray-400">
          In a real application, you would use this ID to fetch the specific blog post data from an API and display its title, author, content, etc.
        </p>
        {/* Add more detailed blog post content here later */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold mb-3">Example Content Section</h2>
          <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
