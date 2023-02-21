import React, {useContext} from 'react';
import './myBlogs.scss';
import {AuthContext} from '../../context/AuthContextProvider';
import {Link} from 'react-router-dom';
const Header = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='myBlogsHeader'>
      <div className='headerContent'>
        <h1>My Blogs</h1>
        <div className='myblogsProfile'>
          <img src={currentUser.photoURL} alt='' />
        </div>
        <p>{currentUser.displayName}</p>
      </div>

      <Link to={'/createblog'}>
        <div className='addBtn'>
          <p>+</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
