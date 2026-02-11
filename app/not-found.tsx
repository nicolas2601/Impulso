import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32">
      <h1 className="text-9xl font-black text-tikno-gray-light mb-4">404</h1>
      <h2 className="text-3xl font-bold text-tikno-gray-dark mb-6">Página no encontrada</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida. 
        Pero no te preocupes, en Tikno siempre encontramos una solución.
      </p>
      <div className="flex gap-4">
        <Button href="/">Volver al Inicio</Button>
        <Button variant="outline" href="/empaques">Ver Empaques</Button>
      </div>
    </div>
  );
}
