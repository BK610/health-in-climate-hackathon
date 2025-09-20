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
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, AlertTriangle, CheckCircle, Circle, Wind, Thermometer, Droplets, Eye, Bell, User } from "lucide-react";
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
          <div className="flex items-center gap-3 ml-auto">
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </div>
            </div>
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <User className="h-4 w-4 text-gray-600" />
            </div>
          </div>
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
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tasks List</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600 cursor-pointer" />
                      <span className="text-green-800">Distribute masks to workers</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                      <Circle className="h-5 w-5 text-red-600 cursor-pointer hover:text-red-700" />
                      <span className="text-red-800">Upgrade equipment</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                      <Circle className="h-5 w-5 text-yellow-600 cursor-pointer hover:text-yellow-700" />
                      <span className="text-yellow-800">Notify onsite manager</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                      <Circle className="h-5 w-5 text-yellow-600 cursor-pointer hover:text-yellow-700" />
                      <span className="text-yellow-800">Review report</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Create New Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    placeholder="Enter your log entry here..."
                    className="w-full min-h-[120px] p-3 border border-input rounded-md bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical"
                    rows={5}
                  />
                  <div className="flex justify-end mt-3">
                    <Button size="sm">
                      Save Log
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Air Quality Monitor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">156</div>
                        <div className="text-xs font-medium text-gray-600 mb-1">AQI</div>
                      </div>

                      <div className="text-center p-4 rounded-lg bg-white">
                        <div className="text-3xl font-bold text-red-600">65.2</div>
                        <div className="text-xs font-medium text-gray-600 mb-1">PM2.5 μg/m³</div>
                      </div>

                      <div className="text-center p-4 rounded-lg bg-white">
                        <div className="text-3xl font-bold text-red-600">89.4</div>
                        <div className="text-xs font-medium text-gray-600 mb-1">PM10 μg/m³</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 rounded bg-gray-50">
                        <Thermometer className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-800">72°F</div>
                        <div className="text-xs text-gray-600">Temp</div>
                      </div>

                      <div className="text-center p-2 rounded bg-gray-50">
                        <Droplets className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-800">68%</div>
                        <div className="text-xs text-gray-600">Humidity</div>
                      </div>

                      <div className="text-center p-2 rounded bg-gray-50">
                        <Wind className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-800">8.2 mph</div>
                        <div className="text-xs text-gray-600">Wind</div>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground text-center border-t pt-3">
                      Last updated: 30 seconds ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
