import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Section = ({ number, title, children }) => (
  <section className="mb-12">
    <div className="flex items-baseline gap-4 mb-5">
      <span
        className="text-[#c9a96e] text-2xl font-light"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {number}.
      </span>
      <h2
        className="text-2xl md:text-3xl font-light text-[#0b1c2c] leading-snug"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h2>
    </div>
    <div className="pl-0 md:pl-10 text-[#4a5568] text-base leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

const Bullet = ({ children }) => (
  <div className="flex gap-3">
    <span className="mt-2.5 w-1 h-1 bg-[#c9a96e] flex-shrink-0" />
    <p>{children}</p>
  </div>
);

const LegalPageLayout = ({ eyebrow, title, italicWord, intro, lastUpdated, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Header />

      <section className="relative bg-[#0b1c2c] pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <p
            className="text-[140px] md:text-[220px] lg:text-[280px] font-light tracking-[0.15em] text-white/[0.03] whitespace-nowrap"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            BLANQO
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#c9a96e] mb-8 text-xs tracking-[0.25em] uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              {eyebrow}
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {title} <span className="italic text-[#c9a96e]">{italicWord}</span>
          </h1>
          {intro && (
            <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
              {intro}
            </p>
          )}
          {lastUpdated && (
            <p className="text-white/40 text-xs tracking-[0.25em] uppercase mt-6">
              {lastUpdated}
            </p>
          )}
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        {children}
      </main>

      <Footer />
    </div>
  );
};

const ContactBlock = () => (
  <div className="bg-[#f5f1ea] border border-[#c9a96e]/25 p-6 mt-4 space-y-3">
    <div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e] block mb-1">
        Phone
      </span>
      <a
        href="tel:+917075551876"
        className="text-[#0b1c2c] hover:text-[#8a6f3e] transition-colors"
      >
        +91 70755 51876
      </a>
    </div>
    <div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e] block mb-1">
        Email
      </span>
      <a
        href="mailto:hello@blanqo.in"
        className="text-[#0b1c2c] hover:text-[#8a6f3e] transition-colors"
      >
        hello@blanqo.in
      </a>
    </div>
    <div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e] block mb-1">
        Address
      </span>
      <span className="text-[#0b1c2c]">
        RASA DYAD ENTERPRISES LLP (Blanqo) — #205, SMR Vinay Iconia Plaza,
        Botanical Garden Road, Kondapur, Sri Maruthi Nagar Colony, Gachibowli,
        Serilingampalle (M), Hyderabad, Telangana – 500019
      </span>
    </div>
  </div>
);

