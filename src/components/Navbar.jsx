import React from 'react'
import './Navbar.css'
import { HiOutlineBars2 } from "react-icons/hi2";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pt.</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <HiOutlineBars2/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MENUS</a>
        </li>
        </ul>
      
<div class="dropdown">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    PAGES
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Our  Story</a></li>
    <li><a className="dropdown-item" href="#">Meet Our Chefs</a></li>
    <li><a className="dropdown-item" href="#">Contact Us</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className=" btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    VLOG
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Blog Grid 2 Columns</a></li>
    <li><a className="dropdown-item" href="#">Blog Grid 3 Columns</a></li>
    <li><a className="dropdown-item" href="#">Blog Masonry 2 Columns</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className=" btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    SHOP
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Cart</a></li>
    <li><a className="dropdown-item" href="#">Checkout</a></li>
    <li><a className="dropdown-item" href="#">My Account</a></li>
  </ul>
</div>
      
      
    <button>FIND A TABLE</button>
      
    </div>
  
</nav>
  )
}

export default Navbar