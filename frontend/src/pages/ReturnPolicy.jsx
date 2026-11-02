
import React from 'react';

const ReturnPolicy = () => {
  return (
    <>
      <style>{`
        .return-page {
          max-width: 1000px;
          margin: 55px auto;
          padding: 45px;
          color: #eeeeee;
          background: linear-gradient(145deg, #171717, #080808);
          border: 1px solid #303030;
          border-radius: 20px;
          box-shadow: 0 15px 45px rgba(0,0,0,0.5);
          line-height: 1.85;
          animation: returnFade 0.5s ease;
        }

        .return-page .eyebrow {
          color: #ff3030;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .return-page h1 {
          color: #ffffff;
          font-size: clamp(30px, 5vw, 42px);
          margin: 12px 0 20px;
        }

        .return-page .accent-line {
          width: 65px;
          height: 4px;
          background: #ff2020;
          border-radius: 5px;
          margin-bottom: 25px;
          box-shadow: 0 0 12px rgba(255,32,32,0.35);
        }

        .return-page .intro {
          color: #bdbdbd;
          font-size: 16px;
          margin-bottom: 32px;
        }

        .return-page .policy-section {
          margin-top: 28px;
          padding: 22px;
          background: #111111;
          border: 1px solid #292929;
          border-left: 3px solid #ff3030;
          border-radius: 10px;
          transition: border-color 0.25s;
        }

        .return-page .policy-section:hover {
          border-color: #ff3030;
        }

        .return-page h2 {
          color: #ff3838;
          font-size: 20px;
          margin: 0 0 10px;
        }

        .return-page .policy-section p {
          color: #bdbdbd;
          font-size: 15px;
          margin: 0;
        }

        .return-page ol {
          padding-left: 23px;
          margin: 12px 0 0;
        }

        .return-page li {
          color: #c5c5c5;
          padding-left: 5px;
          margin-bottom: 10px;
        }

        .return-page li::marker {
          color: #ff3030;
          font-weight: 700;
        }

        .return-page .contact-box {
          margin-top: 32px;
          padding: 25px;
          background: linear-gradient(120deg, #260d0d, #100909);
          border: 1px solid #512020;
          border-radius: 14px;
        }

        .return-page .contact-box h2 {
          color: #ffffff;
          margin-top: 0;
        }

        .return-page .contact-box p {
          color: #c5c5c5;
          margin-bottom: 0;
        }

        @keyframes returnFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 700px) {
          .return-page {
            margin: 25px 14px;
            padding: 25px 20px;
          }

          .return-page .policy-section {
            padding: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .return-page { animation: none; }
        }
      `}</style>

      <main className="return-page">
        <span className="eyebrow">SHOPNEST / CUSTOMER CARE</span>

        <h1>Return & Refund Policy</h1>
        <div className="accent-line" />

        <p className="intro">
          We want you to have a positive shopping experience.
          Please review the return and refund information below
          before placing or returning an order.
        </p>

        <section className="policy-section">
          <h2>1. Return Eligibility</h2>
          <p>
            Products may qualify for a return if they are
            damaged, defective, incorrect, or otherwise eligible
            under the terms applicable to the order and
            relevant consumer protection laws.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Return Window</h2>
          <p>
            Check the return period and eligibility shown for
            your product or order. ShopNest should publish its
            actual return window before this policy is used
            for customer purchases.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. How to Request a Return</h2>
          <ol>
            <li>Contact ShopNest customer support.</li>
            <li>Provide your order number and reason for return.</li>
            <li>Include photos if the item is damaged or defective.</li>
            <li>Follow the return instructions provided by support.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>4. Refund Processing</h2>
          <p>
            Once a return is approved and any required checks
            are completed, the refund will be processed according
            to the applicable order terms. The time for funds
            to appear may depend on the payment provider or bank.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Non-Returnable Items</h2>
          <p>
            Any product exclusions must be clearly disclosed
            before purchase and must comply with applicable law.
            Statutory consumer rights remain unaffected.
          </p>
        </section>

        <div className="contact-box">
          <h2>Need Help With a Return?</h2>
          <p>
            Contact the ShopNest support team using the contact
            details provided on our website. Please keep your
            order information handy so we can assist you.
          </p>
        </div>
      </main>
    </>
  );
};

export default ReturnPolicy;
