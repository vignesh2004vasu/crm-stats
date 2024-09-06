// src/components/dashboard/CRMRadarChart.tsx
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartContainer,
} from "@/components/ui/chart";

const chartData = [
  { metric: "Customer Satisfaction", value: 78 },
  { metric: "Net Promoter Score", value: 65 },
  { metric: "Customer Retention", value: 70 },
  { metric: "Sales Conversion", value: 85 },
  { metric: "Response Time", value: 60 },
  { metric: "Support Tickets Resolved", value: 80 },
];

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-1))",
  },
};

const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} textAnchor="middle" fill="hsl(var(--))" fontSize={13}>
      {payload.value}
    </text>
  );
};

export function CRMRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Radar Chart - CRM Performance</CardTitle>
        <CardDescription>
          Performance metrics for the current period
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-w-[500px] max-h-[500px]"
        >
          <RadarChart data={chartData} width={500} height={500} >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid className="fill-[--color-performance] opacity-20" />
            <PolarAngleAxis dataKey="metric" tick={<CustomTick />} />
            <Radar
              dataKey="value"
              fill="var(--color-performance)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Metrics for January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
