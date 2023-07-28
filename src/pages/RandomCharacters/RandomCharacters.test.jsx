import { CharactersContextProvider, SearchContextProvider } from '@/context';
import theme from '@/styled-components/theme.styled.components';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';
import RandomCharacters from './RandomCharacters';

describe('RandomCharacters component', () => {
  it('should render RandomCharactersContainer', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <RandomCharacters />
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const mainElement = getByTestId('main');
    expect(mainElement).toBeInTheDocument();
  });
});
