// DashboardPage.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f3ff] overflow-x-hidden">
      <main className="flex-1 p-6">
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
                        <p className="font-semibold text-gray-800">
                          {quiz.name}
                        </p>
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
      </main>
    </div>
  );
};

export default DashboardPage;
