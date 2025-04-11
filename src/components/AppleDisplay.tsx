"use client";

interface AppleDisplayProps {
  appleCount: number;
}

export const AppleDisplay: React.FC<AppleDisplayProps> = ({ appleCount }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      {Array.from({ length: appleCount }, (_, index) => (
        <span key={index} className="text-red-500 text-2xl" aria-label="apple" role="img">🍎</span>
      ))}
    </div>
  );
};

