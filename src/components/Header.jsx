import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';


function Header() {
    const [hidden, setHidden] = useState("max-h-0")

    const handelclick = () => {
        const btn = document.querySelector("#showmenu");

        if(hidden != "max-h-40"){
            setHidden("max-h-40")
        }else{
            setHidden("max-h-0")
        }
             
        
    }

useEffect(() => {
    setHidden("max-h-0")
}, [])


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
                    <button onClick={handelclick}
                     id="showmenu" class="text-3xl cursor-pointer " >
                        <div class="hover:cursor-pointer ">
                            <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                        </div>
                    </button>
                </div>

<div className={`lg:!max-h-none lg:!overflow-hidden w-full overflow-hidden lg:flex lg:items-center transition-all lg:w-auto mobilemenu ${hidden}`}>
    <div class="text-sm lg:flex-grow">
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
        <li>
                <NavLink to="/player"
                    className={({isActive}) =>
                        `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    Add Player Name
                </NavLink>
        </li> 
    </ul>
    </div>

</div>
            </div>

        </nav>
        
    </header>
  )
}

export default Header