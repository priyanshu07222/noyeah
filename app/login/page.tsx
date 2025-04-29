"use client"
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const {data: session} = useSession()

  useEffect(() => {
    if(session?.user.email){
      router.push('/')
    }
  },[session])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      toast("Please fill in all fields")
      return
    }

    setIsLoading(true)

    // Simulate login process
    try {
      // In a real app, you would call your authentication API here
      const res = await signIn('credentials', {email, password})
      await new Promise((resolve) => setTimeout(resolve, 1500))
      if (res?.ok) {
        toast("You have successfully logged in")
        router.push('/');
      }
    } catch (error) {
      toast( "Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async() => {
    setIsLoading(true)

    // Simulate Google login process
    await signIn('google')
    setTimeout(() => {
      toast("Redirecting to Google authentication...",)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-b from-gray-300 to-gray-900 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-300 to-gray-900 rounded-full filter blur-[150px]" />
      </div>

      <Card className="w-full max-w-md relative z-10 glass border-gray-600 bg-black text-white ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login to Noyeah</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-700"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-blue-400 hover:text-purple-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-gray-900/50 border-gray-700"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full text-black bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900 hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-gray-400">Or continue with</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-gray-700 hover:bg-gray-800/50 hover:text-white text-black"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Login with Google
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:text-purple-300 font-medium">
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