const Terms = () => {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms &"
      italicWord="Conditions"
      intro="Please read these terms carefully before using Blanqo's garment care services. Availing our services constitutes acceptance of these terms."
      lastUpdated="Last Updated: April 2026"
    >
      <Section number="1" title="Agreement to Terms">
        <p>
          These Terms & Conditions govern the relationship between{" "}
          <span className="text-[#0b1c2c] font-medium">
            RASA DYAD ENTERPRISES LLP
          </span>
          , operating under the brand name and logo of{" "}
          <span className="text-[#0b1c2c] font-medium">Blanqo</span> ("we",
          "our", "us") and any individual or entity (the "Customer") availing
          our garment care services. Our services include dry cleaning,
          laundry, wedding couture care, shoe & bag restoration, curtain &
          upholstery cleaning, and related fabric care for garments,
          accessories and footwear (collectively, the "Articles").
        </p>
        <p>
          By placing an order, scheduling a pickup, or otherwise engaging with
          Blanqo, the Customer unconditionally accepts these Terms & Conditions
          along with any additional terms communicated through invoices,
          challans, membership forms, or our website.
        </p>
      </Section>

      <Section number="2" title="Pricing & Tariffs">
        <Bullet>
          Service charges may vary by Article type. Customers are encouraged to
          confirm the applicable tariff before availing the service.
        </Bullet>
        <Bullet>
          You may get an estimate of the bill amount at the time of handing
          over the garments at pickup. The exact bill amount will be informed
          to the customer via SMS/WhatsApp after garments are booked at the
          store.
        </Bullet>
        <Bullet>
          Any advance payment will be duly noted on the bill or challan copy of
          the order.
        </Bullet>
        <Bullet>
          Pricing for designer, couture, embellished or specialty Articles will
          be quoted only after physical inspection. Customers must declare the
          value of any Article exceeding ₹3,000/- at the time of handover.
        </Bullet>
        <Bullet>
          Express, same-day or urgent delivery is offered at the discretion of
          the outlet and may attract additional charges.
        </Bullet>
        <Bullet>
          Memberships and prepaid packages are non-refundable,
          non-transferable, and not subject to partial or full buyback.
          Benefits must be utilised within the stated validity period.
        </Bullet>
      </Section>

      <Section number="3" title="Booking (Pickup & Delivery)">
        <Bullet>
          The store operates from 10:00 AM to 7:00 PM, 6 days a week.
        </Bullet>
        <Bullet>
          You can schedule a service through our Mobile App, Website, WhatsApp
          or call.
        </Bullet>
        <Bullet>
          Minimum booking amount eligible for free pickup and drop is ₹349/-.
        </Bullet>
        <p>
          Blanqo provides garment care services together with complimentary
          pickup and delivery within serviceable areas. We do not offer
          independent shipping or courier services beyond delivery of processed
          Articles to the Customer.
        </p>
        <p>
          Orders once placed with Blanqo may be cancelled only at our
          discretion and only upon production of the original bill or challan
          by the Customer. Articles already inducted into the cleaning process
          are not eligible for cancellation.
        </p>
      </Section>

      <Section number="4" title="Refunds & Compensation">
        <Bullet>
          Customers are requested to inspect all processed Articles at the time
          of delivery. Issues reported after 24 hours from delivery cannot be
          entertained.
        </Bullet>
        <Bullet>
          Where compensation is found applicable, it shall be limited to a
          maximum of five (5) times the processing charge of the Article or
          ₹3,000/- — whichever is lower — and will generally be issued in the
          form of complimentary services or service credits.
        </Bullet>
        <Bullet>
          Any compensation, refund, or remedy shall be assessed by Blanqo based
          on the facts and circumstances of the case and subject to applicable
          law. Nothing in these Terms shall restrict any statutory rights
          available to the Customer.
        </Bullet>
        <Bullet>
          Blanqo shall not be liable for delay, loss, or failure to perform
          resulting from events beyond its reasonable control including but
          not limited to natural disasters, floods, fire, epidemic, pandemic,
          government restrictions, strikes, transportation disruptions, civil
          unrest, power failures, or acts of God.
        </Bullet>
        <Bullet>
          We accept no liability for any loss or damage of the articles due to
          fire, burglary, or other similar unforeseen causes beyond our
          control.
        </Bullet>
      </Section>

      <Section number="5" title="Service Terms & Conditions">
        <Bullet>
          Blanqo is not responsible for fastness, colour bleed, colour
          running, shrinkage, damages to embellishments, embroidery, sequins,
          beads, stones, trims, adhesives, or decorative works on the Articles
          during processing.
        </Bullet>
        <Bullet>
          Articles are processed in accordance with the manufacturer's wash
          care label, wherever available. Blanqo shall not be liable for
          outcomes arising from compliance with such instructions.
        </Bullet>
        <Bullet>
          While we use the most appropriate methods for stain treatment, 100%
          stain removal cannot be guaranteed. Certain stains may become
          permanent due to age, oxidation, prior treatment, exposure to heat,
          fabric composition, or other factors beyond Blanqo's control. We
          reserve the right to refuse further processing where it may damage
          the Article. Any re-processing carried out at the Customer's request
          shall be at the Customer's risk and at applicable charges.
        </Bullet>
        <Bullet>
          Blanqo conducts a reasonable visual inspection of Articles upon
          receipt. Certain defects, weaknesses, prior repairs, fabric
          deterioration, hidden damage, or pre-existing conditions may not be
          apparent during inspection. Blanqo shall not be liable for damage
          resulting from such pre-existing conditions.
        </Bullet>
        <Bullet>
          A few Articles may require additional processing time and you will
          be informed well in advance.
        </Bullet>
        <Bullet>
          Please count your Articles upon delivery and report any discrepancies
          immediately, as we cannot be held responsible for claims after
          delivery.
        </Bullet>
        <Bullet>
          Customers must remove all jewellery, ornaments, detachable
          accessories, and personal items from Articles before handover.
          Blanqo is not responsible for loss or damage of any such items.
        </Bullet>
        <Bullet>
          The original bill or challan (physical or digital) must be presented
          at the time of delivery. In its absence, delivery will be made only
          after satisfactory identity verification.
        </Bullet>
        <Bullet>
          Any delay in delivery arising from non-presentation of the bill or
          challan shall be the Customer's responsibility. Customers also
          accept full responsibility where delivery is taken by any person
          other than the original subscriber.
        </Bullet>
        <Bullet>
          Articles remaining uncollected for more than thirty (30) days after
          notification shall be stored at the Customer's risk. Blanqo may
          charge reasonable storage fees. Articles remaining uncollected for
          more than ninety (90) days may be disposed of, donated, or otherwise
          dealt with by Blanqo after reasonable attempts to contact the
          Customer.
        </Bullet>
        <Bullet>
          In the unlikely event of an incorrect delivery, Customers are
          requested to inform us immediately and assist us in retrieval and
          resolution.
        </Bullet>
        <Bullet>
          Our packaging is intended for transit only and is not suitable for
          long-term storage. Articles should be removed from packaging upon
          delivery and stored in line with manufacturer guidelines.
        </Bullet>
        <Bullet>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of India. Subject to applicable consumer
          protection laws, courts located in Hyderabad, Telangana shall have
          exclusive jurisdiction over disputes arising out of or relating to
          these Terms.
        </Bullet>
        <Bullet>
          Blanqo reserves the right to suspend or terminate any membership,
          offer or scheme in the event of breach, misuse, fraud, or
          misrepresentation.
        </Bullet>
        <Bullet>
          We may revise these Terms & Conditions at any time without prior
          notice. The current version will always be available on our website.
        </Bullet>
        <Bullet>
          Blanqo shall not be liable for health issues, allergic reactions, or
          damages arising from contact with cleaning agents, heat, fabric age,
          manufacturing defects, colour bleeding, shrinkage, embellishment
          loss, or foreign objects left within Articles.
        </Bullet>
        <Bullet>
          Blanqo collects personal information with the Customer's express
          consent in accordance with the Information Technology Act, 2000 and
          the Digital Personal Data Protection Act, 2023. Such data is not
          shared with third parties without consent, except as required by
          law.
        </Bullet>
        <Bullet>
          Customer data may be used for order communication, service updates,
          promotional offers, surveys, and feedback. Customers consent to
          receiving calls, WhatsApp messages, SMS, and emails for these
          purposes.
        </Bullet>
        <Bullet>
          Customers consent to the use of images of processed Articles for
          promotional purposes across our website and social channels, provided
          no personally identifiable information is disclosed.
        </Bullet>
      </Section>

      <Section number="6" title="Contact Us">
        <p>
          For any questions, clarifications, or grievances regarding these
          Terms & Conditions or our services, please reach out to our customer
          care:
        </p>
        <ContactBlock />
      </Section>
    </LegalPageLayout>
  );
};

export default Terms;
export { LegalPageLayout, Section, Bullet, ContactBlock };
