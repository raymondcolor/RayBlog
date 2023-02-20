import React, {useContext} from 'react';
import './myBlogs.scss';
import {AuthContext} from '../../context/AuthContextProvider';
import {Link} from 'react-router-dom';
const Header = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='myBlogsHeader'>
      <div className='headerContent'>
        <div className='myblogsProfile'>
          <img src={currentUser.photoURL} alt='' />
        </div>
        <h1>{currentUser.displayName}</h1>
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