import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled-components/theme.styled.components';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContextProvider, SearchContextProvider } from '@/context';
import Error from '.';

describe('Error component', () => {
  it('should render the error message and the error icon', () => {
    const error = 'Sorry, an error has occurred.';

    const { getByText, container } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Error error={error} />
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const errorText = getByText(error);
    expect(errorText).toBeInTheDocument();

    const errorIcon = container.querySelector(
      'ion-icon[name="alert-circle-outline"]',
    );
    expect(errorIcon).toBeInTheDocument();
  });
});
