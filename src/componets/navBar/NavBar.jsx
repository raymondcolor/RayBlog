import React, {useContext} from 'react';
import './nav.scss';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContextProvider';

const NavBar = (props) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div>
      <div className='navContainer'>
        <div className='logo'>
          <Link to={'/'}>
            <h1>RayBlog</h1>
          </Link>
        </div>
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
          </div>
        ) : (
          <div className='menu'>
            <Link to={'/login'}>Login In</Link>
            <Link to={'/Signup'}>Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
