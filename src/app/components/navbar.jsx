"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get current path

  // Check if the current route matches the link
  const isActive = (path) =>
    pathname === path
      ? "bg-[#7c3aed] text-white"
      : "text-white hover:bg-[#c4b5fd] hover:text-black";

  return (
    <div className="w-full flex justify-center">
      <nav className="bg-[#7e22ce] w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-[80%]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" className="h-10" alt="Brand Logo" />
          </Link>

          {/* Mobile menu button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              fill="currentColor"
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2z" />
            </svg>
          </button>

          {/* Navigation menu */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#7e22ce]">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded ${isActive("/")}`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 rounded ${isActive("/about")}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className={`block py-2 px-3 rounded ${isActive("/service")}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`block py-2 px-3 rounded ${isActive("/pricing")}`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={`block py-2 px-3 rounded ${isActive("/login")}`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`block py-2 px-3 rounded ${isActive("/cart")}`}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 96 96"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <clipPath id="clip-cart">
                        <rect width={96} height={96} />
                      </clipPath>
                    </defs>
                    <g id="cart" clipPath="url(#clip-cart)">
                      <g id="pills" transform="translate(0 -116)">
                        <g id="Group_154" data-name="Group 154">
                          <path
                            id="Path_188"
                            data-name="Path 188"
                            d="M92,132H84.619a8.361,8.361,0,0,0-7.956,5.47L63.712,174.53A8.364,8.364,0,0,1,55.755,180H21.321a8.4,8.4,0,0,1-7.773-4.994l-8.925-21C2.387,148.746,6.445,143,12.4,143H57"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                          />
                          <circle
                            id="Ellipse_335"
                            data-name="Ellipse 335"
                            cx={4.5}
                            cy={4.5}
                            r={4.5}
                            transform="translate(20 187)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                          />
                          <circle
                            id="Ellipse_336"
                            data-name="Ellipse 336"
                            cx={4.5}
                            cy={4.5}
                            r={4.5}
                            transform="translate(49 187)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
