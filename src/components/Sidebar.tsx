
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, BookOpen, Clock, FileText, Check, ChartBar } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: ChartBar, path: "/dashboard" },
    { name: "Courses", icon: BookOpen, path: "/courses" },
    { name: "Attendance", icon: Check, path: "/attendance" },
    { name: "Grades", icon: FileText, path: "/grades" },
    { name: "Exams", icon: Calendar, path: "/exams" },
    { name: "Leaves", icon: Clock, path: "/leaves" },
  ];

  return (
    <div className={cn("pb-12 w-64 hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 transition-all hover:bg-accent",
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
