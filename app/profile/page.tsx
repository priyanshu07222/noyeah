"use client"
import React from 'react'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, CheckCircle, XCircle, Clock } from "lucide-react"
import { toast } from 'sonner'

const pastBets = [
    {
      id: "1",
      question: "Will Virat Kohli score 100 runs today?",
      amount: 2.5,
      choice: "yes",
      status: "win",
      date: "2023-04-20",
      reward: 4.75,
    },
    {
      id: "2",
      question: "Will SOL price exceed $150 by end of March?",
      amount: 5.0,
      choice: "no",
      status: "lose",
      date: "2023-03-31",
      reward: 0,
    },
    {
      id: "3",
      question: "Will the new crypto bill pass this quarter?",
      amount: 1.2,
      choice: "yes",
      status: "pending",
      date: "2023-04-25",
      reward: null,
    },
    {
      id: "4",
      question: "Will BTC reach $100k this year?",
      amount: 3.0,
      choice: "yes",
      status: "pending",
      date: "2023-04-22",
      reward: null,
    },
    {
      id: "5",
      question: "Will ETH merge happen in June?",
      amount: 2.0,
      choice: "no",
      status: "win",
      date: "2023-04-15",
      reward: 3.8,
    },
  ]

 const profile = () => {
    const [walletAddress] = useState("7x2D...9fA3")
  
    const copyAddress = () => {
      // In a real app, this would copy the full address
      navigator.clipboard.writeText("7x2D...9fA3")
      toast(
    "Address Copied",
)
    }
  
    const getStatusBadge = (status:any) => {
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
      <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
        {/* <Navbar /> */}
        <div className="container px-4 md:px-6 pt-24 pb-12">
          <div className="grid gap-8">
            <Card className="glass border-gray-200 bg-black text-white ">
              <CardHeader>
                <CardTitle className="text-2xl">Profile</CardTitle>
                <CardDescription>Your wallet and betting information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Wallet Address</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-lg font-mono">{walletAddress}</span>
                        <button onClick={copyAddress} className="ml-2 p-1 rounded-md hover:bg-gray-800">
                          <Copy className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-400">Total Bets</p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-400">Win Rate</p>
                        <p className="text-2xl font-bold">67%</p>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-400">Net Profit</p>
                        <p className="text-2xl font-bold text-green-500">+8.55 SOL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
  
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8 bg-gray-300">
                <TabsTrigger value="all">All Bets</TabsTrigger>
                <TabsTrigger value="wins">Wins</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>
  
              <TabsContent value="all" className="mt-0">
                <Card className="glass border-gray-600 bg-black text-white">
                  <CardHeader>
                    <CardTitle>Betting History</CardTitle>
                    <CardDescription>View all your past bets and their outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {pastBets.map((bet) => (
                        <div
                          key={bet.id}
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                        >
                          <div className="grid gap-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{bet.question}</h3>
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
                          <div className="mt-2 md:mt-0 text-right">
                            {bet.status === "win" && <div className="text-green-500 font-bold">+{bet.reward} SOL</div>}
                            {bet.status === "lose" && <div className="text-red-500 font-bold">-{bet.amount} SOL</div>}
                            {bet.status === "pending" && <div className="text-yellow-500 font-bold">Pending</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="wins" className="mt-0">
                <Card className="glass border-gray-600 bg-black text-white">
                  <CardHeader>
                    <CardTitle>Winning Bets</CardTitle>
                    <CardDescription>View all your winning bets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {pastBets
                        .filter((bet) => bet.status === "win")
                        .map((bet) => (
                          <div
                            key={bet.id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                          >
                            <div className="grid gap-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{bet.question}</h3>
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
                            <div className="mt-2 md:mt-0 text-right">
                              <div className="text-green-500 font-bold">+{bet.reward} SOL</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="pending" className="mt-0">
                <Card className="glass border-gray-600 bg-black text-white">
                  <CardHeader>
                    <CardTitle>Pending Bets</CardTitle>
                    <CardDescription>View all your pending bets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {pastBets
                        .filter((bet) => bet.status === "pending")
                        .map((bet) => (
                          <div
                            key={bet.id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                          >
                            <div className="grid gap-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{bet.question}</h3>
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
                            <div className="mt-2 md:mt-0 text-right">
                              <div className="text-yellow-500 font-bold">Pending</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    )
}

export default profile;
