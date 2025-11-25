import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Getting Started with React',
      excerpt: 'Learn the fundamentals of React and build your first component.',
      date: 'October 26, 2023',
    },
    {
      id: '2',
      title: 'Styling with Tailwind CSS',
      excerpt: 'Master utility-first CSS with Tailwind CSS for rapid UI development.',
      date: 'October 25, 2023',
    },
    {
      id: '3',
      title: 'State Management in Modern React',
      excerpt: 'Explore different state management patterns and choose the best for your app.',
      date: 'October 24, 2023',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-8">
      <header className="text-center py-12 mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-6xl lg:text-7xl">
          Our Awesome Blog
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Discover insights, tutorials, and stories on web development, design, and more.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">{post.title}</CardTitle>
              <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-16 py-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Our Awesome Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
