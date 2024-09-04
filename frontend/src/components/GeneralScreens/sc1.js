import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import g1 from "../../Assets/g1.jpg";
import rifle from "../../Assets/rifle.png";
import airgun from "../../Assets/airgun.png";
import shotgun from "../../Assets/shotgun.png";
import binoculars from "../../Assets/binoculars.png";
import pistol from "../../Assets/pistol.png";
import bullet from "../../Assets/bullet.png";
import other from "../../Assets/other.png";
import blade from "../../Assets/blade.png";
import more from "../../Assets/more.png";
import dog from "../../Assets/dog.png";
import replica from "../../Assets/replica.png";
import crossbow from "../../Assets/crossbow.png";
import target from "../../Assets/target.png";
import store from "../../Assets/store.png";
import Ads from './Ads';
import Sc2 from './Sc2';

export default function Sc1() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); 

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const categoryMapping = {
    "RIFLES": "Rifles",
    "AIR GUNS": "Air Guns",
    "SHOTGUNS": "Shotguns",
    "ACCESSORIES": "Accessories",
    "PISTOL / HANDGUNS": "Pistols",
    "AMMUNITION": "Ammunition",
    "DEACTIVATED": "Deactivated",
    "BLADES": "Blades",
    "OTHER GUNS": "Other Guns",
    "GUN DOGS": "Gun Dogs",
    "REPLICA": "Replica",
    "BOWS & CROSSBOWS": "Bows & Crossbows",
    "WANTED": "Wanted",
    "SERVICES": "Services"
  };

  const handleProductClick = (productName) => {
    const categoryName = categoryMapping[productName];
    navigate(`/all-guns?category=${encodeURIComponent(categoryName)}`); 
  };

  return (
    <Styles>
      <section className="hero-section">
        <div className="ad-wrap">
          <div className="ad">Ad of the week!</div>
          <div className="ad-content">
            <h2 className="ad-title">Ref 9221. An American Civ..</h2>
            <p className="ad-description">
              Andrew Bottomley Antique Arms & Armour. Mail Order Only. Established since 1968.
            </p>
            <div className="ad-price">£1,400</div>
          </div>
        </div>
      </section>

      <section className="product-list">
        <Row>
          {products.slice(0, showMore ? products.length : 4).map((product, index) => (
            <Col key={index} md={6} lg={4} xl={3}>
              <ProductItem onClick={() => handleProductClick(product.name)}>
                <img src={product.img} alt={product.name} className="product-icon" />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <span className="view-all">View All</span>
                </div>
              </ProductItem>
            </Col>
          ))}
        </Row>
        <center>
          <p className="show-more" onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </p>
        </center>
      </section>
      <Ads />
      <Sc2 />
    </Styles>
  );
}

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: box-shadow 0.3s ease;
  max-width: 100%; 
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .product-icon {
    width: 48px;
    height: auto;
    margin-right: 1rem;
  }

  .product-info {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .view-all {
    color: #ff9900;
    font-weight: 500;
    cursor: pointer;
  }
`;

const products = [
  { name: "RIFLES", img: rifle },
  { name: "AIR GUNS", img: airgun },
  { name: "SHOTGUNS", img: shotgun },
  { name: "ACCESSORIES", img: binoculars },
  { name: "PISTOL / HANDGUNS", img: pistol },
  { name: "AMMUNITION", img: bullet },
  { name: "DEACTIVATED", img: other },
  { name: "BLADES", img: blade },
  { name: "OTHER GUNS", img: more },
  { name: "GUN DOGS", img: dog },
  { name: "REPLICA", img: replica },
  { name: "BOWS & CROSSBOWS", img: crossbow },
  { name: "WANTED", img: target },
  { name: "SERVICES", img: store }
];

const Styles = styled.div`
  body, html {
    overflow-x: hidden;
  }

  .hero-section {
    background-image: url(${g1});
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 4rem 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .ad-wrap {
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
  }

  .ad {
    background: #68cd1d;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border: 2px solid #fff;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .ad-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .ad-description {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  .ad-price {
    font-size: 1.4rem;
    font-weight: bold;
    color: #f1c40f;
    margin-top: 1rem;
  }

  .product-list {
    padding: 2rem;
    background: #f9f9f9;
  }

  .show-more {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    .hero-section {
      padding: 5rem 3rem;
    }

    .ad-title {
      font-size: 2rem;
    }

    .ad-description {
      font-size: 1.3rem;
    }

    .ad-price {
      font-size: 1.6rem;
    }

    .product-list {
      padding: 3rem;
    }

    .show-more {
      font-size: 1.2rem;
    }

    .product-icon {
      width: 64px;
    }

    .product-name {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1200px) {
    .hero-section {
      padding: 6rem 4rem;
    }

    .ad-title {
      font-size: 2.5rem;
    }

    .ad-description {
      font-size: 1.4rem;
    }

    .ad-price {
      font-size: 1.8rem;
    }

    .product-list {
      padding: 4rem;
    }

    .show-more {
      font-size: 1.4rem;
    }
  }

  .row {
    margin-right: 0;
    margin-left: 0;
  }
`;
