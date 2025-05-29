"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {  format } from "date-fns"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import Calendar from "react-calendar"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import {  BN, web3 } from "@coral-xyz/anchor"
import getProgram from "@/utils/solana"
import * as anchor from "@coral-xyz/anchor"
import { LAMPORTS_PER_SOL, sendAndConfirmRawTransaction } from "@solana/web3.js"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs"
// import axios from "axios"


const createContest = () => {
  // title, entry_fee, end_time, wallet
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date())
  const [entryFee, setEntryFee] = useState<number>(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false);
  const {wallet, publicKey, signTransaction} = useWallet();
  const {connection} = useConnection()

  
  const anchorWallet = {
    publicKey,
    signTransaction: wallet?.adapter.sendTransaction?.bind(wallet.adapter),
    signAllTransactions: async (txs: any[]) => {
      return Promise.all(txs.map(tx => wallet?.adapter.sendTransaction?.(tx, connection)));
    },
  } as anchor.Wallet;
  
 

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    if(!publicKey || !wallet){
      toast.error("Please connect your wallet first")
      return
    }
    
    if (!title.trim()) {
      toast.error("Please enter a title for your contest")
      return
    }

    if (!date) {
      toast.error("Please select a deadline for your contest")
      return
    }

    if(!entryFee || entryFee <= 0){
      toast.error("Please specify a valid entry fee")
      return
    }

    setIsSubmitting(true)
    
    try {
      const program = await getProgram(anchorWallet)
      
      const [createContestPDA] = await web3.PublicKey.findProgramAddress([Buffer.from("contest"), Buffer.from(title)], program.programId)
      const [contestVaultPDA] = await web3.PublicKey.findProgramAddress([Buffer.from("vault"), createContestPDA.toBuffer()], program.programId)
      
      // Convert date to Unix timestamp in seconds
      const unixTimestamp = Math.floor(date.getTime() / 1000)
      const entryFeeInLamport = parseFloat(entryFee.toString()) * LAMPORTS_PER_SOL
      
      const tx = await program
          .methods
          .createContest(title, new BN(unixTimestamp), new BN(entryFeeInLamport.toString()))
          .accounts({
              payer: publicKey,
              createContest: createContestPDA,
              contestVaultAccount: contestVaultPDA,
              systemProgram: web3.SystemProgram.programId
          })
          .transaction()

      tx.feePayer = publicKey;
      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      if (!signTransaction) {
        throw new Error("Wallet not connected");
      }

      const signedTx = await signTransaction(tx);
      const signature = await connection.sendRawTransaction(signedTx.serialize());
      
      // Wait for transaction confirmation using toast.promise
      await toast.promise(
        connection.confirmTransaction(signature, 'confirmed'),
        {
          loading: 'Creating your contest...',
          success: () => {
            // Reset form after successful confirmation
            setTitle("");
            setDate(new Date());
            setEntryFee(0);
            const entryFeeInput = document.querySelector('input[type="number"]') as HTMLInputElement;
            if (entryFeeInput) {
              entryFeeInput.value = "";
            }
            return 'Contest created successfully! 🎉';
          },
          error: 'Failed to create contest'
        }
      );
      
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Failed to create contest. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <>
      <SignedIn>
        <main className='min-h-screen bg-black text-white flex items-center justify-center'>
          <div className='container px-4 md:px-6 pt-24 pb-12'>
            <div className="max-w-2xl mx-auto">
              <Card className="glass border-gray-800 bg-black text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Create New Contest</CardTitle>
                  <CardDescription>Create a new yes/no contest for users to bet on</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="question">Title</Label>
                      <Input
                        id="question"
                        placeholder="E.g., Will BTC reach $100k this year?"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-900/50 border-gray-700"
                      />
                      <p className="text-sm text-gray-400">
                        Make sure your question has a clear yes/no answer and can be objectively verified.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Deadline</Label>
                      <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-gray-900/50 border-gray-700",
                              !date && "text-gray-400",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select deadline date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                          <Calendar
                            className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-80"
                            value={date}
                            onChange={(newDate) => {
                              if (newDate instanceof Date) {
                                setDate(newDate);
                                setShowCalendar(false);
                              }
                            }}
                            tileClassName={({ date: tileDate, view }) => {
                              if (view === 'month') {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                const isDisabled = tileDate < today;
                                
                                return cn(
                                  'text-white rounded-lg p-2 transition-colors',
                                  isDisabled 
                                    ? 'text-gray-600 bg-gray-800/50 cursor-not-allowed' 
                                    : 'hover:bg-gray-700 cursor-pointer'
                                );
                              }
                              return null;
                            }}
                            tileDisabled={({ date: tileDate }) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return tileDate < today;
                            }}
                            minDate={new Date()}
                            navigationLabel={({ date }) => 
                              format(date, 'MMMM yyyy')
                            }
                            prevLabel={<ChevronLeftIcon className="h-4 w-4" />}
                            nextLabel={<ChevronRightIcon className="h-4 w-4" />}
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-sm text-gray-400">The contest will automatically closed at specified date.</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Entry fee</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          step="0.1"
                          min="0.1"
                          placeholder="0.00"
                          className="bg-gray-900/50 border-gray-700 pr-12"
                          onChange={(e) => setEntryFee(parseFloat(e.target.value))}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                          SOL
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 my-4">Specify the entry fee for the contest to enter.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating contest...
                        </>
                      ) : (
                        "Create Contest"
                      )}
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
  )
}

export default createContest