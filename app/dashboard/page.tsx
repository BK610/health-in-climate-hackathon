import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { AlertTriangle, CheckCircle, Clock, MapPin, Users, Wind, Thermometer, Droplets, Search } from "lucide-react"

export default function DashboardPage() {
  // Mock data for the dashboard
  const currentSite = {
    name: "NYC Construction Site Alpha",
    location: "Manhattan, NY",
    riskLevel: "Critical",
    lastUpdated: "2 minutes ago"
  }

  const tasks = [
    { id: 1, title: "Distribute N95 masks to workers", status: "pending", priority: "high", deadline: "30 mins" },
    { id: 2, title: "Update air filtration equipment", status: "in-progress", priority: "high", deadline: "1 hour" },
    { id: 3, title: "Notify onsite manager of air quality", status: "completed", priority: "medium", deadline: "Completed" },
    { id: 4, title: "Review daily safety report", status: "pending", priority: "low", deadline: "2 hours" }
  ]

  const airQuality = {
    aqi: 168,
    status: "Unhealthy",
    pollutants: [
      { name: "PM2.5", level: 85, unit: "μg/m³", status: "high" },
      { name: "PM10", level: 120, unit: "μg/m³", status: "high" },
      { name: "NO2", level: 45, unit: "ppb", status: "moderate" },
      { name: "O3", level: 32, unit: "ppb", status: "good" }
    ]
  }

  const sites = ["NYC Construction Site Alpha", "LA Construction Site Beta", "Chicago Site Gamma"]

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Critical": return "bg-red-500"
      case "Warning": return "bg-yellow-500"
      case "Safe": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600"
      case "in-progress": return "text-blue-600"
      case "pending": return "text-orange-600"
      default: return "text-gray-600"
    }
  }

  const getPollutantColor = (status: string) => {
    switch (status) {
      case "high": return "text-red-600"
      case "moderate": return "text-yellow-600"
      case "good": return "text-green-600"
      default: return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Climate Compliance Manager</h1>

            <div className="flex items-center space-x-4">
              {/* Site Selector */}
              <Select defaultValue={currentSite.name}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select site" />
                </SelectTrigger>
                <SelectContent>
                  {sites.map((site) => (
                    <SelectItem key={site} value={site}>
                      {site}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search sites..."
                  className="pl-10 w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Site Header Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {currentSite.name}
                    </CardTitle>
                    <CardDescription>{currentSite.location}</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={`${getRiskColor(currentSite.riskLevel)} text-white`}
                      variant="secondary"
                    >
                      {currentSite.riskLevel}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">Updated {currentSite.lastUpdated}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Critical Air Quality Alert</AlertTitle>
                  <AlertDescription>
                    Air quality has reached unhealthy levels. Immediate action required for worker safety.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Tasks Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Required Tasks
                </CardTitle>
                <CardDescription>Complete these tasks to ensure compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <Card key={task.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium">{task.title}</h4>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <span className={getTaskStatusColor(task.status)}>
                                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {task.deadline}
                              </span>
                              <Badge variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"}>
                                {task.priority}
                              </Badge>
                            </div>
                          </div>
                          <Button size="sm" variant={task.status === "completed" ? "secondary" : "default"}>
                            {task.status === "completed" ? "Completed" : "Start"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Air Quality Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Air Quality Monitor
                </CardTitle>
                <CardDescription>Current air quality levels and pollutants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">{airQuality.aqi}</div>
                    <div className="text-lg font-medium text-red-600">{airQuality.status}</div>
                    <div className="text-sm text-gray-600">Air Quality Index</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {airQuality.pollutants.map((pollutant) => (
                      <Card key={pollutant.name} className="p-4">
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-600">{pollutant.name}</div>
                          <div className={`text-lg font-bold ${getPollutantColor(pollutant.status)}`}>
                            {pollutant.level}
                          </div>
                          <div className="text-xs text-gray-500">{pollutant.unit}</div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Optimization Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Schedule Optimization
                </CardTitle>
                <CardDescription>Optimize work schedules for weather conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Today's Weather Impact</span>
                    <Badge variant="destructive">High Risk</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4" />
                        <span className="text-sm">Temperature</span>
                      </div>
                      <span className="text-sm font-medium">95°F</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4" />
                        <span className="text-sm">Humidity</span>
                      </div>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Break Schedule Compliance</span>
                      <span className="text-sm text-green-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <Alert className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Recommend extending break times by 15 minutes due to high heat index.
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full mt-4">
                    Optimize Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}