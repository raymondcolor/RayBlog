import React, { useState } from 'react';
import './input.scss'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className='Input'>
      <input
        type='text'
        placeholder='Search by category'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button><SearchIcon className='icon'/></button>
    </div>
  );
};

export default SearchInput;
