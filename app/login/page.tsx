"use client"
import { SignIn, useUser } from "@clerk/nextjs"
import React from 'react'
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const { isSignedIn } = useUser()

  if (isSignedIn) {
    router.push('/')
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-b from-gray-300 to-gray-900 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-300 to-gray-900 rounded-full filter blur-[150px]" />
      </div>
      <SignIn />
    </div>
  )
}

