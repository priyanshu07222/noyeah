"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Navbar } from "@/components/navbar"
import { ContestCard } from "@/components/ContestCard"
import { PlaceBetModal } from "@/components/PlaceBetModal"
import { Search, TrendingUp, Clock, Trophy, Filter } from "lucide-react"

// Mock data for contests
const mockContests = [
  {
    id: "1",
    question: "Will RCB win IPL 2025?",
    category: "cricket",
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    totalPool: 1250.75,
    participationFee: 0.5,
    yesCount: 356,
    noCount: 289,
    isHot: true,
    isTrending: true,
  },
  {
    id: "2",
    question: "Will India win over Pakistan in the next T20 World Cup?",
    category: "cricket",
    deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days from now
    totalPool: 3450.25,
    participationFee: 1.0,
    yesCount: 890,
    noCount: 320,
    isHot: true,
    isTrending: false,
  },
  {
    id: "3",
    question: "Will Bitcoin reach $100,000 by the end of 2025?",
    category: "crypto",
    deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 180 days from now
    totalPool: 5670.5,
    participationFee: 2.0,
    yesCount: 1245,
    noCount: 876,
    isHot: false,
    isTrending: true,
  },
  {
    id: "4",
    question: "Will Ethereum 2.0 fully launch in 2025?",
    category: "crypto",
    deadline: new Date(Date.now() + 150 * 24 * 60 * 60 * 1000), // 150 days from now
    totalPool: 2340.3,
    participationFee: 1.5,
    yesCount: 678,
    noCount: 432,
    isHot: false,
    isTrending: false,
  },
  {
    id: "5",
    question: "Will Manchester City win the Premier League 2025-26?",
    category: "football",
    deadline: new Date(Date.now() + 270 * 24 * 60 * 60 * 1000), // 270 days from now
    totalPool: 1890.45,
    participationFee: 0.75,
    yesCount: 567,
    noCount: 489,
    isHot: true,
    isTrending: false,
  },
  {
    id: "6",
    question: "Will Lionel Messi retire from international football in 2025?",
    category: "football",
    deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 180 days from now
    totalPool: 2150.6,
    participationFee: 1.25,
    yesCount: 432,
    noCount: 678,
    isHot: false,
    isTrending: true,
  },
  {
    id: "7",
    question: "Will Tesla stock exceed $1000 by the end of 2025?",
    category: "stocks",
    deadline: new Date(Date.now() + 210 * 24 * 60 * 60 * 1000), // 210 days from now
    totalPool: 3210.8,
    participationFee: 1.75,
    yesCount: 789,
    noCount: 456,
    isHot: true,
    isTrending: true,
  },
  {
    id: "8",
    question: "Will Apple release a foldable iPhone in 2025?",
    category: "tech",
    deadline: new Date(Date.now() + 240 * 24 * 60 * 60 * 1000), // 240 days from now
    totalPool: 1870.25,
    participationFee: 1.0,
    yesCount: 654,
    noCount: 543,
    isHot: false,
    isTrending: true,
  },
]

export default function ContestsPage() {
  const [contests, setContests] = useState(mockContests)
  const [filteredContests, setFilteredContests] = useState(mockContests)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSort, setSelectedSort] = useState("deadline")
  const [selectedBetContest, setSelectedBetContest] = useState(null)
  const [selectedBetChoice, setSelectedBetChoice] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter and sort contests based on user selections
  useEffect(() => {
    let filtered = [...contests]

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((contest) => contest.category === selectedCategory)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (contest) => contest.question.toLowerCase().includes(query) || contest.category.toLowerCase().includes(query),
      )
    }

    // Apply sorting
    switch (selectedSort) {
      case "deadline":
        filtered.sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
        break
      case "pool":
        filtered.sort((a, b) => b.totalPool - a.totalPool)
        break
      case "fee":
        filtered.sort((a, b) => a.participationFee - b.participationFee)
        break
      case "popularity":
        filtered.sort((a, b) => b.yesCount + b.noCount - (a.yesCount + a.noCount))
        break
      default:
        break
    }

    setFilteredContests(filtered)
  }, [contests, searchQuery, selectedCategory, selectedSort])

  const handleBet = (contestId, choice) => {
    const contest = contests.find((c) => c.id === contestId)
    setSelectedBetContest(contest)
    setSelectedBetChoice(choice)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBetContest(null)
    setSelectedBetChoice(null)
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* <Navbar /> */}
      <div className="container px-4 md:px-6 pt-24 pb-16">
        <div className="flex flex-col space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Participate in Contests</h1>
          <p className="text-gray-400 max-w-3xl">
            Browse through our active contests and place your bets on yes/no outcomes. Each contest has a different
            participation fee and potential reward.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search contests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] bg-gray-900/50 border-gray-700">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="stocks">Stocks</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="w-[180px] bg-gray-900/50 border-gray-700">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="deadline">Ending Soon</SelectItem>
                  <SelectItem value="pool">Highest Pool</SelectItem>
                  <SelectItem value="fee">Lowest Fee</SelectItem>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mb-8 bg-gray-400 gap-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="trending">
                {/* <TrendingUp className="mr-1 h-4 w-4" /> */}
                Trending
              </TabsTrigger>
              <TabsTrigger value="ending-soon" className="">
                {/* <Clock className="mr-1 h-4 w-4" /> */}
                Ending Soon
              </TabsTrigger>
              <TabsTrigger value="high-stakes">
                {/* <Trophy className="mr-1 h-4 w-4 mx-2" /> */}
                High Stakes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {filteredContests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContests.map((contest) => (
                    <ContestCard key={contest.id} contest={contest} onBet={handleBet} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                    <Filter className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No contests found</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Try adjusting your filters or search query to find more contests.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContests
                  .filter((contest) => contest.isTrending)
                  .map((contest) => (
                    <ContestCard key={contest.id} contest={contest} onBet={handleBet} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ending-soon" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContests
                  .sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
                  .slice(0, 6)
                  .map((contest) => (
                    <ContestCard key={contest.id} contest={contest} onBet={handleBet} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="high-stakes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContests
                  .sort((a, b) => b.participationFee - a.participationFee)
                  .slice(0, 6)
                  .map((contest) => (
                    <ContestCard key={contest.id} contest={contest} onBet={handleBet} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {selectedBetContest && (
        <PlaceBetModal
          isOpen={isModalOpen}
          onClose={closeModal}
          contest={selectedBetContest}
          choice={selectedBetChoice}
        />
      )}
    </main>
  )
}
