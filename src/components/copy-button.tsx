"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, Copy } from "lucide-react";

type CopyButtonProps = {
  textToCopy: string;
};

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The contract address is now in your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Error",
        description: "Failed to copy address.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={handleCopy} size="lg" className="w-full bg-black/30 backdrop-blur-sm border border-amber-500 text-white font-bold transform transition-transform duration-300 hover:scale-105 hover:bg-black/50 rounded-lg">
      {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
      {isCopied ? 'Copied!' : 'Copy Address'}
    </Button>
  );
}
