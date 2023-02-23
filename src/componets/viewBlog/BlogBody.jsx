import React from 'react';
import './viewblog.scss';

const BlogBody = ({blog}) => {
  return (
    <div className='blogBody'>
      <div className='blogCoverPhoto'>
        <img src={blog?.coverPhoto} alt='' />
      </div>
      <div className='blogContent'>
        <p>{blog?.post}</p>
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

export default BlogBody;
