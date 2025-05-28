"use client"

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import * as anchor from "@coral-xyz/anchor";
import getProgram from "@/utils/solana";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

interface Props {
  params: {
    id: string;
  };
}

export default function BidPageClient({ params }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bidAmount, setBidAmount] = useState<number>(0);
  const { wallet, publicKey } = useWallet();
  const { connection } = useConnection();

  const anchorWallet = {
    publicKey,
    signTransaction: wallet?.adapter.sendTransaction?.bind(wallet.adapter),
    signAllTransactions: async (txs: any[]) => {
      return Promise.all(txs.map(tx => wallet?.adapter.sendTransaction?.(tx, connection)));
    },
  } as anchor.Wallet;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey || !wallet) {
      toast.error("Please connect your wallet first");
      return;
    }

    if (!bidAmount || bidAmount <= 0) {
      toast.error("Please enter a valid bid amount");
      return;
    }

    setIsSubmitting(true);

    try {
      const program = await getProgram(anchorWallet);
      // Add your bid transaction logic here
      
      await toast.promise(
        Promise.resolve(), // Replace with actual transaction
        {
          loading: 'Placing your bid...',
          success: () => {
            setBidAmount(0);
            const bidInput = document.querySelector('input[type="number"]') as HTMLInputElement;
            if (bidInput) {
              bidInput.value = "";
            }
            return 'Bid placed successfully! 🎉';
          },
          error: 'Failed to place bid'
        }
      );

    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Failed to place bid. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SignedIn>
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="container px-4 md:px-6 pt-24 pb-12">
            <div className="max-w-2xl mx-auto">
              <Card className={cn(
                "glass border-gray-800 bg-black text-white transition-all duration-300",
                isSubmitting && "opacity-50 pointer-events-none"
              )}>
                <CardHeader>
                  <CardTitle className="text-2xl">Place Your Bid</CardTitle>
                  <CardDescription>Bid on contest: {params.id}</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Bid Amount</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          step="0.1"
                          min="0.1"
                          placeholder="0.00"
                          className="bg-gray-900/50 border-gray-700 pr-12"
                          onChange={(e) => setBidAmount(parseFloat(e.target.value))}
                          disabled={isSubmitting}
                          value={bidAmount || ""}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                          SOL
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 my-4">Enter the amount you want to bid.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className={cn(
                        "w-full relative overflow-hidden transition-all duration-300",
                        isSubmitting 
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90"
                      )}
                      disabled={isSubmitting}
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20",
                        isSubmitting && "animate-pulse"
                      )} />
                      <span className="relative">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block" />
                            Placing bid...
                          </>
                        ) : (
                          "Place Bid"
                        )}
                      </span>
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
} 