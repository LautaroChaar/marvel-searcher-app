import { styled } from 'styled-components';
import { Opacity } from './animations.styled.components';

export const HeaderStyled = styled.header`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.center};
  position: ${props => props.theme.position.sticky};
  top: 0;
  height: 60px;
  width: 100%;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secundaryColor};
  box-shadow: 0 0 2px 0px #aaa;
  z-index: ${props => props.theme.zIndex.header};
`;

export const FooterStyled = styled.footer`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.center};
  height: 60px;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.tertiaryColor};
  font-size: ${props => props.theme.fontSize.xSmall};
`;

export const MainStyled = styled.main`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  ${props => props.theme.flex.wrap};
  align-items: ${props => props.theme.flex.alignItems.center};
  background-color: ${props => props.theme.primaryColor};
  padding: ${props => props.theme.spacing.large} 0;
  min-height: calc(100vh - 168px);
  width: 100%;
`;

export const SectionContainerStyled = styled.section`
  ${props => props.theme.grid.display};
  ${props => props.theme.grid.gapMedium};
  max-width: 1200px;
  ${props => props.theme.grid.smallAutoRows};
  ${props => props.theme.grid.containerSmall};
  width: 84%;
  margin-top: ${props => props.theme.spacing.large};
  justify-content: ${props => props.theme.flex.justifyContent.center};

  @media screen and (min-width: ${props =>
      props.theme.breakpoints.maxSmall}) and (max-width: ${props =>
      props.theme.breakpoints.minLarge}) {
    margin-top: 50px;
    ${props => props.theme.grid.gapSmall};
    ${props => props.theme.grid.containerMedium};
    grid-auto-flow: ${props => props.theme.grid.autoFlow};
  }

  @media screen and (min-width: ${props =>
      props.theme.breakpoints.maxLarge}) and (max-width: ${props =>
      props.theme.breakpoints.minXXL}) {
    margin-top: 70px;
    ${props => props.theme.grid.gapLarge};
    ${props => props.theme.grid.mediumAutoRows};
    ${props => props.theme.grid.containerLarge};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.maxXXL}) {
    ${props => props.theme.grid.largeAutoRows};
    ${props => props.theme.grid.containerXL};
  }
`;

export const LoadingContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  ${props => props.theme.flex.center};
  min-height: calc(100vh - 168px);
  width: 100%;
  animation: ${Opacity} 2s linear infinite;
`;

export const ErrorContainerStyled = styled.div`
  ${props => props.theme.flex.display};
  ${props => props.theme.flex.column};
  ${props => props.theme.flex.center};
  min-height: calc(100vh - 168px);
  font-weight: ${props => props.theme.fontWeight.regular};
  color: ${props => props.theme.secondaryColor};
  ion-icon {
    font-size: 44px;
  }
`;
