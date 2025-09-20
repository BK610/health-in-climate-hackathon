import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// This is sample data.
const data = {
  navMain: [
    {
      title: "New York",
      url: "#",
      items: [
        {
          title: "Empire State Building",
          url: "#",
          isActive: true,
          status: "critical",
          statusColor: "bg-red-100",
          statusTextColor: "text-red-700",
          statusBorderColor: "border-red-200",
          AQI: 158,
          numberOfWorkers: 84,
        },
        {
          title: "1239 Downing Street",
          url: "#",
          status: "safe",
          statusColor: "bg-green-100",
          statusTextColor: "text-green-700",
          statusBorderColor: "border-green-200",
          AQI: 42,
          numberOfWorkers: 12,
        },
      ],
    },
    {
      title: "California",
      url: "#",
      items: [
        {
          title: "Museum of Modern Art",
          url: "#",
          status: "at risk",
          statusColor: "bg-yellow-100",
          statusTextColor: "text-yellow-700",
          statusBorderColor: "border-yellow-200",
          AQI: 77,
          numberOfWorkers: 50,
        },
        {
          title: "Joe's Crab Shack",
          url: "#",
          status: "safe",
          statusColor: "bg-green-100",
          statusTextColor: "text-green-700",
          statusBorderColor: "border-green-200",
          AQI: 30,
          numberOfWorkers: 3,
        },
        {
          title: "Yosemite National Park Cabin",
          url: "#",
          status: "critical",
          statusColor: "bg-red-100",
          statusTextColor: "text-red-700",
          statusBorderColor: "border-red-200",
          AQI: 185,
          numberOfWorkers: 4,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <span className="px-2 font-semibold">Construction Sites</span>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <a href={item.url}>
                      <Card
                        className={
                          item.isActive
                            ? "bg-neutral-50 border-blue-400"
                            : undefined
                        }
                      >
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="text-sm">
                            <Badge
                              className={`uppercase ${item.statusColor} ${item.statusBorderColor} ${item.statusTextColor}`}
                            >
                              {item.status}
                            </Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Badge className="text-black bg-neutral-100 border-neutral-300">
                            AQI {item.AQI}
                          </Badge>
                          <span className="px-1">•</span>
                          <Badge className="text-black bg-neutral-100 border-neutral-300">
                            {item.numberOfWorkers} workers
                          </Badge>
                        </CardContent>
                        {/* <CardFooter>
                          <span className="text-neutral-700 text-xs">
                            Last updated today
                          </span>
                        </CardFooter> */}
                      </Card>
                    </a>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
