"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Edit3,
  ShoppingCart,
  CheckCircle,
  Building,
  BarChart3,
  Users,
  UserCheck,
} from "lucide-react";

const Applications = () => {

  const interfaces = [
    {
      id: "project-dev",
      title: "Project Developers",
      icon: <Edit3 className="h-6 w-6 text-karbon-600" />,
      description:
        "For organizations or individuals who develop carbon offset projects",
      features: [
        "Project Dashboard with real-time KPIs",
        "Step-by-step project setup wizard",
        "IoT sensor integration for monitoring",
        "Credit issuance management",
        "Crowdfunding and financing tools",
        "Compliance and regulatory reporting",
      ],
      image: "/placeholder.svg",
    },
    {
      id: "credit-buyer",
      title: "Carbon Credit Buyers",
      icon: <ShoppingCart className="h-6 w-6 text-ocean-600" />,
      description:
        "For individuals and organizations looking to offset their carbon footprint",
      features: [
        "Marketplace with advanced search filters",
        "Detailed credit profiles with verification data",
        "Simple purchase and retirement flow",
        "Portfolio management dashboard",
        "Carbon footprint calculator",
        "Automated sustainability reporting",
      ],
      image: "/placeholder.svg",
    },
    {
      id: "validator",
      title: "Validators & Auditors",
      icon: <CheckCircle className="h-6 w-6 text-karbon-600" />,
      description:
        "For independent validators who verify the legitimacy of carbon projects",
      features: [
        "Verification workflow dashboard",
        "Automated data feeds from IoT devices",
        "Custom validation checklists",
        "AI-powered anomaly detection",
        "Community-based validation tools",
        "Smart contract execution triggers",
      ],
      image: "/placeholder.svg",
    },
    {
      id: "regulator",
      title: "Regulators & Government",
      icon: <Building className="h-6 w-6 text-ocean-600" />,
      description:
        "For government agencies overseeing compliance with emissions reduction goals",
      features: [
        "Comprehensive compliance dashboard",
        "Automated regulatory reporting",
        "Real-time access to emissions data",
        "Integration with international registries",
        "AI-powered fraud detection",
        "Risk assessment tools",
      ],
      image: "/placeholder.svg",
    },
    {
      id: "investor",
      title: "Investors",
      icon: <BarChart3 className="h-6 w-6 text-karbon-600" />,
      description:
        "For individuals and institutions looking to fund carbon offset projects",
      features: [
        "Investment portfolio dashboard",
        "AI-powered risk and ROI analysis",
        "Tokenized investment management",
        "Secondary market access",
        "Financial and ESG reporting",
        "Project milestone tracking",
      ],
      image: "/placeholder.svg",
    },
    {
      id: "community",
      title: "Community & Governance",
      icon: <Users className="h-6 w-6 text-ocean-600" />,
      description:
        "For stakeholders participating in decentralized governance via DAO",
      features: [
        "Voting dashboard for governance decisions",
        "Proposal submission tools",
        "Staking and reward mechanisms",
        "Reputation system",
        "Community discussion forums",
        "Collaboration tools",
      ],
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Stakeholder Interfaces
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                KarbonLedger provides tailored interfaces for different
                stakeholders in the carbon ecosystem, ensuring each user group
                has the tools they need to participate effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interfaces.map((interface_) => (
                <Card
                  key={interface_.id}
                  className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-karbon-400 dark:hover:border-karbon-600"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-karbon-100 dark:bg-karbon-900">
                        {interface_.icon}
                      </div>
                      <CardTitle className="text-xl">{interface_.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {interface_.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-3 text-sm text-karbon-600 dark:text-karbon-400">
                      Interface Pointers:
                    </h3>
                    <ul className="space-y-2">
                      {interface_.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <div className="rounded-full bg-karbon-100 p-1 dark:bg-karbon-800 mt-0.5 flex-shrink-0">
                            <UserCheck className="h-3 w-3 text-karbon-600" />
                          </div>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience KarbonLedger?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                Explore our platform and discover how KarbonLedger can transform
                your carbon management efforts.
              </p>
              <Button
                className="bg-karbon-600 hover:bg-karbon-700 text-white"
                onClick={() => window.open('https://linktr.ee/konmateamsofficehour', '_blank', 'noopener,noreferrer')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Applications;
