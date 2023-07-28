import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchContext from './search.context';

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [hasParams, setHasParams] = useState(false);

  const updateSearchValue = value => setSearchValue(value);

  const updateHasParams = value => setHasParams(value);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        hasParams,
        updateSearchValue,
        updateHasParams,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.element,
};

export default SearchContextProvider;
