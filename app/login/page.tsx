import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/TestImage.png')"
      }}
    >
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
              />
            </div>
            <Button asChild className="w-full">
              <Link href="/dashboard">Sign In</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}