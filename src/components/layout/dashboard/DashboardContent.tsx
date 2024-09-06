"use client"; // src/components/dashboard/DashboardContent.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";
import InteractivePieChart from "./InteractivePieChart";
import { CRMBarChart } from "@/components/layout/dashboard/CRMBarChart";
import { CRMRadarChart } from "./CRMRadarChart";
import { CRMLineChart } from "./CRMLineChart";

// CRM data for Leads vs Conversions
const lineData = [
  { name: "Jan", leads: 150, conversions: 45 },
  { name: "Feb", leads: 180, conversions: 55 },
  { name: "Mar", leads: 200, conversions: 70 },
  { name: "Apr", leads: 170, conversions: 60 },
  { name: "May", leads: 220, conversions: 80 },
  { name: "Jun", leads: 250, conversions: 90 },
];

const DashboardContent: React.FC = () => {
  const [timeWindow, setTimeWindow] = useState("1w");

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={timeWindow} onValueChange={setTimeWindow}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time window" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1d">1 Day</SelectItem>
            <SelectItem value="1w">1 Week</SelectItem>
            <SelectItem value="1m">1 Month</SelectItem>
            <SelectItem value="3m">3 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">987</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,345</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InteractivePieChart />
        <CRMLineChart/>
        <CRMBarChart />
        <CRMRadarChart />
      </div>
    </div>
  );
};

export default DashboardContent;
