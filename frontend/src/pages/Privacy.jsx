import React from "react";
import {
  LegalPageLayout,
  Section,
  Bullet,
  ContactBlock,
} from "./Terms";

const SubHeading = ({ children }) => (
  <h3
    className="text-xl font-light text-[#0b1c2c] mt-6 mb-3"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    {children}
  </h3>
);

const Privacy = () => {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy"
      italicWord="Policy"
      intro="How Blanqo collects, uses, stores, and protects your personal information when you use our services."
      lastUpdated="Effective: June 15, 2026 · Last Updated: June 15, 2026"
    >
      <Section number="1" title="About This Privacy Policy">
        <p>
          This Privacy Policy explains how{" "}
          <span className="text-[#0b1c2c] font-medium">
            RASA DYAD ENTERPRISES LLP
          </span>
          , operating under the brand name{" "}
          <span className="text-[#0b1c2c] font-medium">Blanqo</span> ("Blanqo",
          "Company", "we", "our", or "us"), collects, uses, stores, processes,
          discloses, and protects personal information when customers access
          or use our website, mobile application, WhatsApp services, customer
          support channels, pickup and delivery services, or any other services
          offered by Blanqo (collectively, the "Services").
        </p>
        <p>
          By accessing or using our Services, creating an account, placing an
          order, scheduling a pickup, communicating with us, or otherwise
          providing personal information, you consent to the collection and
          processing of your information in accordance with this Privacy
          Policy and applicable laws.
        </p>
        <p>
          This Privacy Policy is intended to comply with applicable provisions
          of the Information Technology Act, 2000, the Digital Personal Data
          Protection Act, 2023, and other applicable laws and regulations.
        </p>
      </Section>

      <Section number="2" title="Who We Are">
        <p>
          Blanqo is a professional garment and fabric care brand owned and
          operated by{" "}
          <span className="text-[#0b1c2c] font-medium">
            RASA DYAD ENTERPRISES LLP
          </span>
          . Our Services include, but are not limited to:
        </p>
        <Bullet>Laundry</Bullet>
        <Bullet>Dry Cleaning</Bullet>
        <Bullet>Wedding Couture Care</Bullet>
        <Bullet>Shoe Cleaning & Restoration</Bullet>
        <Bullet>Bag Cleaning & Restoration</Bullet>
        <Bullet>Curtain Cleaning</Bullet>
        <Bullet>Upholstery Cleaning</Bullet>
        <Bullet>Home Linen Care</Bullet>
        <Bullet>Fabric Protection Treatments</Bullet>
        <Bullet>Pickup and Delivery Services</Bullet>
        <p>
          The term "Services" shall include any future products, services, or
          solutions offered by Blanqo.
        </p>
      </Section>

      <Section number="3" title="Information We Collect">
        <p>
          We collect only such information as is reasonably necessary for
          providing and improving our Services.
        </p>

        <SubHeading>A. Information Provided by Customers</SubHeading>
        <Bullet>Full name</Bullet>
        <Bullet>Mobile number</Bullet>
        <Bullet>Email address</Bullet>
        <Bullet>Pickup and delivery addresses</Bullet>
        <Bullet>Billing information</Bullet>
        <Bullet>Service preferences</Bullet>
        <Bullet>Membership details</Bullet>
        <Bullet>Customer feedback and reviews</Bullet>
        <Bullet>Customer support communications</Bullet>

        <SubHeading>B. Order and Transaction Information</SubHeading>
        <Bullet>Order history</Bullet>
        <Bullet>Service records</Bullet>
        <Bullet>Invoice details</Bullet>
        <Bullet>Payment status</Bullet>
        <Bullet>Delivery instructions</Bullet>
        <Bullet>Complaint and claim records</Bullet>

        <SubHeading>C. Device and Technical Information</SubHeading>
        <p>
          When you visit our website or application, we may automatically
          collect IP address, browser type, device information, operating
          system, referral source, website usage information, and cookies and
          analytics data.
        </p>

        <SubHeading>D. Communication Information</SubHeading>
        <p>
          We may maintain records of communications through phone calls,
          WhatsApp, SMS, email, website forms, and customer support channels.
        </p>

        <SubHeading>E. Information We Do Not Collect</SubHeading>
        <p>
          We do not intentionally collect sensitive personal information such
          as biometric data, health information, financial account
          credentials, or government identification numbers — unless
          specifically required by law or voluntarily submitted by you.
        </p>
      </Section>

      <Section number="4" title="How We Use Your Information">
        <SubHeading>Service Delivery</SubHeading>
        <Bullet>Processing orders</Bullet>
        <Bullet>Scheduling pickups and deliveries</Bullet>
        <Bullet>Providing customer support</Bullet>
        <Bullet>Managing memberships and packages</Bullet>
        <Bullet>Maintaining service records</Bullet>

        <SubHeading>Communication</SubHeading>
        <Bullet>Order confirmations</Bullet>
        <Bullet>Pickup and delivery notifications</Bullet>
        <Bullet>Service updates</Bullet>
        <Bullet>Billing communications</Bullet>
        <Bullet>Customer support responses</Bullet>

        <SubHeading>Business Operations</SubHeading>
        <Bullet>Quality assurance</Bullet>
        <Bullet>Staff training</Bullet>
        <Bullet>Internal record keeping</Bullet>
        <Bullet>Fraud prevention</Bullet>
        <Bullet>Dispute resolution</Bullet>

        <SubHeading>Marketing and Promotions</SubHeading>
        <p>
          With your consent or as permitted by law, we may send promotional
          offers, discounts, loyalty program updates, surveys, service
          announcements, and new product launches via SMS, WhatsApp, email, or
          telephone calls. You may opt out of promotional communications at
          any time.
        </p>

        <SubHeading>Legal Compliance</SubHeading>
        <Bullet>Compliance with applicable laws</Bullet>
        <Bullet>Regulatory reporting</Bullet>
        <Bullet>Law enforcement requests</Bullet>
        <Bullet>Protection of legal rights</Bullet>
      </Section>

      <Section number="5" title="Photographs of Articles">
        <p>
          To maintain service quality, document condition, investigate claims,
          provide training, and improve operations, Blanqo may photograph
          Articles before, during, or after processing.
        </p>
        <p>Where used for marketing or promotional purposes:</p>
        <Bullet>
          No personally identifiable customer information will be disclosed
          without consent.
        </Bullet>
        <Bullet>
          Customers may request that their Articles not be used for
          promotional purposes by informing us at the time of booking.
        </Bullet>
      </Section>

      <Section number="6" title="Sharing of Information">
        <p>We do not sell customer personal information.</p>
        <SubHeading>Service Providers</SubHeading>
        <p>
          Including payment gateway providers, cloud hosting providers, CRM
          platforms, SMS service providers, WhatsApp communication providers,
          email service providers, analytics providers, and delivery and
          logistics partners.
        </p>
        <SubHeading>Corporate Affiliates</SubHeading>
        <p>
          Our affiliated entities and business partners where necessary for
          operational purposes.
        </p>
        <SubHeading>Legal Authorities</SubHeading>
        <p>
          Where required by law, court order, government request, or
          regulatory requirement.
        </p>
        <SubHeading>Business Transactions</SubHeading>
        <p>
          In connection with mergers, acquisitions, restructuring, or asset
          transfers — subject to appropriate confidentiality obligations.
        </p>
      </Section>

      <Section number="7" title="Payment Information">
        <p>
          Online payments may be processed through third-party payment
          gateways. Blanqo does not store complete debit card, credit card,
          UPI PIN, internet banking credentials, or similar payment
          authentication information on its systems.
        </p>
        <p>
          Any payment transaction is subject to the privacy policies and
          security practices of the respective payment service provider.
        </p>
      </Section>

      <Section number="8" title="Cookies and Analytics">
        <p>Our website may use cookies and similar technologies.</p>
        <Bullet>
          <strong>Essential Cookies:</strong> Required for website
          functionality.
        </Bullet>
        <Bullet>
          <strong>Analytics Cookies:</strong> Used to understand website
          traffic and user behaviour.
        </Bullet>
        <Bullet>
          <strong>Functional Cookies:</strong> Used to remember user
          preferences and improve user experience.
        </Bullet>
        <Bullet>
          <strong>Advertising Cookies:</strong> May be used to measure
          marketing effectiveness and deliver relevant content.
        </Bullet>
        <p>
          Users may manage cookie settings through browser preferences.
          Disabling cookies may affect certain website functions.
        </p>
      </Section>

      <Section number="9" title="Data Security">
        <p>
          We implement reasonable technical, administrative, and
          organisational safeguards designed to protect personal information
          against unauthorized access, disclosure, loss, alteration, and
          misuse.
        </p>
        <p>
          However, no electronic transmission or storage system can be
          guaranteed to be completely secure, and we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section number="10" title="Data Retention">
        <p>
          We retain personal information only for as long as reasonably
          necessary to provide Services, maintain business records, resolve
          disputes, enforce agreements, and comply with legal obligations.
        </p>
        <p>
          Upon expiry of the applicable retention period, information may be
          deleted, anonymized, or archived in accordance with applicable laws.
        </p>
      </Section>

      <Section number="11" title="International Data Transfers">
        <p>
          Certain technology service providers engaged by Blanqo may process
          information on servers located outside India. Where such transfers
          occur, we take reasonable steps to ensure that appropriate
          safeguards are implemented and that processing remains compliant
          with applicable law.
        </p>
      </Section>

      <Section number="12" title="Children's Privacy">
        <p>
          Our Services are not intended for individuals below 18 years of age.
          We do not knowingly collect personal information from children
          without legally required parental or guardian consent.
        </p>
        <p>
          If we become aware that information relating to a child has been
          collected inappropriately, we will take reasonable steps to delete
          such information.
        </p>
      </Section>

      <Section number="13" title="Your Rights">
        <p>Subject to applicable law, customers may:</p>
        <Bullet>Request access to personal information</Bullet>
        <Bullet>Request correction of inaccurate information</Bullet>
        <Bullet>Request deletion of personal information</Bullet>
        <Bullet>Withdraw previously provided consent</Bullet>
        <Bullet>Request information regarding processing activities</Bullet>
        <Bullet>Lodge a grievance regarding personal data handling</Bullet>
        <p>Requests may be submitted using the contact details below.</p>
        <p>
          Please note that certain information may need to be retained to
          comply with legal, accounting, tax, fraud prevention, or operational
          requirements.
        </p>
      </Section>

      <Section number="14" title="Withdrawal of Consent">
        <p>
          Where processing is based on consent, you may withdraw your consent
          at any time by contacting us. Withdrawal of consent will not affect
          processing already undertaken prior to such withdrawal. Certain
          Services may become unavailable if necessary information is
          withdrawn.
        </p>
      </Section>

      <Section number="15" title="Third-Party Links">
        <p>
          Our website or communications may contain links to third-party
          websites or platforms. Blanqo is not responsible for the privacy
          practices, content, or policies of such third-party websites. Users
          are encouraged to review their respective privacy policies.
        </p>
      </Section>

      <Section number="16" title="Changes to This Privacy Policy">
        <p>
          Blanqo may update this Privacy Policy from time to time to reflect
          legal requirements, operational changes, technology updates, or new
          services. The latest version will always be available on our website
          and shall become effective upon publication.
        </p>
      </Section>

      <Section number="17" title="Grievance Officer & Contact Information">
        <p>
          For questions, requests, complaints, or concerns regarding this
          Privacy Policy or the handling of personal information, please
          contact our Grievance Officer:
        </p>
        <ContactBlock />
        <p className="mt-4 text-sm">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e]">
            Business Hours
          </span>
          <br />
          Monday to Saturday, 10:00 AM to 7:00 PM
        </p>
      </Section>
    </LegalPageLayout>
  );
};

export default Privacy;
