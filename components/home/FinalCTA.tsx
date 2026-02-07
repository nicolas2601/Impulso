'use client';

import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-tikno-yellow text-tikno-gray-dark">
      <div className="container-tikno text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          ¿Listo para hacer crecer tu negocio?
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto font-medium">
          Deja de postergar la imagen de tu marca. Hablemos hoy mismo y empecemos.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <WhatsAppButton 
            className="bg-tikno-gray-dark text-white hover:bg-black text-lg px-10 py-5 shadow-xl"
            label="Iniciar mi proyecto ahora"
            message="Hola Tikno, estoy listo para mejorar la imagen de mi negocio..."
          />
          
          <div className="text-sm font-semibold opacity-75">
            <p>📍 Bucaramanga, Santander</p>
            <p>🕒 Lun-Vie: 8am - 6pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};
