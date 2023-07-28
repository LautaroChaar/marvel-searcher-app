import { styled } from 'styled-components';

export const ParagraphStyled = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.tertiaryColor};
`;

export const TitleStyled = styled.p`
  color: ${props => props.theme.secondaryColor};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.large};
`;

export const H1Styled = styled.h1`
  font-size: ${props => props.theme.headings.h1FontSize};
  color: ${props => props.theme.secondaryColor};
  text-transform: capitalize;
  @media screen and (min-width: ${props => props.theme.breakpoints.minLarge}) {
    font-size: 18px;
  }
`;

export const H1LoadingStyled = styled(H1Styled)`
  margin: 0;
  border-bottom: 2px solid ${props => props.theme.secondaryColor};
`;

export const H2Styled = styled.h2`
  font-size: ${props => props.theme.headings.h2FontSize};
  color: ${props => props.theme.secondaryColor};
  font-weight: ${props => props.theme.fontWeight.regular};
  text-transform: capitalize;

  @media screen and (min-width: ${props => props.theme.breakpoints.minLarge}) {
    font-size: 16px;
  }
`;

export const H3Styled = styled.h2`
  font-size: ${props => props.theme.headings.h3FontSize};
`;

export const ButtonStyled = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  ion-icon {
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.xLarge};
    color: ${props => props.theme.iconColor};
  }

  &:hover ion-icon {
    color: ${props => props.theme.secondaryColor};
  }
`;

export const ErrorStyled = styled.p`
  font-weight: ${props => props.theme.fontWeight.regular};
  color: ${props => props.theme.secondaryColor};
`;
