import React, {useState} from 'react';

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
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
