import React, {useContext, useState} from 'react';
import './nav.scss';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContextProvider';
import {Close, Menu} from '@mui/icons-material';
import avator from '../images/a.jpg';

const NavBar = (props) => {
  const {currentUser, isLoading} = useContext(AuthContext);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='nav'>
      <div className='navContainer'>
        <div className='logo'>
          <Link to={'/'}>
            <h1>RayBlog</h1>
          </Link>
        </div>
        {/* The menu below is for desktop version and it has an id used to hide it from mobile */}
        {currentUser ? (
          <div className='menu' id='MenuDesktop'>
            <Link to={'/'}>Blog</Link>
            <Link to={'/myblogs'}>My Blogs</Link>
            <Link to={'/createblog'}>Create Blog</Link>
            <button
              onClick={() => {
                props.setShow(true);
              }}>
              log out
            </button>
            <Link to={'/myblogs'}>
              <div className='navProfile'>
                {isLoading ? (
                  <img src={avator} alt='' />
                ) : (
                  <img src={currentUser.photoURL} alt='' />
                )}
              </div>
            </Link>
          </div>
        ) : (
          <div className='menu' id='MenuDesktop'>
            <Link to={'/login'}>Login In</Link>
            <Link to={'/Signup'}>Sign Up</Link>
          </div>
        )}

        {/* the menu below is for mobile responsiveness */}
        {/* it has tow states, one is for showing and hiding menu on mobile (showMobileMenu) */}
        {/* and the it checks if the user is logged in or not to display the menus respectively */}
        {!showMobileMenu ? (
          <div className='menuButton'>
            <Menu
              onClick={() => {
                setShowMobileMenu(true);
              }}
            />
          </div>
        ) : (
          <>
            {currentUser ? (
              <div className='menu'>
                <Link to={'/'}>Blog</Link>
                <Link to={'/myblogs'}>My Blogs</Link>
                <Link to={'/createblog'}>Create Blog</Link>
                <button
                  onClick={() => {
                    props.setShow(true);
                  }}>
                  log out
                </button>
                <Link to={'/myblogs'}>
                  <div className='navProfile'>
                    <img src={currentUser.photoURL} alt='' />
                  </div>
                </Link>
                <div className='closeMobilemenuBtn'>
                  <Close
                    onClick={() => {
                      setShowMobileMenu(false);
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className='menu'>
                <Link to={'/login'}>Login In</Link>
                <Link to={'/Signup'}>Sign Up</Link>
                <div className='closeMobilemenuBtn'>
                  <Close
                    onClick={() => {
                      setShowMobileMenu(false);
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
