import React from 'react';
import './nav.scss';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className='navContainer'>
        <div className='logo'>
          <Link to={'/'}>
            <h1>RayBlog</h1>
          </Link>
        </div>
        <div className='menu'>
          <Link to={'/login'}>Login In</Link>
          <Link to={'/Signup'}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
