import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Coins, Shield, Zap } from "lucide-react"
import Image from "next/image"

export function WhatItDoes() {
  return (
    <section className="py-20 md:py-32 relative bg-black flex justify-center items-center text-white ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black "></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent">
              How Noyeah Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A simple, transparent, and fair betting platform built on Solana blockchain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<CheckCircle className="h-10 w-10 text-gray-500" />}
            title="Simple Yes/No Bets"
            description="Place bets on straightforward yes/no questions about future events with clear outcomes."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-gray-400" />}
            title="Lightning Fast"
            description="Instant transactions and bet confirmations powered by Solana's high-speed blockchain."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-gray-500" />}
            title="Fully Decentralized"
            description="No central authority. Smart contracts ensure fair and transparent bet resolution."
          />
          <FeatureCard
            icon={<Coins className="h-10 w-10 text-gray-300" />}
            title="Low Fees"
            description="Minimal transaction fees mean more of your winnings stay in your wallet."
          />
        </div>

        <div className="mt-20 glass border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">The Betting Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Browse Active Polls</h4>
                    <p className="text-gray-300">
                      Explore a variety of yes/no questions with clear deadlines and pool sizes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Place Your Bet</h4>
                    <p className="text-gray-300">Choose yes or no and decide how much SOL you want to wager.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Wait for Resolution</h4>
                    <p className="text-gray-300">
                      When the deadline passes, the outcome is determined by verified oracles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Collect Your Winnings</h4>
                    <p className="text-gray-300">
                      If your prediction was correct, winnings are automatically sent to your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-700 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative glass border border-gray-800 rounded-3xl overflow-hidden">
                {/* <video className="w-full h-auto rounded-2xl" autoPlay loop muted playsInline>
                  <source src="https://images.pexels.com/photos/16513359/pexels-photo-16513359/free-photo-of-desert-silhouette-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?height=400&width=600" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}

                <img src="bet.png" width={4650} height={50} alt="kuch bhi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <Card className="glass border-black hover:shadow-gray-800 shadow-2xl hover:border-white-600 transition-all bg-slate-800-900 duration-300 hover:glow">
      <CardContent className="p-6 flex flex-col items-center text-center text-white">
        <div className="mb-5 p-3 rounded-full bg-slate-700">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
