"use client";

import { useState } from "react";
import { generateAppleMessage } from "@/ai/flows/generate-apple-message-flow";

interface MessageGeneratorProps {
  appleCount: number;
}

export const MessageGenerator: React.FC<MessageGeneratorProps> = ({
  appleCount,
}) => {  
  
  const {Button} = require("@/components/ui/button")
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Get support from one of our specialists (👩🏽‍💻)");

  const generateMessage = async () => {
    try {
      const result = await generateAppleMessage({ appleCount: appleCount });
      setMessage(result.message);
      setShowMessage(true);
      setButtonText("Get more support, I guess");
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
        <div className="mt-4 w-full max-w-md text-left">
            <p className="text-sm opacity-70 mb-2 ">
                🙆🏽‍♀️ (🍎 specialist):
            </p>
            <p className="font-mono text-base">{message}</p>
        </div>
      )}
    </div>
  ); 
};
