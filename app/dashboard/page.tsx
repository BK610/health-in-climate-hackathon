import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className="text-sm">
            <Link href="/dashboard">Overview</Link>
          </span>
          <span className="text-sm">
            <Link href="/dashboard/compliance">Compliance</Link>
          </span>
          <span className="text-sm">
            <Link href="/dashboard/analytics">Analytics</Link>
          </span>
          <span className="text-sm">
            <Link href="/dashboard/reports">Reports</Link>
          </span>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl font-bold">Empire State Building Demolition</CardTitle>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      <AlertTriangle className="h-4 w-4" />
                      CRITICAL
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      New York, NY
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      45 Active Workers
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Last Updated: 2 min ago
                    </div>
                  </div>
                </div>
                <CardAction>
                  <Button variant="destructive" size="lg">
                    <CheckCircle className="h-4 w-4" />
                    Complete Tasks Now
                  </Button>
                </CardAction>
              </div>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Tasks List</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
