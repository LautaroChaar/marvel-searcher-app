import { styled } from 'styled-components';
import { ButtonStyled, TitleStyled } from './general.styled.components';

export const FigureStyled = styled.figure`
  ${props => props.theme.flex.display};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.secondaryColor} 0px 0px 2px 0px;
  position: ${props => props.theme.position.relative};
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover img {
    filter: ${props => props.$hover && 'grayscale(0)'};
  }
`;

export const FigureImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${props => (props.$blur ? 'blur(5px)' : 'grayscale(0.8)')};
`;

export const FigcaptionStyled = styled.figcaption`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  justify-content: ${props => props.theme.flex.justifyContent.spaceBetween};
  position: ${props => props.theme.position.absolute};
  height: 100%;
  width: 100%;
  top: 0px;
`;

export const ButtonCardStyled = styled(ButtonStyled)`
  position: ${props => props.theme.position.absolute};
  height: 30px;
  top: 6px;
  right: 11px;
  ion-icon {
    color: ${props =>
      props.$inputColor ? props.theme.favColor : props.theme.iconColor};
  }
  &:hover ion-icon {
    color: ${props => props.theme.favColor};
  }
  z-index: ${props => props.theme.zIndex.btnCard};
`;

export const TitleCardStyled = styled(TitleStyled)`
  color: #fbfbfb;
  position: ${props => props.theme.position.inherit};
  text-shadow: 2px 1px #2b2b2b;
  bottom: -10px;
  left: 15px;
`;
