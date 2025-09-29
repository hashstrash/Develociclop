
import { useWallet } from "@solana/wallet-adapter-react";
"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

import { GradientText } from "src/components/ui/shadcn-io/gradient-text/index.tsx";

<GradientText
  text="Smooth flowing gradients"
  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
/>;
export default function HeroMain() {
   
  
    const wallet = useWallet();
  // Se estiver conectado, não mostra nada
  if (wallet.connected) return (<div className="h-100 flex justify-center text-center "><h1>Hello</h1></div>);

  return (
    <div className="bg_mic min-w-screen flex items-center max-h-screen mb-0 justify-center shadow">
      <p className="text-center font-semibold text-gray-700">
      </p>
    </div>
  );
}