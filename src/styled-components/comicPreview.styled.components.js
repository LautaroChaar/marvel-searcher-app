import { styled } from 'styled-components';
import {
  ButtonStyled,
  ParagraphStyled,
  H2Styled,
} from './general.styled.components';

export const ComicPrevContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  align-items: ${props => props.theme.flex.alignItems.center};
  width: inherit;
  @media screen and (min-width: ${props => props.theme.breakpoints.maxSmall}) {
    min-height: calc(100vh - 168px);
  }
`;

export const BackArrowButtonStyled = styled(ButtonStyled)`
  ${props => props.theme.flex.display};
  align-self: ${props => props.theme.flex.alignSelf.flexStart};
  margin-left: 6px;
  ion-icon {
    margin-bottom: 14px;
  }
`;

export const ComicPrevImgStyled = styled.img`
  border-radius: 8px;
  filter: drop-shadow(1px 1px 3px ${props => props.theme.secondaryColor});
  margin: 10px auto;
  width: 200px;
  height: fit-content;
  @media screen and (min-width: ${props => props.theme.breakpoints.minLarge}) {
    width: 400px;
  }
`;

export const ComicPrevInfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.maxSmall}) {
    ${props => props.theme.flex.row};
    max-width: 700px;
  }
`;

export const ComicPrevParagraphStyled = styled(ParagraphStyled)`
  margin: 0;
  display: inline-block;
  color: ${props => props.theme.tertiaryColor};
  @media screen and (min-width: ${props => props.theme.breakpoints.minLarge}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const ComicCreatorsContainerStyled = styled.div`
  margin-bottom: 20px;
`;

export const ComicPrevH2Styled = styled(H2Styled)`
  margin: 0;
`;

export const ComicPrevInfoDetailContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  @media screen and (min-width: ${props => props.theme.breakpoints.maxSmall}) {
    text-align: start;
    margin-left: 40px;
    max-width: 300px;
  }
`;
