// components/NavbarSecondary.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '../lib/utils';

function NavbarSecondary() {
  const [isOpen, setIsOpen] = useState(false);

  // All nav items will navigate to the home page.
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/' },
    { name: 'Chefs', to: '/' },
    { name: 'Menu', to: '/' },
    { name: 'Blog', to: '/' },
    { name: 'FAQ', to: '/' },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <RouterLink
            to="/"
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <motion.span 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="font-display text-2xl font-bold text-primary"
            >
              Apni Meal
            </motion.span>
          </RouterLink>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <RouterLink
                  to={item.to}
                  className="text-gray-700 hover:text-primary font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </RouterLink>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <RouterLink
                to="/"
                className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Order Now
              </RouterLink>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <RouterLink
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </RouterLink>
                </motion.div>
              ))}
              <div className="mt-4 flex items-center space-x-2 px-3">
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <RouterLink
                    to="/"
                    className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors text-center cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Order Now
                  </RouterLink>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavbarSecondary;