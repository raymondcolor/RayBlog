import React from 'react';
import './nav.scss'

const NavBar = () => {
  return (
    <div>
      <div className='navContainer'>
        <div className='logo'>
          <a href='/'>
            <h1>RayBlog</h1>
          </a>
        </div>
        <div className='menu'>
          <a href='/login'>Login In</a>
          <a href='/Signup'>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
