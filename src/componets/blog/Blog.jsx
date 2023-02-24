
import {Link} from 'react-router-dom';
import './blog.scss';

const Blog = ({
  title,
  coverImage,
  sampleText,
  authorName,
  authorProfile,
  datePosted,
  to,

}) => {
  return (
    <div>
      <div className='blogContainer'>
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
