import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #001f3e;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e7e7e7;
  margin-top: auto;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoText = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  color: #6c757d;
  margin: 10px 0 0 0;
`;

export const LogoImage = styled.img`
  width: 24px;
  height: 24px;
`;
