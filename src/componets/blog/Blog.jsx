import {Delete} from '@mui/icons-material';
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './blog.scss';
import {BlogContext} from '../../context/BlogContextProvider';
import {AuthContext} from '../../context/AuthContextProvider';

const Blog = ({
  title,
  coverImage,
  sampleText,
  authorName,
  authorProfile,
  datePosted,
  to,
  onClick,
}) => {
  const {currentUser} = useContext(AuthContext);
  const {blogList} = useContext(BlogContext);

  const blog = blogList.filter((blog) => blog);

  const showDeleteButton = currentUser && blog?.author?.id === currentUser.uid;

  return (
    <div>
      <div className='blogContainer'>
        {showDeleteButton && (
          <div className='deleteBtn'>
            <button onClick={onClick}>
              <Delete className='icon' />
            </button>
          </div>
        )}
        <Link to={to}>
          <div className='blogImage'>
            <img src={coverImage} alt='' />
          </div>
          <div className='blogTittle'>
            <h1>{title}</h1>
          </div>
          <div className='sampleContent'>
            <p>{sampleText}</p>
          </div>
        </Link>
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
