import { AppSidebar } from "~/components/ui/app-sidebar";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { SidebarFooter, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <SidebarProvider className="flex min-h-screen">
          <AppSidebar />
        <SidebarTrigger className="flex justify-center p-4" />
        <main className="flex items-center justify-center w-full">
          {<Outlet />}
        </main>
      </SidebarProvider>
    </main>
  );
}
