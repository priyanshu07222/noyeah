"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { ArrowRight } from "lucide-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export function CallToAction() {


  const handleConnectWallet = () => {
    toast(
      "Wallet Connected",
    )
  }

  return (
    <section className="py-20 md:py-32 relative bg-black flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-70" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="glass border border-gray-800 rounded-3xl p-8 md:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-600 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                Ready to Start Betting?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of users who are already winning on Noyeah. Connect your wallet and place your first bet in
              minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WalletMultiButton  style={{
                  background: "#f9f9f9",
                  color: "black",
                  borderRadius: "10px",
                  padding: "4px 32px",
                  paddingTop: "20px",
                  fontSize: "16px",
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                  
                }} />
              {/* <Button
                onClick={handleConnectWallet}
                className="bg-gradient-to-r from-slate-800 via-gray-800 to-gray-900 text-white text-lg px-8 py-6 h-auto rounded-xl hover:opacity-90 animate-pulse-glow group"
                size="lg"
              >
                Connect Wallet & Start Betting
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
              <Button
                variant="outline"
                className="border-gray-600 text-black text-lg font-bold px-8 py-3 h-auto rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent mb-2">
                  100%
                </span>
                <span className="text-sm text-gray-400">Decentralized</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  0.5%
                </span>
                <span className="text-sm text-gray-400">Platform Fee</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-gray-400 bg-clip-text text-transparent mb-2">
                  24/7
                </span>
                <span className="text-sm text-gray-400">Support</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  1000+
                </span>
                <span className="text-sm text-gray-400">Daily Bets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
