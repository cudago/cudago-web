import React from "react";
import "./Terms.css";
import Footer from "./Footer";


const Terms = () => {
  const termsHTML = `
    <h1>Terms and Conditions</h1>
    <p>Last updated: March 28, 2026</p>
    <p>Please read these terms and conditions carefully before using Our Service.</p>

    <h2>Interpretation and Definitions</h2>

    <h3>Interpretation</h3>
    <p>
      The words whose initial letters are capitalized have meanings defined under the following conditions.
      The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
    </p>

    <h3>Definitions</h3>
    <p>For the purposes of these Terms and Conditions:</p>

    <ul>
      <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
      <li><strong>Country</strong> refers to: Maharashtra, India</li>
      <li><strong>Company</strong> refers to cudago.</li>
      <li><strong>Device</strong> means any device that can access the Service.</li>
      <li><strong>Service</strong> refers to the Website.</li>
      <li><strong>Terms and Conditions</strong> means these Terms and Conditions, including any documents incorporated by reference.</li>
      <li><strong>Third-Party Social Media Service</strong> means any third-party service or content.</li>
      <li><strong>Website</strong> refers to cudago, accessible from <a href="https://cudago.in" target="_blank">cudago.in</a></li>
      <li><strong>You</strong> means the individual accessing or using the Service.</li>
    </ul>

    <h2>Acknowledgment</h2>
    <p>
      These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company.
      These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
    </p>

    <p>
      Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms.
      These Terms apply to all visitors, users and others who access or use the Service.
    </p>

    <p>
      By accessing or using the Service You agree to be bound by these Terms.
      If You disagree with any part of these Terms then You may not access the Service.
    </p>

    <p>You represent that you are over the age of 18.</p>

    <h2>Links to Other Websites</h2>
    <p>
      Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
    </p>

    <p>
      The Company has no control over, and assumes no responsibility for, the content or practices of any third-party websites.
    </p>

    <h3>Links from a Third-Party Social Media Service</h3>
    <p>
      The Service may display or link to content provided by third-party services.
      The Company is not responsible for any such content or services.
    </p>

    <h2>Termination</h2>
    <p>
      We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever.
    </p>

    <h2>Limitation of Liability</h2>
    <p>
      The entire liability of the Company shall be limited to the amount actually paid by You through the Service or 100 USD.
    </p>

    <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
    <p>
      The Service is provided "AS IS" and "AS AVAILABLE" without warranty of any kind.
    </p>

    <h2>Governing Law</h2>
    <p>The laws of Maharashtra, India shall govern these Terms.</p>

    <h2>Disputes Resolution</h2>
    <p>
      You agree to first try to resolve disputes informally by contacting the Company.
    </p>

    <h2>Severability and Waiver</h2>

    <h3>Severability</h3>
    <p>
      If any provision is held to be unenforceable, the remaining provisions will remain in effect.
    </p>

    <h3>Waiver</h3>
    <p>
      Failure to enforce any right shall not be considered a waiver.
    </p>

    <h2>Changes to These Terms and Conditions</h2>
    <p>
      We reserve the right to modify these Terms at any time.
    </p>

    <h2>Contact Us</h2>
    <p>
      Visit: <a href="https://cudago.in" target="_blank">cudago.in</a>
    </p>
  `;

  return (
    <>
    <div className="terms-container">
      <div
        className="terms-card"
        dangerouslySetInnerHTML={{ __html: termsHTML }}
      />
    </div>
    <Footer />
    </>
  );
};

export default Terms;