import React from 'react';
import './viewblog.scss';

const Header = ({blog}) => {
  return (
    <div className='viewblogHeader'>
      <div className='headerContent'>
        <h1>{blog?.title}</h1>
        <div className='auhorDetails'>
          <div className='authorImage'>
            <img src={blog?.author?.photoURL} alt='' />
          </div>
          <div>
            <p>By: {blog?.author?.name}</p>
            <span>12/2/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
