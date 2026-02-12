'use client';

import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { CONTACT_INFO } from '@/constants/info';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export const MassiveFooter = () => {
  return (
    <section className="relative bg-impulso-yellow pt-32 pb-20 overflow-hidden text-zinc-900">
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>

      <div className="container-impulso relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-bold text-lg md:text-xl uppercase tracking-widest mb-4 block">
            ¿Listo para empezar?
          </span>
          <h2 className="text-[12vw] font-black leading-[0.85] tracking-tighter mb-12 mix-blend-multiply">
            HAGAMOS <br/> HISTORIA.
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.a
            href={generateWhatsAppLink("Hola Impulso, estoy listo para iniciar...")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-6 bg-black text-white rounded-full font-black text-xl md:text-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaWhatsapp /> INICIAR PROYECTO
            </span>
            <div className="absolute inset-0 bg-zinc-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </motion.a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-black/10 pt-12">
           <div>
             <h4 className="font-black text-xl mb-4">UBICACIÓN</h4>
             <p className="font-medium text-zinc-800">Bucaramanga, Santander<br/>Colombia</p>
           </div>
           <div>
             <h4 className="font-black text-xl mb-4">CONTACTO</h4>
             <p className="font-medium text-zinc-800">{CONTACT_INFO.email}<br/>{CONTACT_INFO.displayPhone}</p>
           </div>
           <div>
             <h4 className="font-black text-xl mb-4">SOCIAL</h4>
             <div className="flex gap-4 font-medium text-zinc-800">
               <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
             </div>
           </div>
        </div>
        
        <div className="mt-20 text-xs font-bold opacity-40 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 IMPULSO. TODOS LOS DERECHOS RESERVADOS.</div>
          <div className="flex gap-2 items-center">
            CREADO POR <a href="https://nicolasmoreno.site" target="_blank" rel="dofollow" className="hover:text-white transition-colors underline decoration-black/20 underline-offset-4">NICOLAS MORENO</a> 
            <span>•</span> 
            UNA PRODUCCIÓN DE <a href="https://impulsopublicidad.pro" target="_blank" rel="dofollow" className="hover:text-white transition-colors underline decoration-black/20 underline-offset-4">TIKNO.PRO</a>
          </div>
        </div>
      </div>
    </section>
  );
};
