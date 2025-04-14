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
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4 relative">
      <h1 className="font-mono text-3xl font-bold mb-4">the ultimate 🍎-store</h1>

      <AppleDisplay appleCount={appleCount} />

      <AppleCounter
        appleCount={appleCount}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <MessageGenerator appleCount={appleCount} />

      <footer className="absolute bottom-2 right-2 font-mono text-xs">
        by <a href="https://www.linkedin.com/in/danielazamorah/" target="_blank" rel="noopener noreferrer" className="underline text-primary">@danielazamorah</a>
      </footer>
    </main>
  );
}
