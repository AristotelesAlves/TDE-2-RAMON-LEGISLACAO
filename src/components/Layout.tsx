import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-cyber">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center justify-between px-6 bg-card/80 backdrop-blur-md border-b border-border">
            <SidebarTrigger className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
              <Menu className="h-5 w-5 text-foreground" />
            </SidebarTrigger>
            
            <div className="text-right">
              <h2 className="text-sm font-medium text-foreground">
                Centro Universitário Paraíso - UniFAP
              </h2>
              <p className="text-xs text-muted-foreground">
                Curso de Sistemas de Informação
              </p>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}