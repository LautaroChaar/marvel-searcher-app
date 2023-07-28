import { HeaderStyled } from '@/styled-components/layout.styled.components';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <HeaderStyled data-testid='header'>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
