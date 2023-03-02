import React, {useContext} from 'react';
import './myBlogs.scss';
import {AuthContext} from '../../context/AuthContextProvider';
import {Link} from 'react-router-dom';
import avator from '../images/a.jpg';

const Header = () => {
  const {currentUser, isLoading} = useContext(AuthContext);
  return (
    <div className='myBlogsHeader'>
      <div className='headerContent'>
        <div className='myblogsProfile'>
          {isLoading ? (
            <img src={avator} alt='' />
          ) : (
            <img src={currentUser?.photoURL} alt='' />
          )}
        </div>
        <p>{currentUser?.displayName}</p>
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
