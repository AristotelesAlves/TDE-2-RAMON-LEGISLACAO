import { BookOpen, Brain, Shield, Zap } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const tdeItems = [
  { 
    title: "TDE 1", 
    subtitle: "Cibercrimes",
    url: "/", 
    icon: Shield,
    description: "Cibercrimes e Legislação Brasileira"
  },
  { 
    title: "TDE 2", 
    subtitle: "IA & Lei",
    url: "/tde2", 
    icon: Brain,
    description: "PL 21/2020 - Marco Legal da IA"
  },
  { 
    title: "TDE 3", 
    subtitle: "---",
    url: "/tde3", 
    icon: BookOpen,
    description: "Ética e Responsabilidade Digital"
  },
  { 
    title: "TDE 4", 
    subtitle: "---",
    url: "/tde4", 
    icon: Zap,
    description: "Tendências e Futuro Tecnológico"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `group relative overflow-hidden transition-all duration-300 ${
      isActive 
        ? "bg-sidebar-accent text-sidebar-primary shadow-glow" 
        : "hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-primary"
    }`;

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-72"} transition-all duration-300 border-r border-sidebar-border bg-sidebar`}
      collapsible="icon"
    >
      <SidebarContent className="p-2">
        <div className="mb-4 p-4">
          <h1 className={`font-bold text-sidebar-primary transition-all duration-300 ${
            isCollapsed ? "text-xs text-center" : "text-xl"
          }`}>
            {isCollapsed ? "TDE" : "Informática & Legislação"}
          </h1>
          {!isCollapsed && (
            <p className="text-xs text-sidebar-foreground/70 mt-1">
              Prof. Ramon Felizardo
            </p>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs uppercase tracking-wider">
            {isCollapsed ? "TDEs" : "Trabalhos Dirigidos"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {tdeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <div className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                        isCollapsed ? "justify-center" : "space-x-3"
                      }`}>
                        <item.icon className={`transition-all duration-300 ${
                          isCollapsed ? "h-5 w-5" : "h-6 w-6"
                        } ${isActive(item.url) ? "text-sidebar-primary" : "group-hover:text-sidebar-primary"}`} />
                        
                        {!isCollapsed && (
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-sm">{item.title}</span>
                              <span className="text-xs px-2 py-0.5 bg-sidebar-border rounded-full">
                                {item.subtitle}
                              </span>
                            </div>
                            <p className="text-xs text-sidebar-foreground/70 truncate mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}