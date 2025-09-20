import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold uppercase">Oasis</h1>
        <p className="tracking-[-.01em]">
          Compliance for extreme weather events at construction sites.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/login" target="_blank" rel="noopener noreferrer">
            <Button>Get started</Button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 text-sm flex items-center justify-center">
        <div>
          Built for the{" "}
          <a
            href="https://healthinclimate.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Health in Climate Hackathon
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
