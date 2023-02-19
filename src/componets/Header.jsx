import React from 'react';
import SearchInput from './SearchInput';
const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='headerSection'>
        <h1>All What You Need In One Place</h1>
        <p>
          You can search for blogs about Health, Design, <br /> Software
          development, Bussines, Afiliate marketing and more
        </p>
        <div className='inputSection'>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
