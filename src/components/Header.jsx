import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                </Link>
                <div class="md:hidden flex items-center lg:order-2">
                    <a class="text-3xl" href="#">
                        <div class="hover:cursor-pointer ">
                            <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                        </div>
                    </a>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex  lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to="/"
                                        className={({isActive}) =>
                                            `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                            </NavLink>
                        </li>
                        <li>
                                <NavLink to="/about"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                        </li>                      
                        {/* <li>
                                <NavLink to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                        </li>                       */}
                    </ul>
                </div>
            </div>

        </nav>
    </header>
  )
}

export default Header