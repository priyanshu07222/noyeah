"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, CheckCircle, XCircle, Clock } from "lucide-react"
import { toast } from 'sonner'
import { SignedIn, SignedOut, RedirectToSignIn, UserProfile, useUser } from "@clerk/nextjs";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import getProgram from '@/utils/solana'

interface Bet {
  id: string;
  amount: number;
  choice: "yes" | "no";
  status: "win" | "lose" | "pending";
  date: string;
  reward: number | null;
}

export default function ProfilePage() {
  const { publicKey, wallet } = useWallet();
  const { connection } = useConnection();
  const { user } = useUser();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [userBets, setUserBets] = useState<Bet[]>([]);
  const [stats, setStats] = useState({
    totalBets: 0,
    winRate: 0,
    netProfit: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const anchorWallet = {
    publicKey,
    signTransaction: wallet?.adapter.sendTransaction?.bind(wallet.adapter),
    signAllTransactions: async (txs: any[]) => {
      return Promise.all(txs.map(tx => wallet?.adapter.sendTransaction?.(tx, connection)));
    },
  } as anchor.Wallet;

  useEffect(() => {
    if (publicKey) {
      setWalletAddress(publicKey.toBase58());
    }
  }, [publicKey]);

  useEffect(() => {
    const fetchUserBets = async () => {
      if (!publicKey || !connection) return;
      
      try {
        setIsLoading(true);
        
        // Initialize the program
        // const provider = new AnchorProvider(connection, window.solana, {});
        // const programId = new PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!);
        const program = await getProgram(anchorWallet);

        // Fetch all bets for the user
        // @ts-ignore
        const userBetsAccounts = await program.account.participantState.all();

        console.log(userBetsAccounts);

        // Transform the on-chain data to our Bet interface
        const bets: Bet[] = userBetsAccounts.map((account: any) => {
          const betData = account.account;
          return {
            id: account.publicKey.toBase58(),
            // question: betData.question,
            amount: betData.amount.toNumber() / 1e9, // Convert lamports to SOL
            choice: betData.choice ? "yes" : "no",
            status: getBetStatus(betData),
            date: new Date(betData.timestamp.toNumber() * 1000).toISOString().split('T')[0],
            reward: betData.reward ? betData.reward.toNumber() / 1e9 : null,
          };
        });

        setUserBets(bets);
        
        // Calculate stats
        const totalBets = bets.length;
        const wins = bets.filter(bet => bet.status === 'win').length;
        const winRate = totalBets > 0 ? (wins / totalBets) * 100 : 0;
        const netProfit = bets.reduce((acc, bet) => {
          if (bet.status === 'win') return acc + (bet.reward || 0);
          if (bet.status === 'lose') return acc - bet.amount;
          return acc;
        }, 0);

        setStats({
          totalBets,
          winRate,
          netProfit
        });
      } catch (error) {
        console.error('Error fetching user bets:', error);
        toast.error('Failed to load betting history');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBets();
  }, [publicKey, connection]);

  const getBetStatus = (betData: any): "win" | "lose" | "pending" => {
    if (!betData.isResolved) return "pending";
    return betData.isWinner ? "win" : "lose";
  };

  const copyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toBase58())
      toast("Address Copied")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "win":
        return (
          <Badge className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            Win
          </Badge>
        )
      case "lose":
        return (
          <Badge className="bg-red-600 hover:bg-red-700">
            <XCircle className="h-3 w-3 mr-1" />
            Lose
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="border-yellow-600 text-yellow-500">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <>
      <SignedIn>
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 top-10">
          <div className="container mx-auto px-4 py-24">
            <div className="">
              {/* Wallet and Betting Info */}
              <div className="space-y-8 w-full my-10">
                <Card className="glass border-gray-800 bg-black text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">Wallet & Stats</CardTitle>
                    <CardDescription>Your wallet and betting information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-400">Wallet Address</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-sm font-mono break-all">{walletAddress || "Connect Wallet"}</span>
                            <button onClick={copyAddress} className="ml-2 p-1 rounded-md hover:bg-gray-800 flex-shrink-0">
                              <Copy className="h-4 w-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                          <div className="bg-gray-900 p-3 md:p-4 rounded-lg text-center">
                            <p className="text-sm text-gray-400">Total Bets</p>
                            <p className="text-xl md:text-2xl font-bold">{stats.totalBets}</p>
                          </div>
                          <div className="bg-gray-900 p-3 md:p-4 rounded-lg text-center">
                            <p className="text-sm text-gray-400">Win Rate</p>
                            <p className="text-xl md:text-2xl font-bold">{stats.winRate.toFixed(1)}%</p>
                          </div>
                          <div className="bg-gray-900 p-3 md:p-4 rounded-lg text-center">
                            <p className="text-sm text-gray-400">Net Profit</p>
                            <p className="text-xl md:text-2xl font-bold text-green-500">
                              {stats.netProfit >= 0 ? '+' : ''}{stats.netProfit.toFixed(2)} SOL
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8 bg-gray-800">
                    <TabsTrigger value="all">All Bets</TabsTrigger>
                    <TabsTrigger value="wins">Wins</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-0">
                    <Card className="glass border-gray-800 bg-black text-white">
                      <CardHeader>
                        <CardTitle>Betting History</CardTitle>
                        <CardDescription>View all your past bets and their outcomes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isLoading ? (
                          <div className="text-center py-8">Loading betting history...</div>
                        ) : userBets.length === 0 ? (
                          <div className="text-center py-8 text-gray-400">No betting history found</div>
                        ) : (
                          <div className="grid gap-4">
                            {userBets.map((bet) => (
                              <div
                                key={bet.id}
                                className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                              >
                                <div className="grid gap-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="font-medium break-words">{bet.question}</h3>
                                    {getStatusBadge(bet.status)}
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    <span>Bet {bet.amount} SOL on </span>
                                    <span className={bet.choice === "yes" ? "text-green-500" : "text-red-500"}>
                                      {bet.choice}
                                    </span>
                                    <span> • {bet.date}</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  {bet.status === "win" && <div className="text-green-500 font-bold">+{bet.reward} SOL</div>}
                                  {bet.status === "lose" && <div className="text-red-500 font-bold">-{bet.amount} SOL</div>}
                                  {bet.status === "pending" && <div className="text-yellow-500 font-bold">Pending</div>}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="wins" className="mt-0">
                    <Card className="glass border-gray-800 bg-black text-white">
                      <CardHeader>
                        <CardTitle>Winning Bets</CardTitle>
                        <CardDescription>View all your winning bets</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isLoading ? (
                          <div className="text-center py-8">Loading winning bets...</div>
                        ) : userBets.filter(bet => bet.status === 'win').length === 0 ? (
                          <div className="text-center py-8 text-gray-400">No winning bets found</div>
                        ) : (
                          <div className="grid gap-4">
                            {userBets
                              .filter((bet) => bet.status === "win")
                              .map((bet) => (
                                <div
                                  key={bet.id}
                                  className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                                >
                                  <div className="grid gap-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <h3 className="font-medium break-words">{bet.question}</h3>
                                      {getStatusBadge(bet.status)}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      <span>Bet {bet.amount} SOL on </span>
                                      <span className={bet.choice === "yes" ? "text-green-500" : "text-red-500"}>
                                        {bet.choice}
                                      </span>
                                      <span> • {bet.date}</span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-green-500 font-bold">+{bet.reward} SOL</div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="pending" className="mt-0">
                    <Card className="glass border-gray-800 bg-black text-white">
                      <CardHeader>
                        <CardTitle>Pending Bets</CardTitle>
                        <CardDescription>View all your pending bets</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isLoading ? (
                          <div className="text-center py-8">Loading pending bets...</div>
                        ) : userBets.filter(bet => bet.status === 'pending').length === 0 ? (
                          <div className="text-center py-8 text-gray-400">No pending bets found</div>
                        ) : (
                          <div className="grid gap-4">
                            {userBets
                              .filter((bet) => bet.status === "pending")
                              .map((bet) => (
                                <div
                                  key={bet.id}
                                  className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                                >
                                  <div className="grid gap-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <h3 className="font-medium break-words">{bet.question}</h3>
                                      {getStatusBadge(bet.status)}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      <span>Bet {bet.amount} SOL on </span>
                                      <span className={bet.choice === "yes" ? "text-green-500" : "text-red-500"}>
                                        {bet.choice}
                                      </span>
                                      <span> • {bet.date}</span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-yellow-500 font-bold">Pending</div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Clerk User Profile */}
                <div className="w-full">
                  <Card className="glass border-gray-800 bg-black text-white">
                    <CardHeader>
                      <CardTitle className="text-2xl">Account Settings</CardTitle>
                      <CardDescription>Manage your account details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="">
                        <div className="">
                          <UserProfile appearance={{
                            elements: {
                              rootBox: "w-1/2",
                              card: "w-1/2",
                              navbar: "w-1/2",
                              pageScrollBox: "w-full",
                            },
                          }} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
