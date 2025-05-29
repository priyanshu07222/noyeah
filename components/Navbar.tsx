"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  // const { connected } = useWallet();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const WalletButton = () => (
    <WalletMultiButton style={{
      backgroundColor: "#f9f9f9",
      color: "black",
      borderRadius: "10px",
      padding: "2px 18px",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }} />
  );

  const MobileWalletButton = () => (
    <WalletMultiButton style={{
      backgroundColor: "#000",
      color: "white",
      borderRadius: "10px",
      padding: "2px 18px",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }} className="!bg-foreground !text-background hover:!opacity-90 w-full" />
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/60 backdrop-blur-sm text-white" : "bg-black text-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <Link href="/" className="font-bold text-2xl font-mono">
              NOYEAH
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center justify-between space-x-4">
              <Link 
                href="/"
                className="px-3 py-2 rounded-md text-md hover:bg-foreground/10"
              >
                Home
              </Link>
              <Link 
                href="/profile"
                className="px-3 py-2 rounded-md text-md hover:bg-foreground/10"
              >
                Profile
              </Link>
              <Link 
                href="/create-contest"
                className="px-3 py-2 rounded-md text-md hover:bg-foreground/10"
              >
                Create contest
              </Link>
              <Link 
                href="/bid"
                className="px-3 py-2 rounded-md text-md hover:bg-foreground/10"
              >
                Bid
              </Link>
              
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between ">
            <div className="ml-4 flex items-center space-x-4">
              <SignedIn>
                <WalletButton />
                <SignOutButton>
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r cursor-pointer from-red-400 to-red-700 text-white hover:opacity-90">
                    Sign Out
                  </button>
                </SignOutButton>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-gray-700 text-white hover:opacity-90">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center bg-black rounded-full mx-2 cursor-pointer z-50 absolute right-0">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-foreground/10"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setShowMobileNav((prev)=> !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${showMobileNav ? `block`:`hidden`} transition-all duration-300 md:hidden bg-white text-black text-left w-48 z-10 absolute top-0 right-0 rounded-l-lg` }id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base hover:bg-foreground/10"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="block px-3 py-2 rounded-md text-base hover:bg-foreground/10"
          >
            Profile
          </Link>
          <Link
            href="/create-contest"
            className="block px-3 py-2 rounded-md text-base hover:bg-foreground/10"
          >
            Create contest
          </Link>
          <Link
            href="/bid"
            className="block px-3 py-2 rounded-md text-base hover:bg-foreground/10"
          >
            Bid
          </Link>
          <div className="mt-4 px-3 space-y-2">
            <SignedIn>
              <MobileWalletButton />
              <SignOutButton>
                <button className="w-full px-4 my-4 py-2 rounded-lg bg-gradient-to-r from-red-400 to-red-700 text-white hover:opacity-90">
                  Sign Out
                </button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:opacity-90">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
