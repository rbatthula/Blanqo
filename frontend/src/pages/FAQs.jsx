import React, { useEffect, useState } from "react";
import { ArrowLeft, Plus, Minus, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "What services does Blanqo offer?",
    a: (
      <div className="space-y-3">
        <p>
          Blanqo provides professional garment, footwear, accessory, and home
          fabric care services, including:
        </p>
        <ul className="space-y-1 list-disc list-inside ml-2">
          <li>Laundry</li>
          <li>Dry Cleaning</li>
          <li>Bridal & Wedding Couture Care</li>
          <li>Ethnic Wear Care</li>
          <li>Shoe Cleaning & Restoration</li>
          <li>Handbag & Leather Accessory Care</li>
          <li>Curtain Cleaning</li>
          <li>Carpet Cleaning</li>
          <li>Sofa & Upholstery Cleaning</li>
          <li>Home Linen Care</li>
          <li>Other specialized fabric care solutions</li>
        </ul>
      </div>
    ),
  },
  {
    q: "Is pickup and delivery available?",
    a: (
      <div className="space-y-3">
        <p>
          Yes. Blanqo offers convenient doorstep pickup and delivery services
          within selected service areas. Customers can schedule pickups through
          our website, mobile application, WhatsApp, or customer support team.
        </p>
        <p>
          Please note that a minimum order value may apply for complimentary
          pickup and delivery services.
        </p>
      </div>
    ),
  },
  {
    q: "What areas does Blanqo serve?",
    a: (
      <p>
        Blanqo currently operates in selected locations. Service availability
        may vary depending on the area and type of service requested. For the
        latest service coverage, please contact our customer support team.
      </p>
    ),
  },
  {
    q: "How long does the cleaning process take?",
    a: (
      <div className="space-y-3">
        <p>
          Standard processing generally takes between{" "}
          <strong className="text-[#0b1c2c]">2 to 4 days</strong>, depending on
          the type of garment and service selected.
        </p>
        <p>
          Specialty items such as bridal wear, designer garments, shoes,
          handbags, curtains, carpets, and upholstery may require additional
          processing time.
        </p>
        <p>
          Customers will be informed of the expected delivery date at the time
          of booking.
        </p>
      </div>
    ),
  },
  {
    q: "Is express or same-day service available?",
    a: (
      <p>
        Express and same-day services may be available for selected items and
        locations, subject to operational feasibility. Additional charges may
        apply for urgent processing requests.
      </p>
    ),
  },
  {
    q: "How are service charges determined?",
    a: (
      <div className="space-y-3">
        <p>Service charges vary depending on factors such as:</p>
        <ul className="space-y-1 list-disc list-inside ml-2">
          <li>Garment or article type</li>
          <li>Fabric composition</li>
          <li>Cleaning method required</li>
          <li>Embellishments or special finishes</li>
          <li>Stain treatment requirements</li>
          <li>Restoration or repair work involved</li>
        </ul>
        <p>Customers may request an estimate before confirming the order.</p>
      </div>
    ),
  },
  {
    q: "Are delicate garments and premium fabrics treated differently?",
    a: (
      <div className="space-y-3">
        <p>
          Yes. Every garment is individually assessed before processing.
          Cleaning methods are selected based on fabric type, garment
          construction, embellishments and embroidery, manufacturer care
          instructions, and the overall condition of the article.
        </p>
        <p>
          Special care is taken when handling delicate, luxury, designer, and
          premium garments.
        </p>
      </div>
    ),
  },
  {
    q: "Do you clean bridal wear, designer wear, and ethnic garments?",
    a: (
      <p>
        Yes. Blanqo offers specialized care for bridal wear, wedding couture,
        designer garments, lehengas, sherwanis, sarees, gowns, and other
        ethnic or occasion wear. Each article is carefully inspected and
        processed using appropriate cleaning techniques.
      </p>
    ),
  },
  {
    q: "Can shoes, handbags, and leather accessories be cleaned?",
    a: (
      <div className="space-y-3">
        <p>
          Yes. Blanqo provides professional cleaning and restoration services
          for sneakers, sports shoes, formal footwear, handbags, leather
          accessories, and selected suede and leather items.
        </p>
        <p>
          All such items are inspected before processing to determine the
          most suitable treatment method.
        </p>
      </div>
    ),
  },
  {
    q: "Do you clean sofas, curtains, carpets, and upholstery?",
    a: (
      <div className="space-y-3">
        <p>
          Yes. Blanqo offers cleaning services for a variety of household and
          furnishing items, including sofas, upholstery, curtains and drapes,
          carpets and rugs, and other home furnishings.
        </p>
        <p>Service availability may vary depending on location.</p>
      </div>
    ),
  },
  {
    q: "Does Blanqo guarantee stain removal?",
    a: (
      <div className="space-y-3">
        <p>
          While every effort is made to treat and minimize stains, complete
          stain removal cannot always be guaranteed.
        </p>
        <p>Certain stains may become permanent due to factors such as:</p>
        <ul className="space-y-1 list-disc list-inside ml-2">
          <li>Fabric composition</li>
          <li>Age of the stain</li>
          <li>Previous treatment attempts</li>
          <li>Exposure to heat or chemicals</li>
          <li>Dye instability</li>
        </ul>
        <p>
          Our team will always use the most suitable stain-treatment methods
          while prioritizing fabric safety.
        </p>
      </div>
    ),
  },
  {
    q: "What cleaning process does Blanqo follow?",
    a: (
      <div className="space-y-3">
        <p>Articles generally undergo the following stages:</p>
        <ol className="space-y-1 list-decimal list-inside ml-2">
          <li>Inspection and tagging</li>
          <li>Fabric and stain assessment</li>
          <li>Selection of appropriate cleaning method</li>
          <li>Cleaning and stain treatment</li>
          <li>Finishing and pressing</li>
          <li>Quality inspection</li>
          <li>Packaging</li>
          <li>Delivery</li>
        </ol>
        <p>
          The exact process may vary depending on the type of article and
          service requested.
        </p>
      </div>
    ),
  },
  {
    q: "Can I track the status of my order?",
    a: (
      <p>
        Yes. Customers receive updates regarding order status, processing,
        pickup, and delivery through SMS, WhatsApp, phone calls, or other
        communication channels. For any updates, customers may also contact
        our support team directly.
      </p>
    ),
  },
  {
    q: "What precautions should customers take before submitting garments?",
    a: (
      <div className="space-y-3">
        <p>Customers are requested to:</p>
        <ul className="space-y-1 list-disc list-inside ml-2">
          <li>Empty all pockets</li>
          <li>Remove cash, jewellery, valuables, and personal belongings</li>
          <li>Remove detachable accessories where possible</li>
          <li>
            Inform us about existing damage, repairs, delicate embellishments,
            or special care requirements
          </li>
          <li>Disclose the value of high-value garments where requested</li>
        </ul>
        <p>
          Blanqo shall not be responsible for loss or damage of items left
          inside garments or accessories.
        </p>
      </div>
    ),
  },
  {
    q: "What happens if a garment already has damage before cleaning?",
    a: (
      <div className="space-y-3">
        <p>Our team conducts a visual inspection of articles upon receipt.</p>
        <p>
          If visible defects such as tears, loose stitching, fabric wear,
          colour fading, missing embellishments, or prior damage are observed,
          they may be recorded and communicated to the customer.
        </p>
        <p>Certain hidden defects may not be apparent during inspection.</p>
      </div>
    ),
  },
  {
    q: "What happens if an item is lost or damaged during processing?",
    a: (
      <p>
        In the unlikely event of loss or damage attributable to our services,
        the matter will be assessed in accordance with our Terms & Conditions
        and compensation policy. Customers are encouraged to report any
        concerns immediately upon receipt of their order.
      </p>
    ),
  },
  {
    q: "What happens if garments are not collected or accepted on time?",
    a: (
      <p>
        Customers are requested to collect or accept delivery of their
        articles within the timelines communicated by Blanqo. Items remaining
        uncollected beyond the prescribed period may be subject to storage
        limitations and reduced liability in accordance with our Terms &
        Conditions.
      </p>
    ),
  },
  {
    q: "What payment methods are accepted?",
    a: (
      <div className="space-y-3">
        <p>Blanqo accepts various payment methods, including:</p>
        <ul className="space-y-1 list-disc list-inside ml-2">
          <li>Cash</li>
          <li>UPI</li>
          <li>Credit Cards</li>
          <li>Debit Cards</li>
          <li>Net Banking</li>
          <li>Digital Wallets</li>
          <li>Other approved payment methods</li>
        </ul>
        <p>
          Payment options may vary depending on location and service channel.
        </p>
      </div>
    ),
  },
  {
    q: "Does Blanqo offer memberships or prepaid packages?",
    a: (
      <p>
        Yes. Blanqo may offer membership plans, prepaid packages, loyalty
        programs, and promotional offers from time to time. The terms,
        validity period, benefits, and conditions applicable to such programs
        will be communicated separately.
      </p>
    ),
  },
  {
    q: "How is my personal information protected?",
    a: (
      <p>
        Blanqo takes reasonable measures to protect customer information from
        unauthorized access, disclosure, misuse, or loss. For more information
        regarding data collection, usage, and protection, please refer to our{" "}
        <Link to="/privacy" className="text-[#8a6f3e] underline hover:text-[#0b1c2c]">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#0b1c2c]/10">
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-7 flex items-start justify-between gap-6 text-left group"
      >
        <h3
          className="text-lg md:text-xl font-light text-[#0b1c2c] group-hover:text-[#8a6f3e] transition-colors leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {item.q}
        </h3>
        <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[#c9a96e]/40 flex items-center justify-center text-[#8a6f3e] group-hover:bg-[#c9a96e] group-hover:text-white transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-6 md:pb-8" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-[#4a5568] text-base leading-relaxed pr-14">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState(0);

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
              Help Center
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Frequently Asked{" "}
            <span className="italic text-[#c9a96e]">Questions</span>
          </h1>
          <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
            Everything you need to know about Blanqo's services, processes,
            and policies. Can't find what you're looking for? Reach out to our
            customer care team.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="divide-y divide-transparent">
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </div>

        <div className="mt-20 bg-[#f5f1ea] border border-[#c9a96e]/25 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Still have questions?
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-light text-[#0b1c2c] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Contact our <span className="italic text-[#8a6f3e]">customer care</span>
          </h2>
          <p className="text-[#4a5568] mb-8 max-w-2xl">
            Our customer care team is happy to assist you with bookings,
            service inquiries, order updates, feedback, and complaints.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:+917075551876"
              className="flex items-start gap-4 bg-white p-5 border border-transparent hover:border-[#c9a96e]/40 transition-colors group"
            >
              <Phone className="w-5 h-5 text-[#8a6f3e] mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e]">
                  Phone
                </p>
                <p className="text-[#0b1c2c] text-lg mt-1 group-hover:text-[#8a6f3e] transition-colors">
                  +91 70755 51876
                </p>
              </div>
            </a>
            <a
              href="mailto:hello@blanqo.in"
              className="flex items-start gap-4 bg-white p-5 border border-transparent hover:border-[#c9a96e]/40 transition-colors group"
            >
              <Mail className="w-5 h-5 text-[#8a6f3e] mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e]">
                  Email
                </p>
                <p className="text-[#0b1c2c] text-lg mt-1 group-hover:text-[#8a6f3e] transition-colors">
                  hello@blanqo.in
                </p>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-white p-5">
              <Clock className="w-5 h-5 text-[#8a6f3e] mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e]">
                  Business Hours
                </p>
                <p className="text-[#0b1c2c] mt-1">
                  Monday to Saturday
                  <br />
                  10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-5">
              <MapPin className="w-5 h-5 text-[#8a6f3e] mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e]">
                  Corporate Office
                </p>
                <p className="text-[#0b1c2c] mt-1 text-sm leading-relaxed">
                  RASA DYAD ENTERPRISES LLP (Blanqo)
                  <br />
                  #205, SMR Vinay Iconia Plaza, Botanical Garden Road,
                  Kondapur, Sri Maruthi Nagar Colony, Gachibowli,
                  Serilingampalle (M), Hyderabad, Telangana – 500019
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;
