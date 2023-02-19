import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div className='notFoundContainer'>
      <div className='notFound'>
        <h1>404</h1>
        <p>The page your looking for is not found</p>
        <div className='linkButton'>
          <Link to={'/'}>Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
