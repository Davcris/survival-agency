// Ruta exacta: survival-agency/app/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const clientName = searchParams.get('client') || 'Your Business';

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-center">
        We upgrade <span className="text-blue-500">{clientName}</span>'s Digital Presence
      </h1>
      <p className="text-xl mb-8 text-gray-300 text-center max-w-2xl">
        Your current website is losing you customers. We've built a modern, lightning-fast system for you. 
        Setup takes 24 hours. Price: $250 one-time fee.
      </p>
      <a 
        href="TU_LINK_DE_PAGO_O_CRYPTO_WALLET" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all"
      >
        Claim Your New System Now
      </a>
    </main>
  );
}