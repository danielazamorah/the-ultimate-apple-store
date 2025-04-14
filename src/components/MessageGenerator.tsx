"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateAppleMessage } from "@/ai/flows/generate-apple-message-flow";

interface MessageGeneratorProps {
  appleCount: number;
}

export const MessageGenerator: React.FC<MessageGeneratorProps> = ({
  appleCount,
}) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Buy apples");

  const generateMessage = async () => {
    try {
      const result = await generateAppleMessage({ appleCount: appleCount });
      setMessage(result.message);
      setShowMessage(true);
      setButtonText("Get more support, I guess.");
    } catch (error) {
      console.error("Error generating message:", error);
      setMessage("Error generating apple message.");
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <Button variant="default" onClick={generateMessage}>
        {buttonText}
      </Button>

      {showMessage && (
        <div className="mt-4 flex flex-col items-center">
          <p className="mb-2 text-sm">🙋🏽‍♀️ (🍎 specialist):</p>
          <div className="relative w-full max-w-md">
            <Textarea
              readOnly
              value={message}
              className="font-mono text-lg resize-none w-full h-64"
            />
          </div>
        </div>
      )}
    </div>
  );
};

