"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <header className="bg-light4 fixed w-full z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          {/* <div className="brand-logo">
            <Link href="/">
                
                <Image
                src='/images/all-img/c1.png'
                width={100}
                height={100}
                alt=''
                />

            </Link>
          </div> */}

          {/* Menu Block Wrapper */}
          <div className="menu-block-wrapper relative">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head flex justify-between items-center">
                <div className="go-back cursor-pointer">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
              </div>
              <ul className="site-menu-main flex space-x-6">
                <li className="nav-item">
                  <Link href="/">
                    <p className="nav-link-item">Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/service">
                    <p className="nav-link-item">Services</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/work">
                    <p className="nav-link-item">Works</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us">
                    <p className="nav-link-item">About</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog-grid">
                    <p className="nav-link-item">Blog</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <p className="nav-link-item">Contact</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Header Button */}
          {/* Button to open the sidebar */}
      <button
        className="header-btn aximo-default-btn aximo-header-btn outline-btn pill barger-menu"
        onClick={toggleSidebar}
      >
        {/* <img src="/assets/images/v4/barger-menu.svg" alt="Menu" /> */}
        Menu
      </button>


          {/* Mobile Menu Trigger */}
          <div className="mobile-menu-trigger md:hidden flex flex-col justify-center items-center cursor-pointer">
            <span className="block w-6 h-1 bg-black my-1"></span>
            <span className="block w-6 h-1 bg-black my-1"></span>
            <span className="block w-6 h-1 bg-black my-1"></span>
          </div>
        </nav>
      </div>

      <div
        className={`aximo-sidemenu-wraper fixed top-0 right-0 w-72 h-full bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="aximo-sidemenu-column p-6">
          <div className="aximo-sidemenu-body">
            {/* Logo */}
            <div className="aximo-sidemenu-logo mb-4">
              <a href="#">
                {/* <img src="/assets/images/logo/logo-white.svg" width="100px" alt="Logo" /> */}
              </a>
            </div>

            {/* Description */}
            <p className="text-sm leading-6 mb-6">
              Were dedicated to helping businesses grow and succeed. With years of industry
              experience and a passion for problem-solving, we offer top-level consulting services
              tailored to your unique needs.
            </p>

            {/* Thumbnail */}
            <div className="aximo-sidemenu-thumb mb-6">
              {/* <img src="/assets/images/v4/instagram-thumb3.png" alt="Instagram Thumbnail" /> */}
            </div>

            {/* Contact Information */}
            <div className="aximo-info-wrap mb-6">
              <div className="aximo-info mb-4">
                <ul>
                  <li>Give us a call:</li>
                  <li>
                    <a href="tel:+1234567890">(123) 456-7890</a>
                  </li>
                </ul>
              </div>
              <div className="aximo-info">
                <ul>
                  <li>Send us an email:</li>
                  <li>
                    <a href="mailto:contact@effektifdigitalindonesia.com">
                      contact@effektifdigitalindonesia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="aximo-social-icon aximo-social-icon3 mb-6">
              <ul className="flex space-x-4">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Close button */}
          <span
            className="aximo-sidemenu-close absolute top-4 right-4 text-white cursor-pointer"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
    
  )
}
