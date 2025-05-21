"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
// import { useToast } from "@/components/ui/use-toast"
import { toast } from "sonner";
import { CheckCircle, XCircle, Loader2, AlertCircle, Wallet } from "lucide-react"
// import { Confetti } from "@/components/confetti"
import { Progress } from "@/components/ui/progress"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import * as anchor from "@coral-xyz/anchor"
import getProgram from "@/utils/solana"


export function PlaceBetModal({ isOpen, onClose, contest, choice }: any) {
  const [step, setStep] = useState(1) // 1: Confirm, 2: Connect Wallet, 3: Sign Transaction, 4: Success
  const [isProcessing, setIsProcessing] = useState(false)
  const [txnSig, setTxnSig] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const {wallet, publicKey, signTransaction} = useWallet()
  const {connection} = useConnection();

  const anchorWallet = {
    publicKey,
    signTransaction: wallet?.adapter.sendTransaction?.bind(wallet.adapter),
    signAllTransactions: async (txs: any[]) => {
      return Promise.all(txs.map(tx => wallet?.adapter.sendTransaction?.(tx, connection)));
    },
  } as anchor.Wallet;

  const handleConfirm = async() => {
    setStep(2)
  }

  // const handleConnectWallet = () => {
  //   setIsProcessing(true)

  //   // Simulate wallet connection
  //   setTimeout(() => {
  //     setIsProcessing(false)
  //     setStep(3)

  //     toast(
  //      "Your wallet has been connected successfully.",
  //     )
  //   }, 1500)
  // }

  const handleSignTransaction = async() => {
    if (!publicKey) return;
    
    const program = await getProgram(anchorWallet);

    const [contestPda] = await anchor.web3.PublicKey.findProgramAddress([Buffer.from("contest"), Buffer.from(contest.question)], program.programId);
    const [contestVaultPda] = await anchor.web3.PublicKey.findProgramAddress([Buffer.from("vault"), contestPda.toBuffer()], program.programId);
    const [participantPda] = await anchor.web3.PublicKey.
      findProgramAddress(
        [Buffer.from("bid"), 
          publicKey.toBuffer(), 
          contestPda.toBuffer()],
        program.programId
      )
    
    let entryFee;
    let option;

    if (choice === "yes") {
      entryFee = new anchor.BN(contest.yesParticipationFee + 1000000000)
      option = {yes: {}}
    } else if (choice === "no"){
      entryFee = new anchor.BN(contest.noParticipationFee + 1000000000)
      option = {no: {}}
    }
    console.log("contest", contest.yesParticipationFee)
    console.log("entryFee", entryFee)
    console.log("option", option)
    const participateCont = await program.methods.participateContest(entryFee, option).accounts({
      payer: publicKey,
      participantAccount: participantPda,
      contestAccount: contestPda,
      contestVault: contestVaultPda,
      systemProgram: anchor.web3.SystemProgram.programId
    }).transaction()

    participateCont.feePayer = publicKey;
    participateCont.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;


    if (!signTransaction) {
      throw new Error("Wallet not connected");
    }

    try {
      const signedTx = await signTransaction(participateCont);
      const signature = await connection.sendRawTransaction(signedTx.serialize());
      await connection.confirmTransaction(signature, 'confirmed');
      setTxnSig(signature)
      console.log("participatin", signature)
      toast(`You bet ${contest.participationFee} SOL on "${choice}" for "${contest.question}"`)
      setStep(3)
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Failed to create contest. Please try again.");
    }
  }

  const calculatePotentialWin = () => {
    // Simple calculation for demonstration
    // In a real app, this would be based on the odds and pool size
    return (contest.participationFee * 1.9).toFixed(2)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="grid gap-6 py-4">
              <div className="space-y-2">
                <Label>Contest</Label>
                <div className="p-3 rounded-lg bg-gray-900/50 text-sm">{contest?.question}</div>
              </div>

              <div className="space-y-2">
                <Label>Your Prediction</Label>
                <div className="flex items-center p-3 rounded-lg bg-gray-900/50">
                  {choice === "yes" ? (
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Yes</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-500">
                      <XCircle className="h-5 w-5 mr-2" />
                      <span>No</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Contest Details</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-gray-900/50">
                    <div className="text-sm text-gray-400">Entry Fee</div>
                    <div className="font-bold">{contest.yesParticipationFee.toFixed(2)} SOL</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900/50">
                    <div className="text-sm text-gray-400">Total Pool</div>
                    <div className="font-bold">{contest.totalPool.toFixed(2)} SOL</div>
                  </div>
                </div>
              </div>

              {/* <div className="p-3 rounded-lg bg-gray-900/50">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Potential Win</span>
                  <span className="font-bold text-green-500">{calculatePotentialWin()} SOL</span>
                </div>
                <div className="text-xs text-gray-500">*Final payout depends on the final distribution of bets</div>
              </div> */}
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} className="border-gray-700 bg-black">
                Cancel
              </Button>
              <Button
                type="button"
                className="bg-gradient-to-r from-green-600 to-gray-700 text-white hover:opacity-90"
                onClick={handleConfirm}
              >
                Confirm & Continue
              </Button>
            </DialogFooter>
          </>
        )

      // case 2:
      //   return (
      //     <>
      //       <div className="grid gap-6 py-4">
      //         <div className="flex flex-col items-center justify-center py-6">
      //           <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
      //             <Wallet className="h-8 w-8 text-purple-500" />
      //           </div>
      //           <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
      //           <p className="text-gray-400 text-center mb-6">
      //             Connect your Solana wallet to place your bet on this contest
      //           </p>

      //           {/* <Button
      //             className="w-full bg-gradient-to-r from-purple-600 to-gray-700 text-white hover:opacity-90"
      //             onClick={handleConnectWallet}
      //             disabled={isProcessing}
      //           >
      //             {isProcessing ? (
      //               <>
      //                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      //                 Connecting...
      //               </>
      //             ) : (
      //               "Connect Wallet"
      //             )}
      //           </Button> */}
      //           <WalletMultiButton style={{
      //             backgroundColor: "#fff",
      //             color: "black", 
      //             borderRadius: "10px",
      //             padding: "12px 24px",
      //             fontSize: "16px",
      //             display: "flex",
      //             alignItems: "center",
      //             justifyContent: "center",
      //             cursor: "pointer",
      //             zIndex: 999,
      //             position: "relative"
      //           }}
      //           className="!bg-white !text-black hover:!opacity-90 w-full z-50"
      //           />
      //         </div>

      //         <div className="text-xs text-gray-500 text-center">
      //           By connecting your wallet, you agree to our Terms of Service and Privacy Policy
      //         </div>
      //       </div>

      //       <DialogFooter>
      //         <Button
      //           type="button"
      //           variant="outline"
      //           onClick={() => setStep(1)}
      //           className="border-gray-700 bg-black"
      //           disabled={isProcessing}
      //         >
      //           Back
      //         </Button>
      //       </DialogFooter>
      //     </>
      //   )

      case 2:
        return (
          <>
            <div className="grid gap-6 py-4">
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <AlertCircle className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Transaction</h3>
                <p className="text-gray-400 text-center mb-6">
                  Please review and sign the transaction in your wallet to place your bet
                </p>

                <div className="w-full p-4 rounded-lg bg-gray-900/50 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Wallet</span>
                    <span className="font-mono">7x2D...9fA3</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Amount</span>
                    <span>{contest.yesParticipationFee.toFixed(2)} SOL</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Network Fee</span>
                    <span>0.000005 SOL</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-800">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">{(contest.yesParticipationFee + 0.000005).toFixed(6)} SOL</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-gray-700 text-white hover:opacity-90"
                  onClick={handleSignTransaction}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Sign & Submit"
                  )}
                </Button>
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="border-gray-700 bg-black"
                disabled={isProcessing}
              >
                Back
              </Button>
            </DialogFooter>
          </>
        )

      case 3:
        return (
          <>
            <div className="grid gap-6 py-4">
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bet Placed Successfully!</h3>
                <p className="text-gray-400 text-center mb-6">
                  Your bet has been placed and confirmed on the blockchain
                </p>

                <div className="w-full p-4 rounded-lg bg-gray-900/50 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Contest</span>
                    <span className="text-right max-w-[200px] truncate">{contest.question}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Your Prediction</span>
                    <span className={choice === "yes" ? "text-green-500" : "text-red-500"}>
                      {choice === "yes" ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Amount</span>
                    <span>{contest.yesParticipationFee.toFixed(2)} SOL</span>
                  </div>
                  {/* <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Potential Win</span>
                    <span className="text-green-500">{calculatePotentialWin()} SOL</span>
                  </div> */}
                  <div className="flex justify-between pt-2 border-t border-gray-800">
                    <span className="font-bold">Transaction ID</span>
                    <span className="font-mono text-xs">{txnSig}</span>
                  </div>
                </div>

                <Button className="w-full bg-black" variant="outline" onClick={onClose}>
                  View All Contests
                </Button>
              </div>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="glass border border-gray-800 sm:max-w-md bg-black text-white">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {step === 1 && "Place Your Bet"}
              {step === 2 && "Sign Transaction"}
              {step === 3 && "Bet Confirmed"}
            </DialogTitle>

            {step < 3 && (
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Confirm</span>
                  {/* <span>Connect</span> */}
                  <span>Sign</span>
                  <span>Complete</span>
                </div>
                <Progress value={step * 25} className="h-1 bg-gray-400">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-gray-500 rounded-full"
                    style={{ width: `${step * 33}%` }}
                  />
                </Progress>
              </div>
            )}
          </DialogHeader>

          {renderStepContent()}
        </DialogContent>
      </Dialog>

      {/* {showConfetti &&  />} */}
    </>
  )
}
