'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32">
      <h2 className="text-2xl font-bold text-tikno-gray-dark mb-4">¡Ups! Algo salió mal.</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Tuvimos un problema técnico inesperado. Nuestro equipo ya ha sido notificado (bueno, casi).
      </p>
      <Button onClick={() => reset()}>Intentar de nuevo</Button>
    </div>
  );
}
