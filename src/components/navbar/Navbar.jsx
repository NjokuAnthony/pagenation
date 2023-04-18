import React from 'react'
import { FaBolt, FaDownload } from "react-icons/fa";
import  './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="left">
             <FaBolt />
             <span>FinTrack</span>
            </div>
            <div className="right">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Products</li>
                </ul>
                <button>
                    <FaDownload /> Download App
                </button>

            </div>
        </nav>
    </>
  )
}

export default Navbar