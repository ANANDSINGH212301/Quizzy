import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from '@/components/ui/sidebar'
import ProfileAvatar from './profile'

const DasboardHeader = () => {
  return (
    <div className='flex justify-between items-center min-h-14 shadow p-3.5 gap-4'>
      <div>

      <SidebarTrigger />
      </div>
      <div>
      <DropdownMenu>
  <DropdownMenuTrigger>
    <ProfileAvatar />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      </div>
    </div>
  )
}

export default DasboardHeader
