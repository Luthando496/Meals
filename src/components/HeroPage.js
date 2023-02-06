import '../App.css'
import React from "react";
import {Link} from 'react-router-dom'




const HeroPage =()=>{
    
    return(
        <>
        <section className="header" id="home">

<nav className="navbar container w-full flex items-center justify-between">
    <ul className="lists text-2xl mx-auto w-10/12 font-mono text-white py-4 flex items-center justify-between">
        <li className="list ">
            <Link className="item" to="/about">About Us</Link>
        </li>
        <li className="list">
            <Link className="item" to="/gallery">Gallery</Link>
        </li>
        <li className="list">
            <Link className="item" to="/food">Food</Link>
        </li>
        <li className="list">
            <Link className="item" to='/'>Reservation</Link>
        </li>
    </ul>
</nav>

<div className="back-img">
    <div className="back-content flex justify-center items-center text-white h-full flex-col">
        <h3 className="text-3xl top-text">Authentic food from</h3>
        <h1 className="text-9xl">Food Lovers</h1>
    </div>
</div>
</section>

<section className="boxes" id="about">
<div className="containerr">
    <div className="about-content p-7">
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quia tempora provident veritatis voluptate sequi. Culpa tempore dignissimos ratione cum amet nam ex vitae ab numquam. Qui obcaecati temporibus aspernatur odio libero nihil aperiam explicabo velit voluptatum ut porro dolor est non nobis, praesentium, autem possimus.</p>
    </div>

    <div className="about-img">
        <img src="img/pexels-elevate-1267320.jpg" alt="" className="w-full" />
    </div>
</div>

</section>


<section className="innovation">
<div className="inno-title">
    <h1>INNOVATION</h1>
    <div className="under"></div>
</div>

<div className="inno-content">
    <h1>Simply Brilliant</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
</div>

</section>

<section className="reservations">
<div className="res-container">
    <div className="res-item">
        <img src="img/pexels-vidal-balielo-jr-2337800.jpg" alt="pexels-vidal-balielo-jr-2337800.jpg" />
    </div>
    <div className="res-item">
        <h1>Reservations</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsum. Accusamus alias perspiciatis nostrum fugit provident aspernatur eligendi ratione quisquam earum in distinctio cumque consectetur.</p>

        <button>Book a Table</button>
    </div>
</div>
</section>



<section className="grid-container">
<div className="img-container img-1">
    <img src="img/pexels-jane-doan-1099680.jpg" alt="pexels-jane-doan-1099680.jpg" />
    <div className="content">
        <h1>Healthy Meals</h1>
    </div>
</div>
<div className="img-container img-2">
    <img src="img/pexels-pascal-claivaz-410648.jpg" alt="pexels-pascal-claivaz-410648.jpg" />
    <div className="content">
        <h1>Pork Ribs</h1>
    </div>
</div>
<div className="img-container img-3">
    <img src="img/pexels-snapwire-675951.jpg" alt="pexels-snapwire-675951.jpg"/>
    <div className="content">
        <h1>Steak & Vegan</h1>
    </div>
</div>
<div className="img-container img-4">
    <img src="img/pexels-robin-stickel-70497.jpg" alt="pexels-robin-stickel-70497.jpg" />
    <div className="content">
        <h1>Burger & Fries</h1>
    </div>
</div>
<div className="img-container img-5">
    <img src="img/pexels-pixabay-407041.jpg" alt="pexels-pixabay-407041.jpg" />
    <div className="content">
        <h1>Pancake & berries</h1>
    </div>
</div>
</section>

<section className='fresh'>
<div className="containa">
    <div className="content">
        <div className="fresh-header">
            <h3>Only the best</h3>
            <div className="underlina"></div>
        </div>
        <div className="title">
            Fresh Ingredient, Tasty Meals
        </div>

        <div className="paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam consectetur omnis quis repellat, debitis neque fugit cumque ipsa soluta quo sequi modi, accusantium, exercitationem quae. Placeat, impedit pariatur. Qui!</p>
        </div>

        <div className="btn">
            <Link to="/food">View Items</Link>
        </div>
    </div>
</div>

</section>


<div className="grid-circle">
<div className="img-container">
    <div className="img">
        <img src="img/pexels-abet-llacer-3025236.jpg" alt="pexels-abet-llacer-3025236.jpg" />
        <div className="content">
            <h1>Fruits &<br/> Vegetables</h1>
        </div>
    </div>
    <div className="img">
        <img src="img/pexels-malidate-van-769289.jpg" alt="pexels-malidate-van-769289.jpg"/>
        <div className="content">
            <h1>Dairy Bread <br/> & Eggs</h1>
        </div>
    </div>
    <div className="img">
        <img src="img/pexels-craig-adderley-1582482.jpg" alt="pexels-craig-adderley-1582482.jpg"/>
        <div className="content">
            <h1>Package <br/> Foods</h1>
        </div>
    </div>
    <div className="img">
        <img src="img/pexels-alisha-mishra-1346342.jpg" alt="pexels-alisha-mishra-1346342.jpg" />
        <div className="content">
            <h1>Milk shakes</h1>
        </div>
    </div>
    <div className="img">
        <img src="img/pexels-maarten-van-den-heuvel-2284166.jpg" alt="pexels-maarten-van-den-heuvel-2284166.jpg" />
        <div className="content">
            <h1>Health & <br /> Wellness</h1>
        </div>
    </div>

</div>
</div>
        </>
        )


}



export default HeroPage;