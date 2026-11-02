
import React from 'react';

const Disclaimer = () => {
  return (
    <>
      <style>{`
        .disclaimer-page {
          max-width: 1000px;
          margin: 55px auto;
          padding: 45px;
          color: #eeeeee;
          background: linear-gradient(145deg, #171717, #080808);
          border: 1px solid #303030;
          border-radius: 20px;
          box-shadow: 0 15px 45px rgba(0,0,0,0.5);
          line-height: 1.85;
          animation: disclaimerFade 0.5s ease;
        }

        .disclaimer-page .eyebrow {
          color: #ff3030;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .disclaimer-page h1 {
          color: #ffffff;
          font-size: clamp(30px, 5vw, 42px);
          margin: 12px 0 20px;
        }

        .disclaimer-page .accent-line {
          width: 65px;
          height: 4px;
          background: #ff2020;
          border-radius: 5px;
          margin-bottom: 25px;
          box-shadow: 0 0 12px rgba(255,32,32,0.35);
        }

        .disclaimer-page .intro {
          color: #bdbdbd;
          font-size: 16px;
          margin-bottom: 32px;
        }

        .disclaimer-page .policy-section {
          margin-top: 28px;
          padding: 20px 22px;
          background: #111111;
          border: 1px solid #292929;
          border-left: 3px solid #ff3030;
          border-radius: 10px;
          transition: border-color 0.25s;
        }

        .disclaimer-page .policy-section:hover {
          border-color: #ff3030;
        }

        .disclaimer-page h2 {
          color: #ff3838;
          font-size: 20px;
          margin: 0 0 10px;
        }

        .disclaimer-page .policy-section p {
          color: #bdbdbd;
          font-size: 15px;
          margin: 0;
        }

        .disclaimer-page .closing-note {
          margin-top: 32px;
          padding: 22px;
          background: #200d0d;
          border: 1px solid #512020;
          border-radius: 12px;
          color: #d0d0d0;
          font-style: italic;
        }

        @keyframes disclaimerFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 700px) {
          .disclaimer-page {
            margin: 25px 14px;
            padding: 25px 20px;
          }

          .disclaimer-page .policy-section {
            padding: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .disclaimer-page { animation: none; }
        }
      `}</style>

      <main className="disclaimer-page">
        <span className="eyebrow">SHOPNEST / INFORMATION</span>

        <h1>Disclaimer</h1>
        <div className="accent-line" />

        <p className="intro">
          Please read this disclaimer carefully to understand
          the general terms relating to your use of ShopNest.
        </p>

        <section className="policy-section">
          <h2>1. General Information</h2>
          <p>
            The information and products displayed on ShopNest
            are provided for general shopping purposes. We aim
            to keep website information accurate and up to date.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Product Information</h2>
          <p>
            We make reasonable efforts to display accurate
            product descriptions, images, prices, and availability.
            However, occasional errors or differences may occur.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Pricing and Availability</h2>
          <p>
            Product prices and availability may change. If a
            listing contains an error, any resulting action will
            be handled in accordance with applicable law and the
            terms communicated to the customer.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. External Links</h2>
          <p>
            ShopNest may contain links to third-party websites.
            We do not control those websites and are not
            responsible for their content or privacy practices.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Website Availability</h2>
          <p>
            We aim to keep ShopNest available and functioning
            properly, but temporary interruptions may occur
            due to maintenance or technical issues.
          </p>
        </section>

        <div className="closing-note">
          By using ShopNest, you acknowledge that you have read
          this disclaimer. Nothing here limits rights that
          cannot legally be excluded.
        </div>
      </main>
    </>
  );
};

export default Disclaimer;
