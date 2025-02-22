import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="font-bold text-xl">Portfolio</Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Projects', '/projects'],
              ['Contact', '/contact'],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className="relative"
              >
                {location.pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-black bottom-[-4px]"
                  />
                )}
                {name}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/ashtonliu88" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/ashtonliu" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;