import { SearchContext, ThemeContext } from '@/context';
import {
  ButtonNavbarStyled,
  ButtonsContainerStyled,
  InputSearchStyled,
  NavbarContainerStyled,
  SearchContainerStyled,
} from '@/styled-components/navbar.styled.components';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { REG_EXP } from '@/utils/constants';

const Navbar = () => {
  const { updateSearchValue } = useContext(SearchContext);
  const { updateThemeColor } = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue) {
      if (inputValue.match(REG_EXP)) {
        const comicId = inputValue.match(REG_EXP);
        navigate(`/comic/${comicId[1]}`);
      } else {
        updateSearchValue(inputValue);
        navigate(`/characters/${inputValue}`);
      }
    }
  }, [inputValue]);

  return (
    <NavbarContainerStyled>
      <SearchContainerStyled>
        <Link to={'/'}>
          <img width={70} src='/assets/logo.svg' alt='Marvel-logo' />
        </Link>
        <ion-icon name='search-outline'></ion-icon>
        <InputSearchStyled
          type='search'
          placeholder='Search...'
          onChange={handleChange}
          value={inputValue}
        />
      </SearchContainerStyled>
      <ButtonsContainerStyled>
        <ButtonNavbarStyled onClick={updateThemeColor}>
          <ion-icon name='sunny'></ion-icon>
        </ButtonNavbarStyled>
        <Link to={'/characters/favorites'}>
          <ButtonNavbarStyled>
            <ion-icon name='star'></ion-icon>
          </ButtonNavbarStyled>
        </Link>
      </ButtonsContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
