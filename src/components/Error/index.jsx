import { H1Styled } from '@/styled-components/general.styled.components';
import { ErrorContainerStyled } from '@/styled-components/layout.styled.components';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <ErrorContainerStyled>
      <ion-icon name='alert-circle-outline' />
      <H1Styled>{error}</H1Styled>
    </ErrorContainerStyled>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
