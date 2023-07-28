import { ParagraphStyled } from '@/styled-components/general.styled.components';
import { FooterStyled } from '@/styled-components/layout.styled.components';

const Footer = () => {
  return (
    <FooterStyled data-testid='footer'>
      <ParagraphStyled data-testid='footer-text'>
        Project created by Lautaro Chaar for Leniolabs Bootcamp 2023
      </ParagraphStyled>
    </FooterStyled>
  );
};

export default Footer;
