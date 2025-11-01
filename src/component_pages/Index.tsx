import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Marketplace from "@/components/Marketplace";
import IoTDemo from "@/components/IoTDemo";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Marketplace />
        <IoTDemo />

        {/* Added Dashboard section */}
        <div className="py-16 bg-gradient-to-b from-background to-karbon-50/30 dark:to-karbon-950/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Holistic Dashboard
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Access all KarbonLedger applications in one place with our
              comprehensive dashboard designed for all stakeholders in the
              carbon ecosystem.
            </p>
            <div className="flex justify-center">
              <Link href="/dashboard">
                <Button
                  variant="default"
                  className="bg-karbon-600 hover:bg-karbon-700 text-white"
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Open Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
};

export default Index;
