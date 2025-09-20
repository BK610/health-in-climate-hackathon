import { AppSidebar } from "@/components/app-sidebar";
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
import { MapPin, Users, Clock, AlertTriangle, CheckCircle, Wind, Thermometer, Droplets, Eye, Bell, User, FileText, ListTodo, PenTool, Building, Calendar } from "lucide-react";
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
            <Link href="/nycompliance.pdf" target="_blank">
              Compliance
            </Link>
          </span>
          <span className="text-sm">
            <Link href="#">Analytics</Link>
          </span>
          <span className="text-sm">
            <Link href="#">Reports</Link>
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
                    <Building className="h-6 w-6 text-gray-600" />
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
                  <CardTitle className="flex items-center gap-2">
                    <ListTodo className="h-5 w-5" />
                    Tasks List
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Distribute N95 masks to all workers</div>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Complete</span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            30 min
                          </div>
                        </div>
                      </div>
                      <Button size="sm" disabled className="bg-gray-100 text-gray-400">Complete</Button>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Install new air filtration equipment</div>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">In Progress</span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            2 hours
                          </div>
                        </div>
                      </div>
                      <Button size="sm">Finish</Button>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Notify onsite manager of air quality alert</div>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Pending</span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            10 min
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Start</Button>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Review daily safety inspection report</div>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Pending</span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            45 min
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Start</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PenTool className="h-5 w-5" />
                    Create New Log
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    placeholder="Enter your log entry here..."
                    className="w-full min-h-[120px] p-3 border border-input rounded-md bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical"
                    rows={5}
                  />
                  <div className="flex justify-end mt-3">
                    <Button size="sm">Save Log</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Air Quality
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
                        <div className="text-sm font-medium text-gray-800">
                          72°F
                        </div>
                        <div className="text-xs text-gray-600">Temp</div>
                      </div>

                      <div className="text-center p-2 rounded bg-gray-50">
                        <Droplets className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-800">
                          68%
                        </div>
                        <div className="text-xs text-gray-600">Humidity</div>
                      </div>

                      <div className="text-center p-2 rounded bg-gray-50">
                        <Wind className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-800">
                          8.2 mph
                        </div>
                        <div className="text-xs text-gray-600">Wind</div>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground text-center border-t pt-3">
                      Last updated: 30 seconds ago
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recent Logs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Distributed N95 masks to all workers</div>
                        <div className="text-xs text-gray-500">2 minutes ago • Safety Team</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Added new HEPA filters to ventilation system</div>
                        <div className="text-xs text-gray-500">15 minutes ago • Maintenance</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Updated safety protocol due to air quality alert</div>
                        <div className="text-xs text-gray-500">32 minutes ago • Site Manager</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Conducted air quality inspection - Zone A</div>
                        <div className="text-xs text-gray-500">1 hour ago • Environmental Team</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Emergency ventilation activated in Sector 3</div>
                        <div className="text-xs text-gray-500">2 hours ago • Emergency Response</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Worker Schedules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-700">MW</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Mike Wilson</div>
                      <div className="text-xs text-gray-500">Site Supervisor</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today</span>
                      <span className="font-medium">6:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tomorrow</span>
                      <span className="font-medium">6:00 AM - 2:00 PM</span>
                    </div>
                    <div className="text-xs text-green-600 mt-2">✓ On Site</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-700">SJ</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Sarah Johnson</div>
                      <div className="text-xs text-gray-500">Safety Inspector</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today</span>
                      <span className="font-medium">7:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tomorrow</span>
                      <span className="font-medium">7:00 AM - 3:00 PM</span>
                    </div>
                    <div className="text-xs text-green-600 mt-2">✓ On Site</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-orange-700">DR</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">David Rodriguez</div>
                      <div className="text-xs text-gray-500">Equipment Operator</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today</span>
                      <span className="font-medium">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tomorrow</span>
                      <span className="font-medium">Off</span>
                    </div>
                    <div className="text-xs text-yellow-600 mt-2">⚠ Break - 30 min</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-700">AL</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Amy Lee</div>
                      <div className="text-xs text-gray-500">Environmental Monitor</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tomorrow</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="text-xs text-green-600 mt-2">✓ On Site</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-red-700">TB</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Tom Brown</div>
                      <div className="text-xs text-gray-500">Demolition Specialist</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today</span>
                      <span className="font-medium">6:30 AM - 2:30 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tomorrow</span>
                      <span className="font-medium">6:30 AM - 2:30 PM</span>
                    </div>
                    <div className="text-xs text-red-600 mt-2">⚠ Sick Leave</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-cyan-700">JM</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Jessica Martinez</div>
                      <div className="text-xs text-gray-500">Site Medic</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today</span>
                      <span className="font-medium">7:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tomorrow</span>
                      <span className="font-medium">7:00 AM - 3:00 PM</span>
                    </div>
                    <div className="text-xs text-green-600 mt-2">✓ On Site</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
