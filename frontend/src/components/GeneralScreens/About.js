import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
  margin-top: 3.5rem;
`;

const Header = styled.header`
  background: #1a1a1a;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const Title = styled.h2`
  color: #ff9900;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  background: #f8f9fa;
  padding: 10px 20px;
  text-align: center;
  border-top: 1px solid #ddd;
`;

const AdBanner = styled.div`
  background: #ff9900;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
`;

// Main component
const About = () => {
  return (
    <Container>
      <Header>
        <h1>Best Online Guns</h1>
      </Header>
      <Section>
        <Title>What We Do</Title>
        <p>
          We provide the US shooting community with an efficient and easy-to-use marketplace where traders and private sellers alike can advertise their firearms and related accessories to hundreds of thousands of highly engaged buyers. We offer various tiers of the firearms trade industry, from free ads to premium dealer subscriptions.
        </p>
        <p>
          Best Online Guns has built a strong community presence and collaborates with experts and organizations to provide useful news and advice.
        </p>
      </Section>
      
      <AdBanner>
        <h2>Advertise with Us!</h2>
        <p>Boost your visibility with our sponsored listings and banner ads.</p>
      </AdBanner>
      
      <Section>
        <Title>Our Achievements</Title>
        <List>
          <ListItem>Recorded over 6.3 million sessions in the last 12 months.</ListItem>
          <ListItem>Average of 528,000 visits per month.</ListItem>
          <ListItem>32% of the market traffic share.</ListItem>
          <ListItem>Approximately 27,000 live ads across 80+ categories.</ListItem>
        </List>
      </Section>
      
      <Section>
        <Title>Our Mission</Title>
        <p>
          We aim to serve the US and UK gun market by offering a professional platform for trade and private sellers. Our goal is to provide excellent coverage, accuracy, and a friendly service.
        </p>
      </Section>
      
      <Section>
        <Title>How the Site Works</Title>
        <p><strong>For Buyers:</strong></p>
        <List>
          <ListItem>Use our filtering system to find ads.</ListItem>
          <ListItem>Contact sellers directly to negotiate and arrange transfers.</ListItem>
          <ListItem>Collect your firearm from your Registered Firearms Dealer.</ListItem>
        </List>
        
        <p><strong>For Sellers:</strong></p>
        <List>
          <ListItem>Create your ad and choose a package.</ListItem>
          <ListItem>Monitor and respond to messages from potential buyers.</ListItem>
          <ListItem>Finalize the sale and arrange the transfer with the buyer.</ListItem>
        </List>
      </Section>
      
      <Section>
        <Title>Revenue Model</Title>
        <List>
          <ListItem>Sponsored Listings: Bronze, Silver, and Gold packages for enhanced visibility.</ListItem>
          <ListItem>Banner Advertising: Opportunities for businesses to feature their ads on our site.</ListItem>
        </List>
      </Section>
      
      <Section>
        <Title>Our Values</Title>
        <p>
          We are committed to maintaining the integrity of the firearms industry by preventing scams and illegal activities. We adhere to the US Firearms Act and use rigorous moderation to ensure compliance and safety.
        </p>
      </Section>
      
      <Footer>
        <p>&copy; 2024 Best Online Guns. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default About;
