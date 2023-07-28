import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled-components/theme.styled.components';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContextProvider, SearchContextProvider } from '@/context';
import Footer from '.';

describe('Footer component', () => {
  it('should render the footer with the correct text', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Footer />
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

    const footerText = getByTestId('footer-text');
    expect(footerText).toBeInTheDocument();
    expect(footerText.textContent).toBe(
      'Project created by Lautaro Chaar for Leniolabs Bootcamp 2023',
    );
  });
});
