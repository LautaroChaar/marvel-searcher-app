import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled-components/theme.styled.components';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContextProvider, SearchContextProvider } from '@/context';
import Loading from '.';
import spiderMan from '@/assets/spider-man.svg';

describe('Loading component', () => {
  it('should render the loading text and spiderman image', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Loading />
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

    const marvelLogoImage = getByAltText('Marvel-logo');
    expect(marvelLogoImage).toBeInTheDocument();
    expect(marvelLogoImage).toHaveAttribute('src', spiderMan);
    expect(marvelLogoImage).toHaveAttribute('width', '140');
  });
});
