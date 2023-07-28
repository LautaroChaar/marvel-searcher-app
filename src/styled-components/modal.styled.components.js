import { styled } from 'styled-components';
import { ButtonStyled } from './general.styled.components';

export const ModalContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.center};
  position: ${props => props.theme.position.fixed};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.tertiaryColor}6e;
  z-index: ${props => props.theme.zIndex.modal};
`;

export const ModalContentStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 2px 4px ${props => props.theme.secondaryColor}38;
  padding: 0px 20px;
  max-width: 600px;
  max-height: 300px;
  overflow: auto;
  width: 80%;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.tertiaryColor};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.secondaryColor}98;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.tertiaryColor}98;
    border-radius: 5px;
  }
`;

export const ButtonModalStyled = styled(ButtonStyled)``;

export const UlModalStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LiModalStyled = styled.li`
  ${props => props.theme.flex.display};
  justify-content: ${props => props.theme.flex.justifyContent.flexStart};
  align-items: ${props => props.theme.flex.alignItems.center};
  height: 100px;
  img {
    width: 48px;
    height: 60px;
    border-radius: ${props => props.theme.borderRadius};
  }
  a {
    text-decoration: none;
  }
`;

export const ComicNameModalStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  width: 100%;
  text-align: ${props => props.theme.flex.alignItems.start};
  margin-left: 10px;
  color: ${props => props.theme.primaryColor};
`;

export const ModalTitleContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  justify-content: ${props => props.theme.flex.justifyContent.spaceBetween};
  position: ${props => props.theme.position.sticky};
  top: 0;
  background-color: ${props => props.theme.primaryColor};
`;
