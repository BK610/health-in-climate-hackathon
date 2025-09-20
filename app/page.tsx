import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-30 px-8 sm:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center sm:text-left mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">Oasis</h1>
              <p className="text-2xl text-neutral-600 mb-2 max-w-2xl">
                Compliance failure is expensive. Weather is unpredictable.
              </p>
              <p className="text-2xl text-neutral-800 font-medium mb-8 max-w-2xl">
                Until Oasis.
              </p>
              <div className="flex gap-4 items-center justify-center sm:justify-start">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg shadow-blue-600/50"
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md border border-blue-400">
              <Image
                src="/homepage_header.png"
                alt="Construction site with safety equipment and blueprints at sunset"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-8 sm:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-blue-400">
              <h3 className="text-xl font-semibold mb-4">
                Real-time Monitoring
              </h3>
              <p className="text-neutral-600">
                Receive real-time alerts for air quality risks with our advanced
                monitoring system and receive instant alerts for your
                construction sites.
              </p>
            </Card>
            <Card className="p-6 border-blue-400">
              <h3 className="text-xl font-semibold mb-4">
                Compliance Automation
              </h3>
              <p className="text-neutral-600">
                Automate compliance checks and documentation, reducing manual
                work and ensuring nothing falls through the cracks.
              </p>
            </Card>
            <Card className="p-6 border-blue-400">
              <h3 className="text-xl font-semibold mb-4">Worker Safety</h3>
              <p className="text-neutral-600">
                Protect your workforce with proactive safety measures and clear
                protocols for extreme weather conditions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-50 py-20 px-8 sm:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Cost of Non-Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $13,653
              </div>
              <p className="text-neutral-600">
                Average OSHA penalty per violation
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">47%</div>
              <p className="text-neutral-600">
                Of construction sites face weather-related delays annually
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $250K+
              </div>
              <p className="text-neutral-600">
                Potential cost of serious violations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Change Impact Section */}
      <section className="py-20 px-8 sm:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Adapting to Climate Change
              </h2>
              <p className="text-neutral-600 mb-6">
                As extreme weather events become more frequent and intense,
                construction sites face unprecedented challenges:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Increased frequency of heat waves affecting worker safety
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    More unpredictable weather patterns disrupting schedules
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stricter regulations requiring better preparation</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-400 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Stay Prepared with Oasis
              </h3>
              <p className="text-neutral-600 mb-6">
                Our platform helps you navigate these challenges with advanced
                forecasting, automated compliance checks, and comprehensive
                worker safety protocols.
              </p>
              <Link href="/login">
                <Button className="w-full">Protect Your Workforce</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-sm py-8 text-center border-t">
        <div>
          Built for the{" "}
          <a
            href="https://healthinclimate.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Health in Climate Hackathon
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
