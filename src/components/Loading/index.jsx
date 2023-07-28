import { H1LoadingStyled } from '@/styled-components/general.styled.components';
import { LoadingContainerStyled } from '@/styled-components/layout.styled.components';

const Loading = () => {
  return (
    <LoadingContainerStyled data-testid='loading'>
      <H1LoadingStyled>Loading...</H1LoadingStyled>
      <img width={140} src='/assets/spider-man.svg' alt='Marvel-logo' />
    </LoadingContainerStyled>
  );
};

export default Loading;
