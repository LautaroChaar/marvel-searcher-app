import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContextProvider, SearchContextProvider } from '@/context';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled-components/theme.styled.components';

describe('Layout component', () => {
  it('should render the header, children, and footer', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Layout>
                <div data-testid='child-component'>Child component</div>
              </Layout>
            </CharactersContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const headerElement = getByTestId('header');
    const footerElement = getByTestId('footer');
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();

    const childComponent = getByTestId('child-component');
    expect(childComponent).toBeInTheDocument();
  });
});
