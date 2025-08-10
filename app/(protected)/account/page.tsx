// AccountPage.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-4xl space-y-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#432dd7]">Account Settings</h1>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#432dd7]">Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="email" placeholder="Email Address" defaultValue="youremail@example.com" />
            <Input type="password" placeholder="Current Password" />
            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm New Password" />
            <Button className="bg-[#ffd74f] text-[#432dd7] font-semibold hover:bg-[#f5c93d]">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Billing Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#432dd7]">Billing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 text-sm">Manage your subscription and payment details</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Current Plan:</span>
              <span className="text-[#432dd7]">Pro Plan - ₹999/month</span>
            </div>
            <Button variant="outline" className="border-[#432dd7] text-[#432dd7] hover:bg-[#f3f1ff]">
              Manage Billing
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#432dd7]">Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Two-Factor Authentication</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              Deleting your account is irreversible. All your data will be permanently removed.
            </p>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountPage;
