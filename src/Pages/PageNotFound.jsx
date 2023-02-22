import React from 'react';
import { Link } from 'react-router-dom';
import '../componets/pageNotFound/pagenotfound.scss';
import Image  from '../componets/pageNotFound/404.png'

const PageNotFound = () => {
  return (
    <div className='notFoundContainer'>
      <div className='notFound'>
        <img src={Image} alt="" />
        <p>The page your looking for is not found</p>
        <div className='linkButton'>
          <Link to={'/'}>Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
