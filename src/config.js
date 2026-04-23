// Centralized configuration from environment variables
// These are injected at build time via Vite's define option

const AppConfig = __APP_CONFIG__;

export const config = {
  // WhatsApp
  whatsappNumber: AppConfig.whatsappNumber,

  // Site
  siteName: AppConfig.siteName,

  // Contact
  contactEmail: AppConfig.contactEmail,

  // Helper to build WhatsApp URL
  getWhatsAppUrl: (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${AppConfig.whatsappNumber}?text=${encodedMessage}`;
  },
};

export default config;
