import React from 'react';
import './viewblog.scss';

const BlogBody = ({blog}) => {
  return (
    <div className='blogBody'>
      <div className='blogCoverPhoto'>
        <img src={blog.downloadURL} alt='' />
      </div>
      <div className='blogContent'>
        <p>{blog.post}</p>
        <div className='auhorDetails'>
          <div className='authorImage'>
            <img src={blog?.authur?.photoURL} alt='' />
          </div>
          <div>
            <p>By: {blog?.authur?.name}</p>
            <span>12/2/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
