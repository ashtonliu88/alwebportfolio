import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X, Sparkles, Code2 } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    ['Home', '/'],
    ['About', '/about'],
    ['Experience', '/experience'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="group flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                Ashton Liu
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="relative group px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {location.pathname === path && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative text-white group-hover:text-purple-300 transition-colors duration-300 font-medium">
                    {name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Social Links & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.a 
                href="https://github.com/ashtonliu88" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-purple-300 hover:bg-purple-500/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ashtonliu" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-blue-300 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 z-40 md:hidden overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map(([name, path]) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="font-medium text-lg">{name}</span>
                {location.pathname === path && (
                  <Sparkles className="w-5 h-5 text-purple-400" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;