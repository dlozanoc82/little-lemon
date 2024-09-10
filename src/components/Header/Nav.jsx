import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {



  return (
    <nav className="nav">
      <ul className="menu-list">
        <li><Link className='link' to={"/"}>Home</Link></li>
        <li><a className='link' href="">About</a></li>
        <li><a className='link' href="">Menu</a></li>
        <li><Link className='link' to={"/reservations"} >Reservation</Link></li>
        <li><a className='link' href="">Order Online</a></li>
        <li><a className='link' href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav
