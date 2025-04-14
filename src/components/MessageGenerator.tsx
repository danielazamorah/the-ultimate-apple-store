"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateAppleMessage } from "@/ai/flows/generate-apple-message-flow";

interface MessageGeneratorProps {
  appleCount: number;
}

export const MessageGenerator: React.FC<MessageGeneratorProps> = ({
  appleCount,
}) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { toast } = useToast();

  const generateMessage = async () => {
    try {
      const result = await generateAppleMessage({ appleCount: appleCount });
      setMessage(result.message);
      setShowMessage(true);
    } catch (error) {
      console.error("Error generating message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate message. Please try again.",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    toast({
      title: "Copied to clipboard!",
      description: "You can now share the message with your friend.",
    });
  };

  return (
    <div className="mt-4">
      <Button variant="default" onClick={generateMessage}>
        Buy Apples
      </Button>

      {showMessage && (
        <div className="mt-4">
          <p className="mb-2 text-sm">Copy your beautiful apple gift:</p>
          <div className="relative">
            <Textarea
              readOnly
              value={message}
              className="font-mono text-lg resize-none pr-10 w-full" // Added w-full
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="absolute top-2 right-2"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
