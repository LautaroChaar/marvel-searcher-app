import styled from 'styled-components';
import { ButtonStyled } from './general.styled.components';

export const NavbarContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  align-items: ${props => props.theme.flex.alignItems.center};
  justify-content: ${props => props.theme.flex.justifyContent.spaceBetween};
  width: 100%;
  margin: 0 ${props => props.theme.spacing.large};
`;

export const ButtonNavbarStyled = styled(ButtonStyled)`
  height: ${props => props.theme.spacing.xLarge};
`;

export const SearchContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  align-items: ${props => props.theme.flex.alignItems.center};
  ion-icon {
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.xLarge};
    color: ${props => props.theme.iconColor};
    border-left: 1px solid ${props => props.theme.iconColor};
    margin: 0 ${props => props.theme.spacing.small};
    padding-left: ${props => props.theme.spacing.small};
  }
  a {
    ${props => props.theme.flex.display};
  }
`;

export const InputSearchStyled = styled.input`
  height: ${props => props.theme.spacing.xLarge};
  border: none;
  outline: none;
  background: transparent;
  color: ${props => props.theme.secondaryColor};
  width: 100%;
  &:focus {
    border-bottom: 1px solid ${props => props.theme.iconColor};
  }

  @media screen and (min-width: ${props =>
      props.theme.breakpoints.maxXS}) and (max-width: ${props =>
      props.theme.breakpoints.minSmall}) {
    width: 250px;
  }

  @media screen and (min-width: ${props =>
      props.theme.breakpoints.maxSmall}) and (max-width: ${props =>
      props.theme.breakpoints.minMedium}) {
    width: 350px;
  }

  @media screen and (min-width: ${props =>
      props.theme.breakpoints.maxMedium}) and (max-width: ${props =>
      props.theme.breakpoints.minLarge}) {
    width: 480px;
  }

  @media screen and (min-width: ${props =>
      props.theme.breakpoints.maxLarge}) and (max-width: ${props =>
      props.theme.breakpoints.minXL}) {
    width: 560px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.maxXL}) {
    width: 600px;
  }
`;

export const ButtonsContainerStyled = styled.div`
  ${props => props.theme.flex.display};
`;
