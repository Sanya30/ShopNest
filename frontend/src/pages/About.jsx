
import React from 'react';

const About = () => {
  return (
    <>
      
<style>{`
  .about-page {
    max-width: 1000px;
    margin: 55px auto;
    padding: 45px;
    color: #eeeeee;
    background: linear-gradient(145deg, #171717, #080808);
    border: 1px solid #333333;
    border-radius: 20px;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
    line-height: 1.8;
    animation: aboutFadeIn 0.5s ease;
  }

  .about-page .eyebrow {
    color: #ff3030;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .about-page h1 {
    color: #ffffff;
    font-size: clamp(32px, 5vw, 44px);
    margin: 12px 0 22px;
  }

  .about-page .accent-line {
    width: 65px;
    height: 4px;
    background: #ff2020;
    border-radius: 5px;
    margin-bottom: 25px;
    box-shadow: 0 0 12px rgba(255, 32, 32, 0.4);
  }

  .about-page .intro {
    color: #bdbdbd;
    font-size: 17px;
    max-width: 750px;
    margin-bottom: 35px;
  }

  .about-page .features {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin: 35px 0 45px;
  }

  .about-page .feature {
    padding: 24px 20px;
    background: #111111;
    border: 1px solid #303030;
    border-radius: 14px;
    transition: transform 0.25s, border-color 0.25s,
      box-shadow 0.25s;
  }

  .about-page .feature:hover {
    transform: translateY(-5px);
    border-color: #ff3030;
    box-shadow: 0 8px 25px rgba(255, 0, 0, 0.1);
  }

  .about-page .feature-icon {
    font-size: 28px;
    color: #ff3030;
  }

  .about-page .feature h3 {
    color: #ffffff;
    font-size: 17px;
    margin: 12px 0 8px;
  }

  .about-page .feature p {
    color: #aaaaaa;
    font-size: 14px;
    margin: 0;
  }

  .about-page .section {
    margin-top: 35px;
  }

  .about-page .section h2 {
    color: #ff3838;
    font-size: 22px;
    margin-bottom: 12px;
  }

  .about-page .section p,
  .about-page .section li {
    color: #bdbdbd;
    font-size: 15px;
  }

  .about-page .section ul {
    padding-left: 22px;
  }

  .about-page .section li {
    margin-bottom: 10px;
  }

  .about-page .section li::marker {
    color: #ff3030;
  }

  .about-page .closing {
    margin-top: 42px;
    padding: 27px;
    border: 1px solid #512020;
    border-radius: 14px;
    background: linear-gradient(120deg, #260d0d, #100909);
  }

  .about-page .closing h2 {
    color: #ffffff;
    margin: 0 0 8px;
    font-size: 22px;
  }

  .about-page .closing p {
    color: #c4c4c4;
    margin: 0;
  }

  @keyframes aboutFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 700px) {
    .about-page {
      margin: 25px 14px;
      padding: 25px 20px;
    }

    .about-page .features {
      grid-template-columns: 1fr;
    }

    .about-page .intro {
      font-size: 15px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .about-page {
      animation: none;
    }
  }
`}</style>

      <main className="about-page">
        <span className="eyebrow">WELCOME TO SHOPNEST</span>

        <h1>About ShopNest</h1>
        <div className="accent-line" />

        <p className="intro">
          More than just shopping — we're here to make
          discovering your next favourite product simple,
          convenient, and enjoyable.
        </p>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">✦</span>
            <h3>Quality First</h3>
            <p>
              Explore products and discover options for
              your everyday needs.
            </p>
          </div>

          <div className="feature">
            <span className="feature-icon">♡</span>
            <h3>Customer Focused</h3>
            <p>
              We aim to provide a smooth and convenient
              shopping experience.
            </p>
          </div>

          <div className="feature">
            <span className="feature-icon">⌘</span>
            <h3>Easy Shopping</h3>
            <p>
              Browse products and manage your cart
              in one convenient place.
            </p>
          </div>
        </div>

        <section className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make online shopping simple
            and enjoyable through a user-friendly platform
            where customers can discover products with ease.
          </p>
        </section>

        <section className="section">
          <h2>Why ShopNest?</h2>
          <ul>
            <li>A simple and intuitive shopping experience</li>
            <li>Convenient product browsing and cart management</li>
            <li>A platform designed around customer needs</li>
            <li>Clear product and order information</li>
          </ul>
        </section>

        <div className="closing">
          <h2>Your next favourite find awaits.</h2>
          <p>
            Thank you for being a part of the ShopNest journey.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
