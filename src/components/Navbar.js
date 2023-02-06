import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="gallery">
        <div className="gallery-containa">
            <h1>Restaurant Gallery Page</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/food">Food</Link>
                </li>
            </ul>
        </div>

    </section>
  )
}



export default Navbar