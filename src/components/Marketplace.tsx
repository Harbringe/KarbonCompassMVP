import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  RefreshCw,
  Leaf,
  TreeDeciduous,
  Wind,
  Droplets,
  ListPlus,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Marketplace = () => {
  const carbonCredits = [
    {
      id: 1,
      title: "Reforestation Project",
      location: "Amazon Rainforest, Brazil",
      price: 18.5,
      available: 2500,
      verified: true,
      type: "Biological",
      icon: <TreeDeciduous className="h-5 w-5" />,
      color: "bg-karbon-100 dark:bg-karbon-800 text-karbon-600",
    },
    {
      id: 2,
      title: "Wind Farm Initiative",
      location: "Coastal Gujarat, India",
      price: 15.75,
      available: 4200,
      verified: true,
      type: "Renewable Energy",
      icon: <Wind className="h-5 w-5" />,
      color: "bg-ocean-100 dark:bg-ocean-800 text-ocean-600",
    },
    {
      id: 3,
      title: "Solar Array Expansion",
      location: "Atacama Desert, Chile",
      price: 16.25,
      available: 3800,
      verified: true,
      type: "Renewable Energy",
      icon: <Sparkles className="h-5 w-5" />,
      color: "bg-amber-100 dark:bg-amber-800 text-amber-600",
    },
    {
      id: 4,
      title: "Wetland Restoration",
      location: "Mississippi Delta, USA",
      price: 22.3,
      available: 1200,
      verified: true,
      type: "Biological",
      icon: <Droplets className="h-5 w-5" />,
      color: "bg-ocean-100 dark:bg-ocean-800 text-ocean-600",
    },
  ];

  // return (
  //   <div
  //     id="marketplace"
  //     className="py-20 bg-gradient-to-b from-background via-ocean-50/30 dark:via-ocean-950/30 to-background"
  //   >
  //     <div className="container mx-auto px-4">
  //       {/* Marketplace content removed */}
  //     </div>
  //   </div>
  // );
};

export default Marketplace;
