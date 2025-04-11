"use client";

import { Button } from "@/components/ui/button";

interface AppleCounterProps {
  appleCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const AppleCounter: React.FC<AppleCounterProps> = ({
  appleCount,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      <Button variant="outline" onClick={onDecrement}>
        -
      </Button>
      <span className="font-mono text-lg">{appleCount} Apples</span>
      <Button variant="outline" onClick={onIncrement}>
        +
      </Button>
    </div>
  );
};
