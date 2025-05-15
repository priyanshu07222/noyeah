"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import Calendar from "react-calendar"


const createContest = () => {
  // title, entry_fee, end_time, wallet
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleSubmit = (e:any) => {
    e.preventDefault()

    if (!title.trim()) {
      toast(
        "Missing question",)
      return
    }

    if (!date) {
      toast("Please select a deadline for your poll.")
      return
    }

    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast("Poll Created Successfully!",)

      // Reset form
      setTitle("")
      setDate(new Date())
    }, 2000)
  }
  return (
    <main className='min-h-screen bg-black text-white flex items-center justify-center'>
        <div className='container px-4 md:px-6 pt-24 pb-12'>
        <div className="max-w-2xl mx-auto">
          <Card className="glass border-gray-800 bg-black text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Create New Contest</CardTitle>
              <CardDescription>Create a new yes/no contest for users to bet on</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="question">Title</Label>
                  <Input
                    id="question"
                    placeholder="E.g., Will BTC reach $100k this year?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-900/50 border-gray-700"
                  />
                  <p className="text-sm text-gray-400">
                    Make sure your question has a clear yes/no answer and can be objectively verified.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-gray-900/50 border-gray-700",
                          !date && "text-gray-400",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select deadline date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                      <Calendar
                        className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-80"
                        value={date}
                        onChange={(newDate) => newDate instanceof Date && setDate(newDate)}
                        tileClassName={({ date, view }) =>
                          view === 'month' 
                            ? 'text-white hover:bg-gray-700 rounded-lg p-2 transition-colors' 
                            : null
                        }
                        navigationLabel={({ date }) => 
                          format(date, 'MMMM yyyy')
                        }
                        prevLabel={<ChevronLeftIcon className="h-4 w-4" />}
                        nextLabel={<ChevronRightIcon className="h-4 w-4" />}
                        calendarClassName="border border-gray-700"
                        tileDisabled={({ date }) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-sm text-gray-400">The contest will automatically closed at specified date.</p>
                </div>

                <div className="space-y-2">
                  <Label>Entry fee</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      step="0.1"
                      min="0.1"
                      placeholder="0.00"
                      className="bg-gray-900/50 border-gray-700 pr-12"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                      SOL
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 my-4">Specify the entry fee for the contest to enter.</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Poll...
                    </>
                  ) : (
                    "Create Contest"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        </div>
    </main>  
)
}

export default createContest