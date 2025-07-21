import { AppSidebar } from "@/components/Global/dashboard/Appsidebar";
import DasboardHeader from "@/components/Global/dashboard/Dasboard-Header";
import { SidebarProvider} from "@/components/ui/sidebar";


export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <DasboardHeader />
        {children}
      </main>
    </SidebarProvider>
   </>
  );
}
