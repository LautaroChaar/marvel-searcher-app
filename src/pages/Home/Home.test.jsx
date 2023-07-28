import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled-components/theme.styled.components';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContextProvider, SearchContextProvider } from '@/context';
import Home from './Home';
import { it, describe, expect } from 'vitest';

describe('Home component', () => {
  it('should render HomeCharactersContainer', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Home />
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const mainElement = getByTestId('main');
    expect(mainElement).toBeInTheDocument();
  });
});
