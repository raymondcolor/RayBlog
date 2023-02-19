import React from 'react';
import Blog from '../blog/Blog';
import './blogsection.scss';

const BlogSection = () => {
  return (
    <div>
      <div className='blogsContainer'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogSection;
