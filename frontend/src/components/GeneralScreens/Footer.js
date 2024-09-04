import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col md={4}>
            <FooterSection>
              <FooterLogo>Guns Shop</FooterLogo>
              <FooterDescription>
                Your trusted source for high-quality firearms and accessories. Explore our wide range of products tailored to meet your needs.
              </FooterDescription>
            </FooterSection>
          </Col>
          <Col md={4}>
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/all-guns">Services</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </FooterSection>
          </Col>
          <Col md={4}>
            <FooterSection>
              <FooterTitle>Follow Us</FooterTitle>
              <SocialIcons>
                <SocialIcon href="#" aria-label="Facebook">
                  <Facebook size={24} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">
                  <Twitter size={24} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                  <Instagram size={24} />
                </SocialIcon>
              </SocialIcons>
              <br />
        <p>Soho, UK</p> <p>Boston, USA</p>
            </FooterSection>
          </Col>
        </Row>
      </Container>
      <FooterBottom>
        <p>&copy; 2024 Best Online Guns Shop. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

// Styled components
const FooterContainer = styled.footer`
  background-color: #343a40; // Dark background
  color: #f8f9fa; // Light text color
  padding: 2rem 0;
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
`;

const FooterLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FooterDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  display: block;
  color: #f8f9fa;
  text-decoration: none;
  margin-bottom: 0.25rem;

  &:hover {
    text-decoration: none;
    color: #ff9900;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #f8f9fa;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9900; // Blue color on hover
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #212529; // Slightly darker background for the bottom
`;
