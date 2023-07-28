import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App.jsx';
import { ThemeContextProvider } from './context/index.js';

describe('Main component', () => {
  it('should render App component correctly', () => {
    render(
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>,
    );
  });
});
