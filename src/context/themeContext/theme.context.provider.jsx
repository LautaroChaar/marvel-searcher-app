import PropTypes from 'prop-types';
import { useState } from 'react';
import ThemeContext from './theme.context';

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const updateThemeColor = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        updateThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element,
};

export default ThemeContextProvider;
