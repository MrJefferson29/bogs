import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import be from "../../Assets/be.jpg";
import de from "../../Assets/de.jpg";
import Testimonies from './Testimonies'

export default function Sc2() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "") {
      alert("Please enter your email address.");
    } else {
      alert(`Thank you for subscribing to our newsletter, ${email}`);
      setEmail('')
    }
  };

  return (
    <Styles>
      <Container>
        <Row className="rowa">
          <Col md={12} className="text-center">
            <FiMail color="white" size={50} />
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="submit-button" onClick={handleSubmit}>
                Submit
              </div>
            </div>

            <div className="checkboxes">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="bogs-newsletter"
                />
                <label htmlFor="bogs-newsletter">
                  Sign me up to the BOGS newsletter
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="third-party-offers"
                />
                <label htmlFor="third-party-offers">
                  Send me offers and promotions from third parties
                </label>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="content-row">
          <Col md={12} lg={6}>
            <img src={de} alt="Advice" />
          </Col>
          <Col md={12} lg={6}>
            <h2>A Hunter's Introduction To Deer Stalking in the UK & US</h2>
            <p>
              If you're an avid hunter or gun enthusiast, chances are you've heard
              about deer stalking. Whether you're just starting out as a curious
              hunter or looking to brush up on your skills, deer stalking can be
              an engaging and thrilling way to experience the great outdoors. But
              it does require some knowledge so that deer stalkers can pursue
              their targets ethically and safely.
            </p>
            <p className="read-more">read more</p>
            <hr />
          </Col>
        </Row>

        <Row className="content-row">
          <Col md={12} lg={6}>
            <img src={be} alt="News" />
          </Col>
          <Col md={12} lg={6}>
            <h2>Savage Arms: Long-Range Shooting Specialists</h2>
            <p>
              One of our amazing partners at this year’s National Shooting Show,
              was Savage Arms, being represented at The National Shooting Show by
              their US & UK-based distributors, Viking Arms. Savage Arms is driven by a
              spirit of American ingenuity, constantly pushing performance higher
              through innovative technology and collaboration with shooters,
              hunters, and guides. We spoke to Andy Norris, UK Sales Manager for
              Viking Arms. The National Shooting Show Andy was more
            </p>
            <p className="read-more">read more</p>
            <hr />

          </Col>
        </Row>
      </Container>
      <Testimonies />
    </Styles>
  );
}

const Styles = styled.div`
  .rowa {
    background-color: #212527;
    color: white;
    padding: 2rem 1rem;
    border-radius: 8px;
    margin: 1rem auto;
    max-width: 800px; /* Adjust width for larger screens */
  }

  .subscribe-form {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  input[type="email"] {
    width: 60%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
    margin-right: 1rem;
  }

  .submit-button {
    padding: 0.55rem;
    background-color: #ff9900;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
  }

  .checkboxes {
    margin-top: 1rem;
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .checkbox input {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }

  .content-row {
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    border-radius: 3px;
  }

  h2 {
    font-size: 1.6rem;
    margin-top: 1rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }

  .read-more {
    font-weight: 700;
    color: #ff9900;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .rowa {
      max-width: 1200px; /* Adjust the width for larger screens */
    }

    .subscribe-form input[type="email"] {
      width: 50%;
    }
  }
`;
