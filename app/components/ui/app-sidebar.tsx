import {
  CheckCircle,
  ChevronUp,
  FileUser,
  Home,
  ListTodo,
  LogOut,
  MoreHorizontal,
  Settings,
  User2,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Auditoria",
    url: "/audit",
    icon: ListTodo,
  },
  {
    title: "Relatórios",
    url: "/reports",
    icon: CheckCircle,
  },
  {
    title: "Usuários",
    url: "/users",
    icon: Users,
  },
  {
    title: "Setores",
    url: "/sectors",
    icon: FileUser,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-4 w-64 border-r">
        <SidebarGroupLabel
          className="border-b bg-border grid text-2xl text-center
          font-bold text-primary mb-10"
        >
          <h1>Sistema 5S</h1>
        </SidebarGroupLabel>
        {/* You can add groups here if needed */}
        <SidebarGroup>
          <SidebarMenu className="space-y-1">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarFooter className="mt-auto">
          <SidebarMenuButton asChild>
            <a href="/#" className="w-full text-destructive">
              <LogOut />
              <span>Logout</span>
            </a>
          </SidebarMenuButton>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
