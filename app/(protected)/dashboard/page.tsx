<<<<<<< HEAD
// DashboardPage.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f3ff] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-[#432dd7]">
          Welcome Back!
        </h1>
        <Input
          placeholder="Search Quizzes"
          className="w-64 border-[#d6d3ff] focus:ring-[#432dd7]"
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Today’s Leads", value: "302" },
          { label: "Quiz Completions", value: "520" },
          { label: "Affiliate Clicks", value: "1,245" },
          { label: "Revenue", value: "₹13,245" },
        ].map((item, i) => (
          <Card
            key={i}
            className="bg-white border border-[#d6d3ff] rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-5">
              <p className="text-gray-600">{item.label}</p>
              <h3 className="text-2xl font-bold text-[#432dd7]">
                {item.value}
              </h3>
=======
import React from 'react'
import { useAuth } from '@/lib/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Calendar,
  Target,
  Award
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'

const DashboardPage = () => {
  const { user, loading } = useAuth()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  console.log('Dashboard: Auth state:', { user, loading, mounted })

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  // Fallback content if no user (for debugging)
  if (!user) {
    return (
      <div className="p-6">
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">Authentication Issue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">
              No user data found. This might be due to:
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>Authentication token not found</li>
              <li>Token expired or invalid</li>
              <li>API connection issues</li>
            </ul>
            <Button 
              className="mt-4" 
              onClick={() => window.location.href = '/login'}
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <main>
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.username || 'User'}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening with your learning journey today.
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {mounted ? new Date().toLocaleDateString() : ''}
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              75% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 new this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest quiz attempts and achievements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completed SEO Basics Quiz</p>
                <p className="text-xs text-muted-foreground">Score: 92% • 2 hours ago</p>
              </div>
              <Badge variant="outline">92%</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Started Social Media Marketing</p>
                <p className="text-xs text-muted-foreground">In progress • 1 day ago</p>
              </div>
              <Badge variant="secondary">In Progress</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Earned "Quick Learner" Badge</p>
                <p className="text-xs text-muted-foreground">Achievement unlocked • 3 days ago</p>
              </div>
              <Trophy className="h-4 w-4 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Start learning or review your progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Start New Quiz
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Progress Report
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Trophy className="mr-2 h-4 w-4" />
              View Achievements
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <User className="mr-2 h-4 w-4" />
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* User Info Debug (remove in production) */}
      {mounted && process.env.NODE_ENV === 'development' && (
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="text-sm">Debug Info</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs">
              {JSON.stringify({ user, loading, mounted }, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-purple-100">
            <CardContent className="p-4">
              <p className="text-gray-700">Today&apos;s Leads</p>
              <h3 className="text-xl font-bold text-purple-800">302</h3>
>>>>>>> 6a60243a2d2c995c92270cb8fd67af4b8564b44f
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quiz Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border border-[#d6d3ff] rounded-xl shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#432dd7]">
                Quiz Performance
              </h2>
              <Button
                variant="secondary"
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold"
              >
                Export
              </Button>
            </div>
            <div className="bg-[#f4f3ff] h-56 rounded-md flex items-center justify-center text-[#432dd7]/50">
              [Graph Placeholder]
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">
              Traffic Sources
            </h2>

            <p className="text-sm text-gray-700 mb-1">Direct</p>
            <div className="h-2 rounded-full mb-4" style={{ background: "#e9e6ff" }}>
              <div className="h-2 rounded-full" style={{ width: "60%", background: "#432dd7" }} />
            </div>

            <p className="text-sm text-gray-700 mb-1">Referral</p>
            <div className="h-2 rounded-full mb-4" style={{ background: "#ffe8cc" }}>
              <div className="h-2 rounded-full" style={{ width: "30%", background: "#ff9f1c" }} />
            </div>

            <p className="text-sm text-gray-700 mb-1">Social Media</p>
            <div className="h-2 rounded-full" style={{ background: "#ffe0e0" }}>
              <div className="h-2 rounded-full" style={{ width: "10%", background: "#ff3b3b" }} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Quizzes */}
      <div className="mt-8">
        <Card className="border border-[#d6d3ff] rounded-xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-[#432dd7] mb-4">
              Recent Quiz Submissions
            </h2>
            <ScrollArea className="h-48 pr-2">
              <div className="space-y-4">
                {[
                  {
                    name: "John Doe",
                    email: "john@example.com",
                    status: "Completed",
                    amount: "₹150 earned",
                    color: "text-green-600",
                  },
                  {
                    name: "Jane Smith",
                    email: "jane@example.com",
                    status: "Pending",
                    amount: "Awaiting result",
                    color: "text-yellow-600",
                  },
                ].map((quiz, i) => (
                  <div
                    key={i}
                    className="flex justify-between bg-[#f9f8ff] p-3 rounded-lg hover:bg-[#f0eeff] transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{quiz.name}</p>
                      <p className="text-sm text-gray-600">{quiz.email}</p>
                    </div>
                    <div className="text-right">
                      <p className={`${quiz.color} font-bold`}>{quiz.status}</p>
                      <p className="text-sm">{quiz.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
