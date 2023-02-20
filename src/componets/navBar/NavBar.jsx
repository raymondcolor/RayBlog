import React, {useContext} from 'react';
import './nav.scss';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContextProvider';
import Avator from './avator.jpg';
import {auth} from '../../firebase';
import {signOut} from 'firebase/auth';

const NavBar = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
            <Link to={'/blogpost'}>Create Blog</Link>
            <button onClick={SignOut}>log out</button>
            <div className='navProfile'>
              {currentUser ? (
                <img src={currentUser.photoURL} alt='' />
              ) : (
                <img src={Avator} alt='' />
              )}
            </div>
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
