"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle, TrendingUp, Flame } from "lucide-react"

export function ContestCard({ contest, onBet }: any) {
  const [timeLeft, setTimeLeft] = useState("")
  const [isEnded, setIsEnded] = useState(false)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      // from contest.deadline - now to below one
      const difference = contest.deadline.getTime() - now.getTime()

      if (difference <= 0) {
        setIsEnded(true)
        setTimeLeft("Ended")
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h left`)
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m left`)
      } else {
        setTimeLeft(`${minutes}m left`)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [contest.deadline])

  const totalVotes = contest.yesCount + contest.noCount
  const yesPercentage = totalVotes > 0 ? Math.round((contest.yesCount / totalVotes) * 100) : 50
  const noPercentage = 100 - yesPercentage

  return (
    !isEnded ? (
      <Card className="glass border border-gray-800 rounded-2xl overflow-hidden hover:glow transition-all duration-300 h-full flex flex-col bg-black text-white">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-1">
            <div className="flex gap-2">
              {contest.isTrending && (
                <Badge variant="outline" className="bg-red-900/30 text-red-400 border-red-800 px-2 py-0 h-5">
                 
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </Badge>
              )}
              {contest && !contest.isTrending && (
                <Badge variant="outline" className="bg-purple-900/30 text-purple-400 border-purple-800 px-2 py-0 h-5">
                  <Flame className="h-3 w-3 mr-1" />
                  Primary
                </Badge>
              )}
            </div>
            <Badge className="bg-gray-800 text-gray-300 hover:bg-gray-700">{contest.category}</Badge>
          </div>
          <CardTitle className="text-xl font-bold">{contest.question}</CardTitle>
          <div className="flex items-center text-sm text-gray-400 mt-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeLeft}</span>
          </div>
        </CardHeader>
        <CardContent className="pb-4 flex-grow">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  Yes ({contest.yesCount})
                </span>
                <span>{yesPercentage}%</span>
              </div>
              <Progress value={yesPercentage} className="h-2 bg-gray-300">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                  style={{ width: `${yesPercentage}%` }}
                />
              </Progress>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="flex items-center">
                  <XCircle className="h-4 w-4 mr-1 text-red-500" />
                  No ({contest.noCount})
                </span>
                <span>{noPercentage}%</span>
              </div>
              <Progress value={noPercentage} className="h-2 bg-gray-300">
                <div
                  className="h-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-full"
                  style={{ width: `${noPercentage}%` }}
                />
              </Progress>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div className="text-sm">
                <span className="text-gray-400">Total Pool:</span>
                <span className="ml-1 font-bold text-gray-600">{contest.totalPool.toFixed(2)} SOL</span>
              </div>
              <div className="text-sm space-y-1">
                <div>
                  <span className="text-gray-400">Yes Entry:</span>
                  <span className="ml-1 font-bold text-green-500">{contest.yesParticipationFee.toFixed(2)} SOL</span>
                </div>
                <div>
                  <span className="text-gray-400">No Entry:</span>
                  <span className="ml-1 font-bold text-red-500">{contest.noParticipationFee.toFixed(2)} SOL</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 pt-0">
          <Button onClick={() => onBet(contest.id, "yes")} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
            Bet Yes
          </Button>
          <Button onClick={() => onBet(contest.id, "no")} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
            Bet No
          </Button>
        </CardFooter>
      </Card>
    ) : null
  )
}
