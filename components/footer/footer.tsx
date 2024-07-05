import styled from 'styled-components';
import Logo from '../../public/icons/logo.svg';
import FacebookLogo from '../../public/icons/facebook.svg';
import TwitterLogo from '../../public/icons/x.svg';
import InstagramLogo from '../../public/icons/instagram.svg';
import { FooterWrapper, FooterContainer, FooterLogo, LogoText, FooterLinks, FooterLink, FooterText } from './footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo>
          <Logo /> {/* Replace with your Logo component or image */}
          <LogoText>TrendCart</LogoText>
        </FooterLogo>
        <FooterLinks>
          <FooterLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookLogo alt="Facebook" />
          </FooterLink>
          <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterLogo alt="Twitter" />
          </FooterLink>
          <FooterLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramLogo alt="Instagram" />
          </FooterLink>
        </FooterLinks>
      </FooterContainer>
      <FooterText>&copy; 2024 TrendCart. All rights reserved.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
