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
  const [emailMessage, setEmailMessage] = useState("");

  const generateMessage = () => {
    const appleEmojis = "🍎".repeat(appleCount);
    const newMessage = `Hola tu, here are ${appleCount} apples, just because. ${appleEmojis}`;
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

  const sendEmail = () => {
    setEmailMessage("Chill, this is my first web app, I haven't learned how to use mailto");
  };

  return (
    <div className="mt-4">
      <Button variant="default" onClick={generateMessage}>
        Send Apples to a Friend
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
          <p className="mt-2 text-sm">or send it by email</p>
          <Button
            variant="ghost"
            className="w-full justify-center"
            onClick={sendEmail}
          >
            Send in Email
          </Button>
          {emailMessage && <p className="text-green-500 mt-2">{emailMessage}</p>}
        </div>
      )}
    </div>
  );
};
