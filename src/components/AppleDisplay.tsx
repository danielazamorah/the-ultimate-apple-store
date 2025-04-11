import { Circle } from "lucide-react";

interface AppleDisplayProps {
  appleCount: number;
}

export const AppleDisplay: React.FC<AppleDisplayProps> = ({ appleCount }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      {Array.from({ length: appleCount }, (_, index) => (
        <Circle key={index} className="w-8 h-8 text-red-500" fill="red" stroke="black" strokeWidth="2px" />
      ))}
    </div>
  );
};
