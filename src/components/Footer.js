import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <section className="footera">
        <div className="footera-container">

            <div className="footera-content">
                <form className="form">
                    <div className="form-title">
                        <h1>Hours of Operation</h1>
                    </div>
                    <div className="mon">
                        <h2>MON - FRI</h2>
                        <h2>10:00am - 1:00pm</h2>
                        <h2>4:00pm - 10:30pm</h2>
                    </div>
                    <div className="under"></div>
                    <div className="mon">
                        <h2>SAT</h2>
                        <h2>3:00pm - 10:30pm</h2>
                    </div>
                    <div className="under"></div>
                    <div className="form-btn">
                        <Link to="/">MAKE A RESERVATION</Link>
                    </div>
                </form>
                
            </div>
            
        </div>
    </section>
  )
}

export default Footer