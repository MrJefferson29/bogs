import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Gonzuella",
    feedback:
      "I’ve never felt more secure about buying a package! I love how they prioritize gun shipping care—everything always arrives in perfect condition. Highly recommend!",
    location: "New York, NY",
    rating: 5,
  },
  {
    name: "Miller Temili",
    feedback:
      "Best Online Guns truly sets the standard for gun services. My gun arrived on time, and I’m amazed at how careful they are with handling antique items.",
    location: "Los Angeles, CA",
    rating: 4.5,
  },
  {
    name: "Michael Harrington",
    feedback:
      "Their fun-facts about every item really keeps me mazed, and their 24/7 customer support has always been there to help me with any questions.",
    location: "Chicago, IL",
    rating: 4,
  },
  {
    name: "Sean Tucket",
    feedback:
      "BOGS is hands down the best guns service out there! I love that I can feel safe and secure, knowing that I have a registered firearm, and their 24-hour support means I can always reach someone if I have a concern.",
    location: "Houston, TX",
    rating: 5,
  },
  {
    name: "Robert Brown",
    feedback:
      "I can't praise Best Online Guns enough for their exceptional service! The care they take with each licensed firearm is evident—a top-tier service that I trust completely!",
    location: "Miami, FL",
    rating: 4.5,
  },
];

// Helper function to render star ratings
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color="#FFD700" />
      ))}
      {halfStar && <FaStarHalfAlt color="#FFD700" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} color="#FFD700" />
      ))}
    </>
  );
};

// Styled components
const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 576px) {
    padding: 1rem 0;
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Feedback = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.8;
  max-width: 85%;
  margin: 0 auto;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Name = styled.h3`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const Location = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Container>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            <Stars>{renderStars(testimonial.rating)}</Stars>
            <Feedback>"{testimonial.feedback}"</Feedback>
            <Name>{testimonial.name}</Name>
            <Location>{testimonial.location}</Location>
          </TestimonialCard>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSlider;
