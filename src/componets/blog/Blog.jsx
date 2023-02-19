import React from 'react';
import './blog.scss';
import image from './1.png';

const Blog = () => {
  return (
    <div>
      <div className='blogContainer'>
        <div className='blogImage'>
          <img src={image} alt='' />
        </div>
        <div className='blogTittle'>
          <h1>How To Make A blog Site In 30 minutes</h1>
        </div>
        <div className='sampleContent'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            ex fringilla velit blandit pharetra. Ut massa ex, pretium at est
          </p>
        </div>
        <div className='author'>
          <div className='profile'>
            <div className='pic'>
              <img src='' alt='' />
            </div>
            <span>Raymond</span>
          </div>
          <small>1 day ago</small>
        </div>
      </div>
    </div>
  );
};

export default Blog;
