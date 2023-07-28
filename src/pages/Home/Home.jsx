import { MainStyled } from '@/styled-components/layout.styled.components';
import { HomeCharactersContainer } from './components';

const Home = () => {
  return (
    <MainStyled data-testid='main'>
      <HomeCharactersContainer />
    </MainStyled>
  );
};

export default Home;
