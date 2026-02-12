import { CONTACT_INFO } from '../constants/info';

export const generateWhatsAppLink = (message: string): string => {
  const phone = CONTACT_INFO.whatsapp.replace(/\D/g, ''); // Remove non-numeric chars
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const getProductInquiryMessage = (productName: string): string => {
  return `Hola Impulso, vi ${productName} en la web y quiero cotizar...`;
};
