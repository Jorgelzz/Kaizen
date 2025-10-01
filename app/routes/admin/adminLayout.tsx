import { AppSidebar } from "~/components/ui/app-sidebar";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { SidebarFooter, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-2">
        <ModeToggle />
      </div>
      <SidebarProvider className="flex min-h-screen" >
          <AppSidebar />
        <SidebarTrigger className="flex bottom-1 left-1/2 justify-center p-4 items-center" />
        <main className="flex items-start justify-center w-full p-4">
          <Outlet />
        </main>
      </SidebarProvider>
    </main>
  );
}
