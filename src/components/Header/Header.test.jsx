import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled-components/theme.styled.components';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContextProvider, SearchContextProvider } from '@/context';
import Header from '.';

describe('Footer component', () => {
  it('should render the footer with the correct text', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Header />
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
