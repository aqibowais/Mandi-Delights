import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const links = ["Home", "Contact", "Services", "About"];
  
  const handleGetStarted = () => {
    navigate('/');
  };

  return (
    <nav className="bg-[#03302d] border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://mandihouse230.netlify.app/assets/images/logo.webp"
            className="h-12 rounded-full"
            alt="Mandi Delights"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Mandi Delights
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full items-center md:block md:w-auto" id="navbar-default">
          <ul className="font-medium justify-center item flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:text-[#E0AF49] rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button 
                onClick={handleGetStarted}
                className="bg-[#E0AF49] text-[#03302d] hover:bg-[#c9983d] px-4 py-2 rounded-lg transition-all duration-200"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
