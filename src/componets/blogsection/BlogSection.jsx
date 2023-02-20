import React from 'react';
import './blogsection.scss';

const BlogSection = ({children}) => {
  //reusable componet for the sections where the blogs are mapped
  return (
    <div>
      <div className='blogsContainer'>{children}</div>
    </div>
  );
};

export default BlogSection;
