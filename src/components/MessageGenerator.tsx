"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MessageGeneratorProps {
  appleCount: number;
}

export const MessageGenerator: React.FC<MessageGeneratorProps> = ({
  appleCount,
}) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { toast } = useToast();

  const generateMessage = () => {
    const newMessage = `Hola tu, here are ${appleCount} apples, just because.`;
    setMessage(newMessage);
    setShowMessage(true);
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
        Send Apples to a Friend
      </Button>

      {showMessage && (
        <div className="mt-4 relative">
          <Textarea
            readOnly
            value={message}
            className="font-mono text-lg resize-none"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
