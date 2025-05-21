"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Navbar } from "@/components/navbar"
import { ContestCard } from "@/components/ContestCard"
import { PlaceBetModal } from "@/components/PlaceBetModal"
import { Search, TrendingUp, Clock, Trophy, Filter } from "lucide-react"
import getProgram from "@/utils/solana"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { BN, web3, AnchorProvider } from "@coral-xyz/anchor"
import { toast } from "sonner"
import * as anchor from "@coral-xyz/anchor"

interface Contest {
  id: string;
  question: string;
  category: string;
  deadline: Date;
  totalPool: number;
  yesParticipationFee: number;
  noParticipationFee: number;
  yesCount: number;
  noCount: number;
  isHot: boolean;
  isTrending: boolean;
  publicKey: web3.PublicKey;
}

export default function ContestsPage() {
  const [contests, setContests] = useState<Contest[]>([])
  const [filteredContests, setFilteredContests] = useState<Contest[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSort, setSelectedSort] = useState("deadline")
  const [selectedBetContest, setSelectedBetContest] = useState<Contest | null>(null)
  const [selectedBetChoice, setSelectedBetChoice] = useState<'yes' | 'no' | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { wallet, publicKey } = useWallet()
  const {connection} = useConnection()

  // Fetch contests from blockchain
  useEffect(() => {
    const fetchContests = async () => {
      if (!wallet || !publicKey) return;
      
      try {
        const anchorWallet = {
          publicKey,
          signTransaction: async (tx: any) => {
            return await wallet.adapter.sendTransaction(tx, connection);
          },
          signAllTransactions: async (txs: any[]) => {
            return Promise.all(txs.map(tx => wallet.adapter.sendTransaction(tx, connection)));
          },
        } as anchor.Wallet;

        const program = await getProgram(anchorWallet)
        
        // Get all program accounts
        /// @ts-ignore
        const allContests = await program.account.createContestState.all()
        console.log("fucking my head")
        console.log(allContests)
        
        const formattedContests: Contest[] = allContests.map((contest: any) => {
          const data = contest.account
          return {
            id: contest.publicKey.toString(),
            question: data.title,
            category: "general", // You might want to add category to your on-chain data
            deadline: new Date(data.endTime.toNumber() * 1000),
            totalPool: data.totalPool.toNumber() / 1e9, // Convert lamports to SOL
            yesParticipationFee: data.yesEntryPrice.toNumber() / 1e9, // Convert lamports to SOL
            noParticipationFee: data.noEntryPrice.toNumber() / 1e9,
            yesCount: data.yesParticipants.toNumber(),
            noCount: data.noParticipants.toNumber(),
            isHot: data.yesParticipants.toNumber() + data.noParticipants.toNumber() > 100,
            isTrending: data.totalPool.toNumber() > 100 * 1e9, // More than 100 SOL in pool
            publicKey: contest.publicKey
          }
        })

        setContests(formattedContests)
        setFilteredContests(formattedContests)
      } catch (error) {
        console.error("Error fetching contests:", error)
        toast.error("Failed to fetch contests")
      } finally {
        setIsLoading(false)
      }
    }

    fetchContests()
  }, [wallet, publicKey])

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
        filtered.sort((a, b) => a.yesParticipationFee - b.noParticipationFee)
        break
      case "popularity":
        filtered.sort((a, b) => b.yesCount + b.noCount - (a.yesCount + a.noCount))
        break
      default:
        break
    }

    setFilteredContests(filtered)
  }, [contests, searchQuery, selectedCategory, selectedSort])

  const handleBet = (contestId: string, choice: 'yes' | 'no') => {
    const contest = contests.find((c) => c.id === contestId)
    if (contest) {
      setSelectedBetContest(contest)
      setSelectedBetChoice(choice)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBetContest(null)
    setSelectedBetChoice(null)
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto"></div>
          <p className="mt-4">Loading contests...</p>
        </div>
      </main>
    )
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
                  <SelectItem value="general">General</SelectItem>
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
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="ending-soon">Ending Soon</TabsTrigger>
              <TabsTrigger value="high-stakes">High Stakes</TabsTrigger>
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
                  .sort((a, b) => b.yesParticipationFee - a.noParticipationFee)
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
