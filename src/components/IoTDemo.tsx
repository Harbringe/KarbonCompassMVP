
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Activity, BarChart, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";

const IoTDemo = () => {
  // Simulate real-time data updates
  const [sensors, setSensors] = useState([
    { id: 1, name: "Energy Sensor A1", status: "online", reading: 12.4, unit: "kWh", lastUpdate: "Just now" },
    { id: 2, name: "Energy Sensor B2", status: "online", reading: 8.7, unit: "kWh", lastUpdate: "1 min ago" },
    { id: 3, name: "Temperature C3", status: "online", reading: 23.5, unit: "°C", lastUpdate: "5 mins ago" },
    { id: 4, name: "Carbon Sensor D4", status: "offline", reading: 42.1, unit: "ppm", lastUpdate: "1 hour ago" },
    { id: 5, name: "Air Quality E5", status: "online", reading: 87, unit: "AQI", lastUpdate: "2 mins ago" },
    { id: 6, name: "Water Flow F6", status: "online", reading: 3.2, unit: "L/min", lastUpdate: "3 mins ago" }
  ]);

  // Simulate data updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prevSensors => {
        return prevSensors.map(sensor => {
          if (sensor.status === "offline") return sensor;

          // Random slight change in reading
          const change = (Math.random() - 0.5) * (sensor.reading * 0.05);
          const newReading = parseFloat((sensor.reading + change).toFixed(1));

          return {
            ...sensor,
            reading: newReading,
            lastUpdate: "Just now"
          };
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simulate a refresh action
  const handleRefresh = () => {
    // Toggle the D4 sensor between online and offline for demo purposes
    setSensors(prevSensors => {
      return prevSensors.map(sensor => {
        if (sensor.id === 4) {
          return {
            ...sensor,
            status: sensor.status === "online" ? "offline" : "online",
            lastUpdate: "Just now"
          };
        }
        return sensor;
      });
    });
  };

  // return (
  //   <div id="iot" className="py-20">
  //     <div className="container mx-auto px-4">
  //       {/* IoT Integration content removed */}
  //     </div>
  //   </div>
  // );
};

export default IoTDemo;
