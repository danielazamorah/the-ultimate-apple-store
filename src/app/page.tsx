"use client";

import { useState } from "react";
import { AppleCounter } from "@/components/AppleCounter";
import { AppleDisplay } from "@/components/AppleDisplay";
import { MessageGenerator } from "@/components/MessageGenerator";

export default function Home() {
  const [appleCount, setAppleCount] = useState(0);

  const handleIncrement = () => {
    setAppleCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (appleCount > 0) {
      setAppleCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <h1 className="font-mono text-2xl mb-4">Apple Gifter</h1>

      <AppleDisplay appleCount={appleCount} />

      <AppleCounter
        appleCount={appleCount}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <MessageGenerator appleCount={appleCount} />

      <footer className="mt-8 font-mono text-sm">
        by danielazamorah, creator @ morabalbs
      </footer>
    </main>
  );
}
