import React, {useContext} from 'react';
import './input.scss';
import SearchIcon from '@mui/icons-material/Search';
import {SearchContext} from '../../context/SearchContextProvider';

const SearchInput = () => {
  const {keyword, setKeyword} = useContext(SearchContext);

  return (
    <div className='Input'>
      <input
        type='text'
        placeholder='Search by category'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>
        <SearchIcon className='icon' />
      </button>
    </div>
  );
};

export default SearchInput;
