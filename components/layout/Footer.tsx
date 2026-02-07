import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { CONTACT_INFO } from '@/constants/info';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tikno-gray-dark text-white pt-16 pb-8">
      <div className="container-tikno grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <span className="text-2xl font-black tracking-tighter mb-6 block">
            TIKNO<span className="text-tikno-yellow">.</span>
          </span>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Especialistas en producción gráfica y señalética comercial en Bucaramanga. 
            Ayudamos a negocios a verse profesionales y vender más.
          </p>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.social.instagram} className="text-gray-400 hover:text-tikno-yellow transition-colors"><FaInstagram size={24} /></a>
            <a href={CONTACT_INFO.social.facebook} className="text-gray-400 hover:text-tikno-yellow transition-colors"><FaFacebook size={24} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-6">Servicios</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/empaques" className="hover:text-white transition-colors">Empaques Personalizados</Link></li>
            <li><Link href="/avisos" className="hover:text-white transition-colors">Avisos Luminosos</Link></li>
            <li><Link href="/papeleria-comercial" className="hover:text-white transition-colors">Papelería Comercial</Link></li>
            <li><Link href="/kits-emprendedor-publicidad" className="hover:text-white transition-colors">Kits Emprendedor</Link></li>
            <li><Link href="/impresion" className="hover:text-white transition-colors">Impresión Digital</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contacto</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-tikno-yellow" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-tikno-yellow" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-tikno-yellow" />
              <span>{CONTACT_INFO.whatsapp}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-tikno-yellow" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>

        {/* Legal/Schedule */}
        <div>
          <h4 className="font-bold text-lg mb-6">Atención</h4>
          <p className="text-gray-400 text-sm mb-6">{CONTACT_INFO.schedule}</p>
          <div className="text-xs text-gray-500">
            <Link href="/privacidad" className="hover:text-white transition-colors mr-4">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>

      <div className="container-tikno pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
        <p>&copy; {currentYear} Tikno. Todos los derechos reservados. Desarrollado en Bucaramanga.</p>
      </div>
    </footer>
  );
};
