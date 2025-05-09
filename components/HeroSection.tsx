"use client"
import React from 'react'
// import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import Particles from '@tsparticles/react';
// import { loadFull } from 'tsparticles';
import ParticleBackground from './ParticleBackground';

export default function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center  px-4 bg-gradient-to-b from-black via-black to-gray-600 text-white h-svh">
        <ParticleBackground/>
        <h2 className="text-7xl font-semibold mb-2 max-w-screen-xl uppercase px-4">
          Decentralized Opinion Trading Platform
        </h2>
        <h1 className="text-lg md:text-xl font-semibold text-neutral-400 mb-4 mt-8 ">
          NOYEAH is the Future of Fantasy Sports on Solana
        </h1>
        <p className="max-w-2xl text-lg md:text-md mb-8  bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent">
        Predict the future with a single choice. <span className='font-bold text-white'>Yes</span> or <span className='font-bold text-white'>No</span>. Bid on outcomes, challenge others, and earn real rewards — all powered by Solana’s lightning-fast and transparent blockchain.

</p>
        
        <div className="flex flex-col sm:flex-row gap-4">
        <WalletMultiButton style={{
                  backgroundColor: "#f9f9f9",
                  color: "black",
                  borderRadius: "70px",
                  padding: "2px 18px",
                  fontSize: "14px",
                  fontWeight: "900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }} />
          {/* <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-full hover:bg-gray-200 transition">
            Get Started
          </button> */}
          <button className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
        <div className='my-8'></div>

      </section>
    )
  }
  
