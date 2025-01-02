import React from 'react';

export const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      <a href="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
        Home
      </a>
      <a href="/about" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
        About
      </a>
      <a href="/events" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
        Events
      </a>
      <a href="/blog" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
        Blog
      </a>
      <a href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
        Contact
      </a>
    </nav>
  );
};