
import LottieAnimation from '@/src/components/LottieAnimation';
import animationData from '../../public/Confetti.json'; // Ton animation JSON téléchargée
import Commencer from '@/src/components/accueil/Commencer';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Home, XCircle } from 'lucide-react';


export default function Win()
{
    return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Alors VOUS ATTENDEZ QUOI? faites vos lacets 😉!
          </h1>
        </div>
      </div>
    </div>
    );
}