// SettingsPage.tsx
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#432dd7]">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Full Name" defaultValue="John Doe" />
            <Input placeholder="Email Address" type="email" defaultValue="youremail@example.com" />
            <Button className="bg-[#ffd74f] text-[#432dd7] font-semibold hover:bg-[#f5c93d]">
              Save Account Info
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#432dd7]">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Push Notifications</span>
              <Switch defaultChecked />
            </div>
            <Button className="bg-[#ffd74f] text-[#432dd7] font-semibold hover:bg-[#f5c93d]">
              Save Notification Settings
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#432dd7]">Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Current Password" type="password" />
            <Input placeholder="New Password" type="password" />
            <Input placeholder="Confirm New Password" type="password" />
            <Button className="bg-[#ffd74f] text-[#432dd7] font-semibold hover:bg-[#f5c93d]">
              Update Password
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default SettingsPage;
