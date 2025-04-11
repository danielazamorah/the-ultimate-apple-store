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

  const sendEmail = () => {
    const subject = "A Gift of Apples!";
    const body = message;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="mt-4">
      <Button variant="default" onClick={generateMessage}>
        Send Apples to a Friend
      </Button>

      {showMessage && (
        <div className="mt-4 relative">
          <p className="mb-2">Copy your beautiful apple gift:</p>
          <Textarea
            readOnly
            value={message}
            className="font-mono text-lg resize-none"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p>or send it by email</p>
          <Button
              variant="ghost"
              size="icon"
              onClick={sendEmail}
            >
              <span className="sr-only">Send in Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <path d="M22 7.47a24.15 24.15 0 0 1 0 9.06 1.39 1.39 0 0 1-1.12.71H3.12A1.39 1.39 0 0 1 2 16.53a24.15 24.15 0 0 1 0-9.06 1.39 1.39 0 0 1 1.12-.71h17.77A1.39 1.39 0 0 1 22 7.47Z" />
                <path d="M2 7.47 12 12 22 7.47" />
              </svg>
            </Button>
        </div>
      )}
    </div>
  );
};
