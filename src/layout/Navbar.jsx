import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import navList from '../config/navList';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Asiko Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navList.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  `relative px-1 py-2 text-blue-900 capitalize font-medium transition-all duration-300
                  ${isActive ? 'font-bold' : 'hover:font-semibold'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.title}
                    {/* Smooth sliding underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-900 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      } group-hover:w-full`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button
                    className="p-2 rounded-md text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    aria-label="Toggle menu"
                  >
                    {open ? (
                      <XMarkIcon className="h-7 w-7" />
                    ) : (
                      <Bars3Icon className="h-7 w-7" />
                    )}
                  </Menu.Button>

                  {/* Mobile Drawer/Slider */}
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform -translate-x-full opacity-0"
                    enterTo="transform translate-x-0 opacity-100"
                    leave="transition duration-150 ease-in"
                    leaveFrom="transform translate-x-0 opacity-100"
                    leaveTo="transform -translate-x-full opacity-0"
                  >
                    <Menu.Items
                      className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl pt-20 px-6 flex flex-col gap-6"
                      static
                    >
                      <div className="absolute top-4 right-4">
                        {/* Close button inside drawer */}
                      </div>

                      {navList.map((item) => (
                        <Menu.Item key={item.title}>
                          {({ close }) => (
                            <NavLink
                              to={item.link}
                              onClick={close}
                              className={({ isActive }) =>
                                `block py-3 text-xl font-medium capitalize text-blue-900 border-b border-gray-200 ${
                                  isActive
                                    ? 'font-bold text-blue-900'
                                    : 'hover:font-semibold'
                                }`
                              }
                            >
                              {item.title}
                            </NavLink>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;