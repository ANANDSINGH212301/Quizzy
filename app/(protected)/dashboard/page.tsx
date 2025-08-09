// DashboardPage.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { UsersIcon, TrophyIcon, ActivityIcon, BarChart3 } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-purple-800">Welcome Back!</h1>
          <Input placeholder="Search Quizzes" className="w-64" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-purple-100">
            <CardContent className="p-4">
              <p className="text-gray-700">Today&apos;s Leads</p>
              <h3 className="text-xl font-bold text-purple-800">302</h3>
            </CardContent>
          </Card>
          <Card className="bg-purple-100">
            <CardContent className="p-4">
              <p className="text-gray-700">Quiz Completions</p>
              <h3 className="text-xl font-bold text-purple-800">520</h3>
            </CardContent>
          </Card>
          <Card className="bg-purple-100">
            <CardContent className="p-4">
              <p className="text-gray-700">Affiliate Clicks</p>
              <h3 className="text-xl font-bold text-purple-800">1,245</h3>
            </CardContent>
          </Card>
          <Card className="bg-purple-100">
            <CardContent className="p-4">
              <p className="text-gray-700">Revenue</p>
              <h3 className="text-xl font-bold text-purple-800">₹13,245</h3>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold text-purple-800">Quiz Performance</h2>
                <Button variant="secondary" className="bg-yellow-400 text-purple-900 font-semibold">Export</Button>
              </div>
              <div className="bg-purple-50 h-56 rounded-md flex items-center justify-center text-purple-400">
                [Graph Placeholder]
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-purple-800 mb-4">Traffic Sources</h2>
              <p className="text-sm text-gray-700 mb-1">Direct</p>
              <Progress value={60} className="mb-2 bg-yellow-100" />
              <p className="text-sm text-gray-700 mb-1">Referral</p>
              <Progress value={30} className="mb-2 bg-yellow-100" />
              <p className="text-sm text-gray-700 mb-1">Social Media</p>
              <Progress value={10} className="bg-yellow-100" />
            </CardContent>
          </Card>
        </div>

        {/* Recent Quizzes */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Recent Quiz Submissions</h2>
              <ScrollArea className="h-48 pr-2">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">John Doe</p>
                      <p className="text-sm text-gray-600">john@example.com</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold">Completed</p>
                      <p className="text-sm">₹150 earned</p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Jane Smith</p>
                      <p className="text-sm text-gray-600">jane@example.com</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-600 font-bold">Pending</p>
                      <p className="text-sm">Awaiting result</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;