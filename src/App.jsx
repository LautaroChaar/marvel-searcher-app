import { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Layout } from './components';
import Loading from './components/Loading';
import {
  CharactersContextProvider,
  SearchContextProvider,
  ThemeContext,
} from './context';
import theme from './styled-components/theme.styled.components';

const HomeView = lazy(() => import('./pages/Home/Home'));
const ComicPreview = lazy(() => import('./pages/ComicPreview/ComicPreview'));
const FilteredCharactersView = lazy(() =>
  import('./pages/FilteredCharacters/FilteredCharacters'),
);
const RandomCharactersView = lazy(() =>
  import('./pages/RandomCharacters/RandomCharacters'),
);
const FavoritesCharactersView = lazy(() =>
  import('./pages/FavoritesCharacters/FavoritesCharacters'),
);

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={
          isDarkMode
            ? { ...theme, ...theme.dark }
            : { ...theme, ...theme.light }
        }
      >
        <Suspense delayMs={500} fallback={<Loading />}>
          <SearchContextProvider>
            <CharactersContextProvider>
              <Layout>
                <Routes>
                  <Route path='/' element={<HomeView />} />
                  <Route
                    path='/characters'
                    element={<RandomCharactersView />}
                  />
                  <Route
                    path='/characters/:nameStartsWith'
                    element={<FilteredCharactersView />}
                  />
                  <Route path='/comic/:comicId' element={<ComicPreview />} />
                  <Route
                    path='/characters/favorites'
                    element={<FavoritesCharactersView />}
                  />
                  <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
              </Layout>
            </CharactersContextProvider>
          </SearchContextProvider>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
