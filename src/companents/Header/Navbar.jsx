import React from 'react';

import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className='nav nav-bmo '>
        <ul className='nav-list list-unstyled nav-ul-css'>
          <li className='nav-item text-white list-unstyled'>Pull requests</li>
          <li className='nav-item text-white list-unstyled'>Issues</li>
          <li className='nav-item text-white list-unstyled'>Marketplace</li>
          <li className='nav-item text-white list-unstyled'>Explore</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;