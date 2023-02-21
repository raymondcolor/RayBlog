import React from 'react';
import './blog.scss';

const Blog = ({
  title,
  coverImage,
  sampleText,
  authorName,
  authorProfile,
  datePosted,
}) => {
  return (
    <div>
      <div className='blogContainer'>
        <div className='blogImage'>
          <img src={coverImage} alt='' />
        </div>
        <div className='blogTittle'>
          <h1>{title}</h1>
        </div>
        <div className='sampleContent'>
          <p>{sampleText}</p>
        </div>
        <div className='author'>
          <div className='profile'>
            <div className='pic'>
              <img src={authorProfile} alt='' />
            </div>
            <span>{authorName}</span>
          </div>
          <small>{datePosted}</small>
        </div>
      </div>
    </div>
  );
};

export default Blog;
