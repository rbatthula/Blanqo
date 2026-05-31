// Global Blanqo configuration
// Update these values to change contact details across the site.
export const SITE_CONFIG = {
  whatsapp: {
    phone: "917075551876", // E.164 without '+'
    defaultMessage:
      "Hi Blanqo Team, I would like to know more about your services.",
    tooltip: "Chat with Blanqo",
    badge: "Chat with Us",
  },
};

export const buildWhatsAppUrl = (phone, message) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
